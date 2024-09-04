import Formatter from '../formatter';
import { Configuration, LevelConfiguration, ModifierData } from '../../_types';
import { format } from 'date-fns/format';

/**
 * Formats log messages according to the common log standard.
 *
 * https://en.wikipedia.org/wiki/Common_Log_Format
 */
export default class CommonFormatter extends Formatter {
  /**
   * Format the date in the strftime format.
   *
   * - strftime pattern: `%d/%b/%Y:%H:%M:%S %z`
   * - date-fns pattern: `dd/MMM/yyyy:HH:mm:ss xx`
   */
  protected timestampFormatFunction: (date: Date) => string = (date: Date) =>
    format(date, 'dd/MMM/yyyy:HH:mm:ss xx');

  constructor(cfg: Configuration, level: LevelConfiguration) {
    super(cfg, level);
  }

  /**
   * Format the log message for the browser.
   */
  protected formatBrowser(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    return this.formatMessage(mods, timestamp, args);
  }

  /**
   * Format the log message for Node.js.
   */
  protected formatNode(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    return this.formatMessage(mods, timestamp, args);
  }

  /**
   * Format the log message according to the common log format.
   *
   * **Example:** 127.0.0.1 user-identifier frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326
   */
  private formatMessage(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    if (this.cfg.meta?.hostname === undefined) {
      console.warn(
        new Error(
          "Adze: 'hostname' is required for the common log format. Please provide this value in your log's meta data."
        )
      );
    }
    const hostname = this.cfg.meta?.hostname;
    const ident = this.cfg.meta?.ident ?? '-';
    const user = this.cfg.meta?.user ?? '-';
    return [`${hostname} ${ident} ${user} [${timestamp}] ${args[0]}`];
  }
}
