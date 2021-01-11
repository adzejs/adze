import defaultsDeep from 'lodash.defaultsdeep';
import {
  ShedConfig, Defaults, Label, Levels,
  ShedUserConfig, FinalLog, Bundle, FilterValue,
  GlobalFilter, LogLevelDefinition, ListenerLocations,
  ListenerBucket, ListenerCallback, LabelMap, ListenerBuckets
} from '~/_contracts';
import { defaults, shed_defaults } from '~/_defaults';
import { isString, formatLevels, allLevels } from '~/util';

import { env } from '~/global';

type FilterType = "include"|"exclude";
type FilterFunction = "isIncluded"|"isNotExcluded";
type FilterAllowedCallback = (filter: FilterType, func: FilterFunction) => boolean|undefined;
/**
 * A typeguard that indicates that a global shed store exists.
 */
export function shedExists(store: Shed|undefined):store is Shed {
  return store !== undefined;
}
/**
 * Creates a new shed instance in your environment's global context.
 */
export function createShed(config: ShedUserConfig): Shed {
  env.$shed = new Shed(config);
  return env.$shed;
}

/**
 * Removes the shed from the environment's global context.
 */
export function removeShed():void {
  delete env.$shed;
}

/**
 * A global store for caching, listening, and recalling Adze logs.
 */
export class Shed {

  /**
   * The configuration for Shed. Shed is constructed with a set of 
   * defaults that can overriden by the configuration supplied by the user.
   */
  private cfg: ShedConfig;

  /**
   * Cache of finalized logs (terminated and have meta data applied to them). This
   * is mainly used for recalling logs and filtering them.
   */
  private cache: FinalLog[] = [];

  /**
   * Cache of label instances. Useful for globally linking labelled logs.
   */
  private labels: LabelMap = new Map();

  /**
   * Counter for generating ID's for listeners.
   */
  private id_counter: number = -1;

  /**
   * Cache of log listeners. These are fire when specified log levels
   * are printed.
   */
  private listeners: ListenerBuckets = new Map();

  constructor(config: ShedUserConfig) {
    const global_cfg = config?.global_cfg ? defaultsDeep(config.global_cfg, defaults) : null;
    const cfg_global_defaults = { ...config, global_cfg };
    this.cfg = defaultsDeep(cfg_global_defaults, shed_defaults);
  }

  /*************************************\
   * GET/SET METHODS
  \*************************************/

  /**
   * Store a log in the shed for later recall.
   */
  public store(log: FinalLog):void {
    if (this.cache.length < this.cfg.cache_limit) {
      this.cache = this.cache.concat([log]);
    }
  }

  /**
   * Sets the limit for the maximum number of logs that Shed will cache.
   */
  public set cacheLimit(limit: number) {
    this.cfg.cache_limit = limit;
  }

  /**
   * Gets the limit for the maximum number of logs that Shed will cache.
   */
  public get cacheLimit():number {
    return this.cfg.cache_limit;
  }

  /**
   * Returns all of the cached logs of the provided levels as a bundle.
   * This is useful for recalling logs and applying filters.
   */
  public getBundle(levels: Levels):Bundle {
    const lvls = formatLevels(this.cfg.global_cfg, levels);
    return this.cache.reduce((acc, log) => {
      return acc.concat(lvls.includes(log.level) ? [ log ] : []);
    }, [] as Bundle);
  }

  /**
   * Indicates whether this shed instance has global Adze config overrides set.
   */
  public get hasOverrides():boolean {
    return this.cfg.global_cfg !== null;
  }

  /**
   * Returns the current value of the global Adze configuration overrides.
   */
  public get overrides():Defaults|null {
    return this.cfg.global_cfg;
  }

  /**
   * Getter for configuration of the hideAll filter property.
   */
  private get hideAll():boolean {
    return this.cfg?.filters.hideAll ?? false;
  }

  /**
   * Sets the current value of the global Adze configuration overrides.
   */
  public set config(cfg: Defaults|null) {
    const defaulted = cfg ? defaultsDeep(cfg, defaults) : cfg;
    this.cfg.global_cfg = defaulted;
  }

  /**
   * Get a label from the Shed by name.
   */
  public getLabel(name: string):Label|undefined {
    return this.labels.get(name);
  }
  
  /**
   * Adds a label to the Shed to be tracked globally.
   */
  public addLabel(label: Label):void {
    if (!this.hasLabel(label.name)) {
      this.labels.set(label.name, label);
    }
  }

  /**
   * Validates whether a label with the given name exists in the Shed label cache.
   */
  public hasLabel(name: string):boolean {
    return this.labels.has(name);
  }

  /*************************************\
   * LISTENER METHODS
  \*************************************/

  /**
   * Add a listener callback that fires any time a log of one of the provided levels is generated.
   */
  public addListener(levels: Levels, cb: ListenerCallback):ListenerLocations {
    const lvls = formatLevels(this.cfg.global_cfg, levels);
    return lvls.map((lvl: number) => {

      // Get the map for the listeners of the given log level.
      const level_map = this.listenerBucket(lvl);
      // Generate a new ID for the listener.
      const id = this.assignId();

      // Assign an ID to the listener for later teardown.
      level_map.set(id, cb);
      this.listeners.set(lvl, level_map);

      // Return the listener location tuple
      return [lvl, id];
    });
  }

  /**
   * Remove log listeners at the given bucket locations.
   */ 
  public removeListener(locations: ListenerLocations):void {
    locations.forEach(([lvl_id, id]) => {
      const level = this.listeners.get(lvl_id);
      level?.delete(id);
    });
  }

  /**
   * Fire any log listeners for the provided log.
   */
  public fireListeners(log: FinalLog, def: LogLevelDefinition):void {
    this.listeners.get(log.level)?.forEach(listener => {
      listener({ ...log, ...def });
    });
  }

  /*************************************\
   * GLOBAL FILTER METHODS
  \*************************************/

  /**
   * Returns a boolean indicating if this log instance should be 
   * allowed to print.
   */
  public logGloballyAllowed(log: FinalLog): boolean {
    return !this.hideAll
      && this.levelAllowed(log)
      && this.labelAllowed(log)
      && this.namespaceAllowed(log);
  }

  /**
   * Validate that the current level set on the log is allowed based on
   * the global filter rules.
   */
  private levelAllowed(log: FinalLog): boolean {
    return this.filterAllowed('level', (filter, func) => {
      const raw_source = this.cfg.filters?.level?.[filter] ?? [] as number[];
      const source = raw_source === '*' ? allLevels(this.cfg.global_cfg) : raw_source;
      return this[func]<number>(source, log.level);
    });
  }

  /**
   * Validate that the current label set on the log is allowed based on
   * the global filter rules.
   */
  private labelAllowed(log: FinalLog): boolean {
    return this.filterAllowed('label', (filter, func) => {
      const source = this.cfg.filters?.label?.[filter] ?? [] as string[];
      return this[func]<string>(source, log?.labelVal?.name ?? '');
    });
  }

  /**
   * Validate that at least one of the current namespaces set on the log
   * is allowed based on the global filter rules.
   */
  private namespaceAllowed(log: FinalLog): boolean {
    return this.filterAllowed('namespace', (filter, func) => {
      const source = this.cfg.filters?.namespace?.[filter] ?? [] as string[];
      const target = log.namespaceVal;
      if (target) {
        if (isString(target)) {
          return this[func]<string>(source, target);
        } else {
          // Namespace log value is an array. Check each namespace value.
          return target.map(val => this[func]<string>(source, val)).includes(true);
        }
      }
    });
  }

  /**
   * Wrapper around the filter methods to handle some basic setup for validating
   * the filter values.
   */
  private filterAllowed(category: GlobalFilter, cb: FilterAllowedCallback): boolean {
    const filter_type = this.filterType(category);
    if (filter_type) {
      const [ filter, func ] = filter_type;
      const result = cb(filter, func);
      if (result !== undefined) {
        return result;
      }
    }
    return true;
  }

  /**
   * Returns tuples indicating what filter type is active. Include gets precedence over exclude.
   */
  private filterType(category: GlobalFilter): ["include","isIncluded"]|["exclude","isNotExcluded"]|undefined {
    switch (true) {
      case this.filterIsSet('include', category)  : return ['include','isIncluded'];
      case this.filterIsSet('exclude', category)  : return ['exclude','isNotExcluded'];
    }
  }

  /**
   * Is the log in the included filter?
   */
  private isIncluded<T>(source: T[], value: T): boolean {
    return source.length > 0 && source.indexOf(value) !== -1;
  }

  /**
   * Is the log not in the excluded filter?
   */
  private isNotExcluded<T>(source: T[], value: T): boolean {
    return source.length > 0 && source.indexOf(value) === -1;
  }

  /**
   * Has the user defined rules for a specific filter?
   */
  private filterIsSet(type: "include"|"exclude", filter: GlobalFilter):boolean {
    const include_prop = this.cfg?.filters?.[filter]?.[type] ?? [];
    return include_prop.length > 0;
  }

  /*************************************\
   * HELPER METHODS
  \*************************************/

  /**
   * Guarantee that a listener bucket exists for the given log level and return the bucket.
   */
  private listenerBucket(lvl: number):ListenerBucket {
    if (!this.listeners.has(lvl)) {
      this.listeners.set(lvl, new Map());
    }
    // Override TS because the ListenerBucket is guaranteed by the condition above.
    return this.listeners.get(lvl) as ListenerBucket;
  }

  /**
   * Increment the ID counter and return the new value.
   */
  private assignId():number {
    return (this.id_counter += 1);
  }

}
