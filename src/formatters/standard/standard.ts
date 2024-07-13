import Formatter from '../formatter';
import { Configuration, LevelConfig, ModifierData } from '../../_types';
import { formatISO } from 'date-fns/formatISO';

/**
 * Formats log messages for stdout lines.
 *
 * **Example:** `[2013-01-04T19:01:18.241Z]  INFO: myapp/40208 on banana.local: hi`
 */
export default class StandardFormatter extends Formatter {
  /**
   * Format the date in the ISO8601 format by default.
   */
  protected timestampFormatFunction: (date: Date) => string = (date: Date) => formatISO(date);

  constructor(cfg: Configuration, level: LevelConfig) {
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
   * Format the log message for stdout lines.
   */
  private formatMessage(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    let leader = '';
    if (mods.meta) {
      const { appname, hostname, port } = mods.meta;
      let _port = port ? `/${port}` : '';
      let appPort = appname ? `${appname}${_port}` : '';
      let _host = hostname ? ` on ${hostname}: ` : '';
      leader = `${appPort}${_host}`;
    }
    return [
      `[${timestamp}]  ${this.level.levelName.toUpperCase()}: ${leader}${args[0]}`,
      ...args.slice(1),
    ];
  }
}
