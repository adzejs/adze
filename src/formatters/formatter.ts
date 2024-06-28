import { Configuration, PartialLogData } from '../_types';
import { isBrowser } from '../functions';

export default abstract class Formatter {
  /**
   * The configuration for the adze log.
   */
  protected cfg: Configuration;

  /**
   * The log data object.
   */
  protected data: PartialLogData;

  constructor(cfg: Configuration, data: PartialLogData) {
    this.cfg = cfg;
    this.data = data;
  }

  /**
   * Entry point to printing logs.
   */
  public print(args: unknown[]): unknown[] {
    if (this.cfg.silent) return [''];
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
