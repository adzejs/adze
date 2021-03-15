import defaultsDeep from 'lodash/defaultsDeep';
import {
  ShedConfig,
  Defaults,
  ShedUserConfig,
  Collection,
  LevelFilter,
  GlobalFilter,
  ListenerLocations,
  ListenerBuckets,
  ListenerBucket,
  ListenerCallback,
  LabelMap,
  FilterAllowedCallback,
  FinalLogData,
  LogRender,
} from './_contracts';
import { BaseLog } from './log/BaseLog';
import { Label } from './label';
import { defaults, shed_defaults } from './_defaults';
import { formatLevels } from './util';
import { Env } from './Env';

/**
 * A typeguard that indicates that a global shed store exists.
 */
export function shedExists(store: Shed | undefined): store is Shed {
  return store !== undefined;
}
/**
 * Creates a new shed instance in your environment's global context.
 */
export function createShed(config?: ShedUserConfig): Shed {
  const env = new Env();
  env.global.$shed = new Shed(env, config);
  return env.global.$shed;
}

/**
 * Removes the shed from the environment's global context.
 */
export function removeShed(): void {
  delete Env.global().$shed;
}

/**
 * A global store for caching, listening, and recalling Adze logs.
 */
export class Shed {
  /**
   * Instance of the Env class.
   */
  private env: Env = new Env();

  /**
   * The configuration for Shed. Shed is constructed with a set of
   * defaults that can overriden by the configuration supplied by the user.
   */
  private cfg: ShedConfig;

  /**
   * In-memory cache of finalized logs (terminated and have meta data applied to them). This
   * is mainly used for recalling logs and filtering them.
   *
   * Do not access this value directly. Use the `cache()` setter and getter.
   */
  private cache: Collection = [];

  /**
   * Cache of label instances. Useful for globally linking labelled logs.
   */
  private labels: LabelMap = new Map();

  /**
   * Counter for generating ID's for listeners.
   */
  private id_counter = -1;

  /**
   * Cache of log listeners. These are fire when specified log levels
   * are printed.
   */
  private listeners: ListenerBuckets = new Map();

  constructor(env: Env, config?: ShedUserConfig) {
    this.env = env;
    this.cfg = this.formatConfig(config);
  }

  /**
   * Parses the level filter on the configuration and reassigns it.
   * This is for increased performance so this calculation isn't done each
   * time a log is checking against the filter.
   */
  private parseFilterLevels(cfg: ShedConfig) {
    const new_cfg: ShedConfig = { ...cfg };
    if (
      this.filterIsSet(cfg, 'include', 'level') &&
      new_cfg.filters.level?.include
    ) {
      new_cfg.filters.level.include = formatLevels(
        new_cfg.global_cfg,
        new_cfg.filters.level.include
      );
    }
    if (
      this.filterIsSet(cfg, 'exclude', 'level') &&
      new_cfg.filters.level?.exclude
    ) {
      new_cfg.filters.level.exclude = formatLevels(
        new_cfg.global_cfg,
        new_cfg.filters.level.exclude
      );
    }
    return new_cfg;
  }

  /*************************************\
   * GET/SET METHODS
  \*************************************/

  /**
   * Store a log in the shed for later recall.
   */
  public store(log: BaseLog): void {
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
  public get cacheLimit(): number {
    return this.cfg.cache_limit;
  }

  /**
   * Returns all of the cached logs of the provided levels as a bundle.
   * This is useful for recalling logs and applying filters.
   */
  public getCollection(levels: LevelFilter): Collection {
    const lvls = formatLevels(this.cfg.global_cfg, levels);
    return this.cache.reduce((acc, log) => {
      return acc.concat(lvls.includes(log.level ?? Infinity) ? [log] : []);
    }, [] as Collection);
  }

  /**
   * Indicates whether this shed instance has global Adze config overrides set.
   */
  public get hasOverrides(): boolean {
    return this.cfg.global_cfg !== null;
  }

  /**
   * Returns the current value of the global Adze configuration overrides.
   */
  public get overrides(): Defaults | null {
    return this.cfg.global_cfg;
  }

  /**
   * Getter for configuration of the hideAll filter property.
   */
  private get hideAll(): boolean {
    return this.cfg?.filters.hideAll ?? false;
  }

  /**
   * Sets the current value of the global Adze configuration overrides.
   */
  public set config(cfg: ShedUserConfig | undefined) {
    this.cfg = this.formatConfig(cfg);
  }

  private formatConfig(cfg: ShedUserConfig | undefined): ShedConfig {
    const global_cfg = cfg?.global_cfg
      ? (defaultsDeep(cfg.global_cfg, defaults) as Defaults)
      : null;
    const cfg_global_defaults = { ...cfg, global_cfg };
    const cfg_defaults = defaultsDeep(cfg_global_defaults, shed_defaults);
    return this.parseFilterLevels(cfg_defaults);
  }

  /**
   * Get a label from the Shed by name.
   */
  public getLabel(name: string): Label | undefined {
    return this.labels.get(name);
  }

  /**
   * Adds a label to the Shed to be tracked globally.
   */
  public addLabel(label: Label): void {
    if (!this.hasLabel(label.name)) {
      this.labels.set(label.name, label);
    }
  }

  /**
   * Validates whether a label with the given name exists in the Shed label cache.
   */
  public hasLabel(name: string): boolean {
    return this.labels.has(name);
  }

  /*************************************\
   * LISTENER METHODS
  \*************************************/

  /**
   * Add a listener callback that fires any time a log of one of the provided levels is generated.
   */
  public addListener(
    levels: LevelFilter,
    cb: ListenerCallback
  ): ListenerLocations {
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
  public removeListener(locations: ListenerLocations): void {
    locations.forEach(([lvl_id, id]) => {
      const level = this.listeners.get(lvl_id);
      level?.delete(id);
    });
  }

  /**
   * Fire any log listeners for the provided log. Passes the log render
   * and a slimmed down log data object.
   */
  public fireListeners(log: FinalLogData, render: LogRender | null): void {
    this.listeners.get(log.level)?.forEach((listener) => {
      listener(log, render);
    });
  }

  /*************************************\
   * GLOBAL FILTER METHODS
  \*************************************/

  /**
   * Returns a boolean indicating if this log instance should be
   * allowed to print.
   */
  public logGloballyAllowed(log: FinalLogData): boolean {
    return (
      !this.hideAll &&
      this.levelAllowed(log) &&
      this.labelAllowed(log) &&
      this.namespaceAllowed(log)
    );
  }

  /**
   * Validate that the current level set on the log is allowed based on
   * the global filter rules.
   */
  private levelAllowed(log: FinalLogData): boolean {
    return this.filterAllowed('level', (filter, func) => {
      const source = this.cfg.filters?.level?.[filter] ?? ([] as number[]);
      return this[func]<number>(source, log.level);
    });
  }

  /**
   * Validate that the current label set on the log is allowed based on
   * the global filter rules.
   */
  private labelAllowed(log: FinalLogData): boolean {
    return this.filterAllowed('label', (filter, func) => {
      const source = this.cfg.filters?.label?.[filter] ?? ([] as string[]);
      return this[func]<string>(source, log.label.name ?? '');
    });
  }

  /**
   * Validate that at least one of the current namespaces set on the log
   * is allowed based on the global filter rules.
   */
  private namespaceAllowed(log: FinalLogData): boolean {
    return this.filterAllowed('namespace', (filter, func) => {
      const filter_ns =
        this.cfg.filters?.namespace?.[filter] ?? ([] as string[]);

      const log_ns = log.namespace;

      if (log_ns) {
        // Namespace log value is an array. Check each namespace value.
        const arr = log_ns.map((val) => this[func]<string>(filter_ns, val));

        // If filter is include, namspace is allowed if at least one passes
        if (func === 'isIncluded') {
          return arr.includes(true);
        }
        // If filter is exclude, namspace is allowed if all pass
        return !arr.includes(false);
      }
    });
  }

  /**
   * Wrapper around the filter methods to handle some basic setup for validating
   * the filter values.
   */
  private filterAllowed(
    category: GlobalFilter,
    cb: FilterAllowedCallback
  ): boolean {
    const filter_type = this.filterType(category);
    if (filter_type) {
      const [filter, func] = filter_type;
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
  private filterType(
    category: GlobalFilter
  ): ['include', 'isIncluded'] | ['exclude', 'isNotExcluded'] | undefined {
    switch (true) {
      case this.filterIsSet(this.cfg, 'include', category):
        return ['include', 'isIncluded'];
      case this.filterIsSet(this.cfg, 'exclude', category):
        return ['exclude', 'isNotExcluded'];
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
  private filterIsSet(
    cfg: ShedConfig,
    type: 'include' | 'exclude',
    filter: GlobalFilter
  ): boolean {
    const include_prop = cfg?.filters?.[filter]?.[type] ?? [];
    return include_prop.length > 0;
  }

  /*************************************\
   * HELPER METHODS
  \*************************************/

  /**
   * Guarantee that a listener bucket exists for the given log level and return the bucket.
   */
  private listenerBucket(lvl: number): ListenerBucket {
    if (!this.listeners.has(lvl)) {
      this.listeners.set(lvl, new Map());
    }
    // Override TS because the ListenerBucket is guaranteed by the condition above.
    return this.listeners.get(lvl) as ListenerBucket;
  }

  /**
   * Increment the ID counter and return the new value.
   */
  private assignId(): number {
    return (this.id_counter += 1);
  }
}
