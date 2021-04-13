import { ShedUserConfig, Collection, LevelFilter, ListenerLocations, ListenerCallback, FinalLogData, LogRender, Configuration } from './_contracts';
import { BaseLog } from './log/BaseLog';
import { Label } from './label';
import { Env } from './Env';
/**
 * A typeguard that indicates that a global Shed store exists.
 */
export declare function shedExists(store: Shed | undefined): store is Shed;
/**
 * Creates a new Shed instance in your environment's global context.
 */
export declare function createShed(config?: ShedUserConfig): Shed;
/**
 * Removes the Shed from the environment's global context.
 */
export declare function removeShed(): void;
/**
 * A global store for caching, listening, and recalling Adze logs.
 */
export declare class Shed {
    /**
     * Instance of the Env class.
     */
    private env;
    /**
     * The configuration for Shed. Shed is constructed with a set of
     * defaults that can overriden by the configuration supplied by the user.
     */
    private cfg;
    /**
     * In-memory cache of finalized logs (terminated and have meta data applied to them). This
     * is mainly used for recalling logs and filtering them.
     *
     * Do not access this value directly. Use the `cache()` setter and getter.
     */
    private _cache;
    /**
     * Cache of label instances. Useful for globally linking labelled logs.
     */
    private labels;
    /**
     * Counter for generating ID's for listeners.
     */
    private id_counter;
    /**
     * Cache of log listeners. These are fire when specified log levels
     * are printed.
     */
    private listeners;
    constructor(env: Env, config?: ShedUserConfig);
    /*************************************\
     * GET/SET METHODS
    \*************************************/
    /**
     * Store a log in the Shed.
     */
    store(log: BaseLog): void;
    /**
     * Sets the limit for the maximum number of logs that Shed will cache.
     */
    set cacheLimit(limit: number);
    /**
     * Gets the limit for the maximum number of logs that Shed will cache.
     */
    get cacheLimit(): number;
    /**
     * Returns the current number of logs cached in the Shed.
     */
    get cacheSize(): number;
    /**
     * Returns all of the cached logs of the provided levels as a bundle.
     * This is useful for recalling logs and applying filters.
     */
    getCollection(levels: LevelFilter): Collection;
    /**
     * Indicates whether this Shed instance has global Adze config overrides set.
     */
    get hasOverrides(): boolean;
    /**
     * Returns the current value of the global Adze configuration overrides.
     */
    get overrides(): Configuration | null;
    /**
     * Sets the value of the Shed configuration.
     */
    set config(cfg: ShedUserConfig | undefined);
    /**
     * Takes a Shed and formats it to merge shed defaults and
     * global config overrides with defaults. It also pre-parses any level
     * filters for performance reasons.
     */
    private formatConfig;
    /**
     * Get a label instance from the Shed by name.
     */
    getLabel(name: string): Label | undefined;
    /**
     * Adds a label to the Shed to be tracked globally.
     */
    addLabel(label: Label): void;
    /**
     * Validates whether a label with the given name exists in the Shed label cache.
     */
    hasLabel(name: string): boolean;
    /*************************************\
     * LISTENER METHODS
    \*************************************/
    /**
     * Add a listener callback that fires any time a log of one of the provided levels is terminated.
     */
    addListener(levels: LevelFilter, cb: ListenerCallback): ListenerLocations;
    /**
     * Remove log listeners at the provided locations.
     */
    removeListener(locations: ListenerLocations): void;
    /**
     * Fires any listeners that are watching the log level defined in the provided log data. The log data
     * and render object will be passed to the listener callback.
     */
    fireListeners(log: FinalLogData, render: LogRender | null): void;
    /*************************************\
     * HELPER METHODS
    \*************************************/
    /**
     * Guarantee that a listener bucket exists for the given log level and return the bucket.
     */
    private listenerBucket;
    /**
     * Increment the ID counter and return the new value.
     */
    private assignId;
}
