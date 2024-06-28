import { LogData, PartialLogData } from '../_types';
import { isBrowser } from '../functions';
import { initialize } from '../functions/data';

export default abstract class Formatter {
  /**
   * The log data object.
   */
  protected data: PartialLogData;

  constructor(data: PartialLogData) {
    this.data = data;
  }

  /**
   * Entry point to printing logs.
   */
  public print(args: unknown[]): unknown[] {
    if (this.data.silent) return [''];
    if (args.length === 0) return [''];
    if (isBrowser()) return this.formatBrowser(args);
    return this.formatNode(args);
  }

  /**
   * Return a string format for your logs in the browser.
   */
  protected abstract formatBrowser(args: unknown[]): unknown[];

  /**
   * Return a string format for your logs in Node.js.
   */
  protected abstract formatNode(args: unknown[]): unknown[];
}
