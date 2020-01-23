import { Log } from '../_contracts';
import { modifier } from './modifier';

// Prints log warning that the assertion failed if assertion is false.
export function assert(this: Log, assertion: boolean):Log {
  return modifier(this, () => {
    this.assertion = assertion;
  });
}

// Non-standard. Allows log to print if expression is true.
export function test(this: Log, expression: boolean):Log {
  return modifier(this, () => {
    this.expression = expression;
  });
}