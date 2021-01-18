import { Log } from '../_contracts';
/**
 * Adds to the log count for log instances that share this log's label.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
 */
export declare function count(this: Log): Log;
/**
 * Resets the count for the log instances that share this log's label.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
 */
export declare function countReset(this: Log): Log;
/**
 * Unsets the count for the log instances that share this log's label.
 *
 * This is a non-standard method.
 */
export declare function countClear(this: Log): Log;
