import Formatter from '../formatter';
import { ModifierData } from '../../_types';
import { formatISO } from '../../functions';
import { isNumber, isObject, isString } from '../../functions';

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

  /**
   * Format the log message for the browser.
   */
  protected formatBrowser(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    return this.formatMessage(timestamp, mods, args);
  }

  /**
   * Format the log message for the server.
   */
  protected formatServer(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    return this.formatMessage(timestamp, mods, args);
  }

  /**
   * Format the log message for stdout lines.
   */
  private formatMessage(timestamp: string, mods: ModifierData, args: unknown[]): unknown[] {
    let leader = '';
    const { appname, hostname, port } = this.cfg.meta;
    const _port = isNumber(port) ? `/${port}` : '';
    const appPort = isString(appname) ? `${appname}${_port}` : '';
    const _host = isString(hostname) ? ` on ${hostname}: ` : '';
    const namespace = this.formatNamespace(mods.namespace);
    const label = mods.label ? `[${mods.label.name}] ` : '';
    leader = `${appPort}${_host}${namespace}${label}`;
    return [
      `[${timestamp}] ${this.level.levelName.toUpperCase()}: ${leader}${args[0] as string} `,
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
