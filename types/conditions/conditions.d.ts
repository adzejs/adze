import { Log, Defaults, LogLevelDefinition } from '../_contracts';
/**
 * Determine the fate of whether this log will terminate.
 */
export declare function allowed(cfg: Defaults, def: LogLevelDefinition): boolean;
/**
 * Check if the log level is high enough for the log to terminate.
 */
export declare function levelActive(def: LogLevelDefinition, level: number): boolean;
/**
 * Check if any assertions or expressions pass for this log to terminate.
 */
export declare function evalPasses(log: Log): boolean;
/**
 * Verify that this log is not in a test environment by checking the environment context
 * or URL params if within a browser context. Prevent termination of the log if it is 'test'.
 */
export declare function notTestEnv(): boolean;
