import { Bundler } from './_contracts';
import { Log } from './log';
/**
 * Bundles logs together by wrapping all subsequent logs in a Bundle callback
 * that curries them into an array. This bundle array can be used to recall and
 * filter logs without the need for a global `Shed`.
 *
 * **Example:**
 * ```javascript
 * import { adze, bundle, filterAll } from 'adze';
 *
 * const bundled = bundle(adze());
 * bundled.log("This is a log.");
 * const { log } = bundled.log("This is another log.");
 * filterAll(log.bundle); // -> reprints all "bundled" logs.
 * ```
 */
export declare function bundle(_log: Log | (() => Log)): Bundler;
