import { Defaults, Label, ShedUserConfig, FinalLog, Collection, LevelFilter, ListenerLocations, ListenerCallback } from './_contracts';
/**
 * A typeguard that indicates that a global shed store exists.
 */
export declare function shedExists(store: Shed | undefined): store is Shed;
/**
 * Creates a new shed instance in your environment's global context.
 */
export declare function createShed(config: ShedUserConfig): Shed;
/**
 * Removes the shed from the environment's global context.
 */
export declare function removeShed(): void;
/**
 * A global store for caching, listening, and recalling Adze logs.
 */
export declare class Shed {
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
    private cache;
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
    constructor(config: ShedUserConfig);
    /**
     * Parses the level filter on the configuration and reassigns it.
     * This is for increased performance so this calculation isn't done each
     * time a log is checking against the filter.
     */
    private parseFilterLevels;
    /*************************************\
     * GET/SET METHODS
    \*************************************/
    /**
     * Store a log in the shed for later recall.
     */
    store(log: FinalLog): void;
    /**
     * Sets the limit for the maximum number of logs that Shed will cache.
     */
    set cacheLimit(limit: number);
    /**
     * Gets the limit for the maximum number of logs that Shed will cache.
     */
    get cacheLimit(): number;
    /**
     * Returns all of the cached logs of the provided levels as a bundle.
     * This is useful for recalling logs and applying filters.
     */
    getCollection(levels: LevelFilter): Collection;
    /**
     * Indicates whether this shed instance has global Adze config overrides set.
     */
    get hasOverrides(): boolean;
    /**
     * Returns the current value of the global Adze configuration overrides.
     */
    get overrides(): Defaults | null;
    /**
     * Getter for configuration of the hideAll filter property.
     */
    private get hideAll();
    /**
     * Sets the current value of the global Adze configuration overrides.
     */
    set config(cfg: Defaults | null);
    /**
     * Get a label from the Shed by name.
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
     * Add a listener callback that fires any time a log of one of the provided levels is generated.
     */
    addListener(levels: LevelFilter, cb: ListenerCallback): ListenerLocations;
    /**
     * Remove log listeners at the given bucket locations.
     */
    removeListener(locations: ListenerLocations): void;
    /**
     * Fire any log listeners for the provided log. Passes the log render
     * and a slimmed down log data object.
     */
    fireListeners(log: FinalLog): void;
    /*************************************\
     * GLOBAL FILTER METHODS
    \*************************************/
    /**
     * Returns a boolean indicating if this log instance should be
     * allowed to print.
     */
    logGloballyAllowed(log: FinalLog): boolean;
    /**
     * Validate that the current level set on the log is allowed based on
     * the global filter rules.
     */
    private levelAllowed;
    /**
     * Validate that the current label set on the log is allowed based on
     * the global filter rules.
     */
    private labelAllowed;
    /**
     * Validate that at least one of the current namespaces set on the log
     * is allowed based on the global filter rules.
     */
    private namespaceAllowed;
    /**
     * Wrapper around the filter methods to handle some basic setup for validating
     * the filter values.
     */
    private filterAllowed;
    /**
     * Returns tuples indicating what filter type is active. Include gets precedence over exclude.
     */
    private filterType;
    /**
     * Is the log in the included filter?
     */
    private isIncluded;
    /**
     * Is the log not in the excluded filter?
     */
    private isNotExcluded;
    /**
     * Has the user defined rules for a specific filter?
     */
    private filterIsSet;
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
