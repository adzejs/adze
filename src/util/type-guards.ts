import { LogData, FinalLogData, Constraints } from '../_contracts';

/**
 * Type Guard to check if the given value is a String.
 */
export function isString(val: unknown): val is string {
  return typeof val === 'string';
}

/**
 * Type Guard to check if the given value is a String.
 */
export function isNumber(val: unknown): val is number {
  return typeof val === 'number';
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
export function isFinalLogData<C extends Constraints>(
  data: LogData<C> | FinalLogData<C>
): data is FinalLogData<C> {
  return (
    data.level !== null && data.definition !== null && data.args !== null && data.timestamp !== null
  );
}

// NOTE: The type guards below are currently not in use.

/**
 * Type guard that indicates the provided value is a Chalk style.
 */
// export function isChalkStyle(val: unknown): val is ChalkStyle {
//   return isString(val) && chalk_styles.includes(val as ChalkStyle);
// }

/**
 * Type guard that indicates the provided value is an array of chalk styles.
 */
// export function isChalkStyles(val: unknown): val is ChalkStyle[] {
//   return isArray(val) && val.filter(isChalkStyle).length === 0;
// }
