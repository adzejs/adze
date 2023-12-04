import { Configuration, Constraints } from './_contracts';
import { Log } from './log';

/**
 * The entry point for creating Adze logs. This factory function can be used directly or configuration
 * can be provided and the result can be sealed into a new variable. This allows for multiple
 * logging instances with different configurations. Refer to the `seal()` modifier.
 *
 * **--- Default levels ---**
 *
 * + (0) alert
 * + (1) error
 * + (2) warn
 * + (3) info
 * + (4) fail
 * + (5) success
 * + (6) log
 * + (7) debug
 * + (8) verbose
 */
export function adze<C extends Constraints>(user_cfg: Configuration = {}): Log<C> {
  return new Log<C>(user_cfg);
}
