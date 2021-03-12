import { Configuration } from './_contracts';
import { Log } from './Log';
/**
 * The entry point for creating Adze logs. This factory function can be used directly or configuration
 * can be provided and the result can be sealed into a new variable. This allows for multiple
 * logging instances with different configurations. Refer to the `seal()` modifier.
 *
 * **--- Default levels ---**
 *
 * + (0) attention
 * + (1) error
 * + (2) warn
 * + (3) info
 * + (4) fail
 * + (5) success
 * + (6) log
 * + (7) debug
 * + (8) verbose
 */
export declare function adze(user_cfg?: Configuration): Log;
