import { Bundler, Log } from './_contracts';
/**
 * Bundles all logs together by wrapping all subsequent logs in a Bundle callback
 * that curries them into an array. This bundle array can be used to recall and
 * filter logs.
 *
 * **Example:**
 * ```javascript
 * const bundled = bundle(adze());
 * bundled.log("This is a log.");
 * bundled.log("This is another log.");
 * bundle.all(); // -> reprints all "bundled" logs.
 * ```
 */
export declare function bundle(log: Log): Bundler;
