import { Method, MethodWithArgs, MethodWithoutArgs, SpecialMethod } from '../_types';
import {
  methodsWithArgs,
  specialMethods,
  specialMethodsWithArgsAndLeader,
  specialMethodsWithoutArgs,
} from '../constants';

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
export function isMethodWithArgs(value: Method): value is MethodWithArgs {
  return methodsWithArgs.includes(value as any);
}

/**
 * Type guard to determine if a console method is a common method.
 */
export function isMethodWithoutArgs(value: Method): value is MethodWithoutArgs {
  return specialMethodsWithoutArgs.includes(value as any);
}

/**
 * Type guard to determine if a console method is a special method.
 */
export function isSpecialMethod(value: Method): value is SpecialMethod {
  return specialMethods.includes(value as any);
}

/**
 * Type guard to determine if a console method is a special method with a leader.
 */
export function isSpecialMethodWithLeader(value: Method): value is SpecialMethod {
  return specialMethodsWithArgsAndLeader.includes(value as any);
}
