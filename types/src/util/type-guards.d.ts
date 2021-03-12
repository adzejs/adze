import { LogData, FinalLogData } from '../_contracts';
/**
 * Type Guard to check if the given value is a String.
 */
export declare function isString(val: unknown): val is string;
/**
 * Type Guard to check if the given value is an Array.
 */
export declare function isArray(val: unknown): val is [];
/**
 * Type Guard that validates that the given value is not undefined.
 */
export declare function isDefined<T>(val: T | undefined): val is T;
/**
 * Type guard that indicates a log data object is finalized.
 */
export declare function isFinalLogData(data: LogData | FinalLogData): data is FinalLogData;
/**
 * Type guard that indicates the provided value is a Chalk style.
 */
/**
 * Type guard that indicates the provided value is an array of chalk styles.
 */
