import Formatter from '../formatter';
import { Configuration, LevelConfig, ModifierData } from '../../_types';
import { formatISO } from 'date-fns/formatISO';
import { isObject } from '../../functions';

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
    return this.formatMessage(timestamp, mods, args);
  }

  /**
   * Format the log message for Node.js.
   */
  protected formatNode(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    return this.formatMessage(timestamp, mods, args);
  }

  /**
   * Format the log message for stdout lines.
   */
  private formatMessage(timestamp: string, mods: ModifierData, args: unknown[]): unknown[] {
    let leader = '';
    if (this.cfg.meta) {
      const { appname, hostname, port } = this.cfg.meta;
      let _port = port ? `/${port}` : '';
      let appPort = appname ? `${appname}${_port}` : '';
      let _host = hostname ? ` on ${hostname}: ` : '';
      let namespace = this.formatNamespace(mods.namespace);
      let label = mods.label ? `[${mods.label.name}] ` : '';
      leader = `${appPort}${_host}${namespace}${label}`;
    }
    return [
      `[${timestamp}] ${this.level.levelName.toUpperCase()}: ${leader}${args[0]}`,
      args
        .map((arg) => (isObject(arg) ? JSON.stringify(arg) : arg))
        .slice(1)
        .join(' '),
    ];
  }

  /**
   * Formats the namespaces for the log message.
   */
  private formatNamespace(namespace: string[] | undefined): string {
    if (namespace && namespace.length > 0) {
      const str = namespace.reduce((acc, mod, index) => {
        return index === namespace.length - 1 ? `${acc}${mod}` : `${acc}${mod}/`;
      }, '');
      return `${str} `;
    }
    return '';
  }
}
