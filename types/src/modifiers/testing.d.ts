import { Log } from '../_contracts';
/**
 * Prints a log warning that the assertion failed if the assertion is false.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
 */
export declare function assert(this: Log, assertion: boolean): Log;
/**
 * Allows the log to print if the expression is true.
 *
 * This is a non-standard method.
 */
export declare function test(this: Log, expression: boolean): Log;
