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
