import { Defaults, FinalLogData, LogLevelDefinition } from '../_contracts';
/**
 * Determine the fate of whether this log will terminate.
 */
export declare function allowed(data: FinalLogData): boolean;
/**
 * Check if the log level is high enough for the log to terminate.
 */
export declare function levelActive(def: LogLevelDefinition, level: number): boolean;
/**
 * Validates the log against the configured filters.
 */
export declare function passesFilters(cfg: Defaults, data: FinalLogData): boolean;
/**
 * Verify that this log is not in a test environment by checking the environment context
 * or URL params if within a browser context. Prevent termination of the log if it is 'test'.
 */
export declare function notTestEnv(): boolean;
