import { Log } from '~/_contracts';
/**
 * Adds a label to the log. Label's can be used for log identification
 * and grouping. Label's also link log instances together.
 *
 * This is a non-standard API, but it replaces the need to provide
 * a label to `count()` or `time()`.
 */
export declare function label(this: Log, name: string): Log;
/**
 * Adds a namespace to the log. Namespace's are primarily useful
 * for grouping logs together.
 *
 * This is a non-standard API.
 */
export declare function namespace(this: Log, ns: string | string[]): Log;
/**
 * An alias for `namespace()`.
 */
export declare function ns(this: Log, ns: string | string[]): Log;
/**
 * Prints a stacktrace along with the log.
 *
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
 */
export declare function trace(this: Log): Log;
