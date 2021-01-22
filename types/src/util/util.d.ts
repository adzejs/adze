import { LogTimestamp, Defaults, LogLevels, LevelFilter, FinalLog, LogData } from '../_contracts';
/**
 * Capitalizes the first character of the provided string.
 */
export declare function initialCaps(str: string): string;
/**
 * Applies property mutations to the provided object.
 */
export declare function mutateProps<O>(obj: any, mutations: Array<[string, any]>): O;
/**
 * Generate a unique ID for your log.
 */
export declare function timestamp(): LogTimestamp;
/**
 * Gets a URLSearchParams object of the current URL.
 */
export declare function getSearchParams(): URLSearchParams | undefined;
/**
 * Converts a level value of '*' to an array of numbers up to the highest
 * value defined by the user configuration. If levels is already a number array
 * it is returned unchanged.
 */
export declare function formatLevels(cfg: Defaults | null, levels: LevelFilter): number[];
/**
 * Creates a slimmed down object comprised of data from
 * the final log.
 */
export declare function makeLogData(log: FinalLog): LogData;
/**
 * Type Guard that validates that a given string represents a
 * range of numbers.
 */
export declare function isRange(val: string): boolean;
/**
 * Returns the highest level from the provided configuration.
 */
export declare function getMaxLevel(cfg: Defaults | null): number;
/**
 * Parse a range string into a tuple of numbers containing low and high.
 */
export declare function parseRange(range: string): [number, number];
/**
 * Get all level values from a config of type LogLevels.
 */
export declare function levelsFromConfig(lvls: LogLevels | Partial<LogLevels>): number[];
/**
 * Create an array of number containing every number from the start value to end value.
 */
export declare function createArrayOfNumbers(start: number, end: number): number[];
/**
 * Type Guard to check if the given value is a String.
 */
export declare function isString(val: any): val is string;
/**
 * Type Guard to check if the given value is an Array.
 */
export declare function isArray(val: any): val is [];
/**
 * Type Guard that validates that the given value is not undefined.
 */
export declare function isDefined<T>(val: T | undefined): val is T;
