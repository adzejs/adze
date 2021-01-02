import defaultsDeep from 'lodash.defaultsdeep';
import {
  ShedConfig, Defaults, Label,
  ShedUserConfig, FinalLog, Bundle,
  LogLevelDefinition, ListenerLocations,
  ListenerBucket, ListenerCallback, LabelMap, ListenerBuckets
} from '~/_contracts';
import { defaults, shed_defaults } from '~/_defaults';

import { env } from '~/global';

type GlobalFilters = "label"|"namespace"|"level";

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
  public getBundle(levels: number[]):Bundle {
    return this.cache.reduce((acc, log) => {
      return acc.concat(levels.includes(log.level) ? [ log ] : []);
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
  public addListener(levels: number[], cb: ListenerCallback):ListenerLocations {
    return levels.map((lvl: number) => {

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
  public logGloballyAllowed(log: FinalLog):boolean {
    return !this.hideAll
      && this.logAllowedLogic('label', log?.labelVal?.name)
      && this.logAllowedLogic('level', log.level)
      && this.logAllowedLogic('namespace', log.namespaceVal);
  }

  /**
   * Determines if provided value passes user configured
   * global filters.
   */
  private logAllowedLogic(category: GlobalFilters, value: string|number|undefined):boolean {
    // If the value is undefined we cannot determine if it should hide the log
    if (value === undefined) {
      return true;
    }
    if (this.filterIsSet('include', category)) {
      return this.isIncluded(category, value);
    }
    if (this.filterIsSet('exclude', category)) {
      return this.isNotExcluded(category, value);
    }
    return true;
  }

  /**
   * Has the user has defined rules for a specific filter?
   */
  private filterIsSet(type: "include"|"exclude", filter: GlobalFilters):boolean {
    const include_prop = this.cfg?.filters?.[filter]?.include ?? [];
    return include_prop.length > 0;
  }

  /**
   * Is the log in the included filter?
   */
  private isIncluded(filter: GlobalFilters, value: string|number):boolean {
    const filter_vals = this.cfg?.filters?.[filter]?.include ?? <any>[];
    return filter_vals.length > 0 && filter_vals.indexOf(value) !== -1;
  }

  /**
   * Is the log not in the excluded filter?
   */
  private isNotExcluded(filter: GlobalFilters, value: string|number):boolean {
    const filter_vals = this.cfg?.filters?.[filter]?.exclude ?? <any>[];
    return filter_vals.length > 0 && filter_vals.indexOf(value) === -1;
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
