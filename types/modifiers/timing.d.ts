import { Log } from '~/_contracts';
/**
 * Starts a timer associated with this log's *label*. This will do nothing if
 * this log has no label.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
 */
export declare function time(this: Log): Log;
/**
 * Modifies the log render to show the current high-resolution real time.
 *
 * This is a non-standard method.
 */
export declare function timeNow(this: Log): Log;
/**
 * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the
 * difference between the start time and when this method was called. This then
 * modifies the log render to show the time difference. This will do nothing if the *label* does
 * not exist.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
 */
export declare function timeEnd(this: Log): Log;
