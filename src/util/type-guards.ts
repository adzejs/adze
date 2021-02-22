import { LogData, FinalLogData } from '../_contracts';

/**
 * Type Guard to check if the given value is a String.
 */
export function isString(val: unknown): val is string {
  return typeof val === 'string';
}

/**
 * Type Guard to check if the given value is an Array.
 */
export function isArray(val: unknown): val is [] {
  return Array.isArray(val);
}

/**
 * Type Guard that validates that the given value is not undefined.
 */
export function isDefined<T>(val: T | undefined): val is T {
  return val !== undefined;
}

/**
 * Type guard that indicates a log data object is finalized.
 */
export function isFinalLogData(
  data: LogData | FinalLogData
): data is FinalLogData {
  return (
    data.level !== null &&
    data.definition !== null &&
    data.args !== null &&
    data.timestamp !== null
  );
}
