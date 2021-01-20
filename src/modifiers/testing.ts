import { Log } from '../_contracts';
import { modifier } from './modifier';

/**
 * Prints a log warning that the assertion failed if the assertion is false.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
 */
export function assert(this: Log, assertion: boolean): Log {
  return modifier(this, () => {
    this.assertion = assertion;
  });
}

/**
 * Allows the log to print if the expression is true.
 *
 * This is a non-standard method.
 */
export function test(this: Log, expression: boolean): Log {
  return modifier(this, () => {
    this.expression = expression;
  });
}
