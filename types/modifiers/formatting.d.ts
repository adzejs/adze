import { Log } from '../_contracts';
/**
 * Instructs this log to print in the dir format. Typically this is useful
 * for rendering deeply nested objects in the console.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
 */
export declare function dir(this: Log): Log;
/**
 * Instructs this log to print in the dirxml format. Typically this is useful
 * for rendering HTML/DOM or XML Elements in the console.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
 */
export declare function dirxml(this: Log): Log;
/**
 * Instructs this log to print its argument in a table format.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
 */
export declare function table(this: Log): Log;
/**
 * This modifier method allows the log to execute normally but
 * prevent it from printing to the console.
 */
export declare function silent(this: Log): Log;
