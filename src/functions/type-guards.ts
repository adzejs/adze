import { CommonMethod, Method } from '../_types';
import { commonMethods } from '../constants';

/**
 * Type guard to validate that the value is a string.
 */
export function isString(value: unknown): value is string {
  return Object.prototype.toString.call(value) === '[object String]';
}

/**
 * Type guard that validates that an object contains all of the specified properties.
 */
export function hasOwnProperties<
  X extends Record<any, unknown>,
  Y extends PropertyKey,
  A extends Y[],
>(obj: X, props: A): obj is X & Record<Y, unknown> {
  return !props.map((prop) => obj[prop] !== undefined).includes(false);
}

/**
 * Type guard to determine if a console method is a common method.
 */
export function isCommonMethod(value: Method): value is CommonMethod {
  return commonMethods.includes(value as any);
}
