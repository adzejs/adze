import { Log } from '../_contracts';
/**
 * Starts a log group.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
 */
export declare function group(this: Log): Log;
/**
 * Starts a log group that is collapsed by default.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
 */
export declare function groupCollapsed(this: Log): Log;
/**
 * Ends the most recently opened log group.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
 */
export declare function groupEnd(this: Log): Log;
