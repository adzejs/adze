import { Defaults, FinalLogData } from '../_contracts';
/**
 * Parses the level filter on the configuration and reassigns it.
 * This is for increased performance so this calculation isn't done each
 * time a log is checking against the filter.
 */
export declare function parseFilterLevels(cfg: Defaults): Defaults;
/**
 * Validate that the current level set on the log is allowed based on
 * the filter rules.
 */
export declare function levelAllowed(data: FinalLogData): boolean;
/**
 * Validate that the current label set on the log is allowed based on
 * the filter rules.
 */
export declare function labelAllowed(data: FinalLogData): boolean;
/**
 * Validate that at least one of the current namespaces set on the log
 * is allowed based on the filter rules.
 */
export declare function namespaceAllowed(data: FinalLogData): boolean;
