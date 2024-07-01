import { Configuration, LevelConfig, ModifierData } from '../_types';
import {
  isBrowser,
  isMethodWithArgs,
  isSpecialMethod,
  isSpecialMethodWithLeader,
} from '../functions';

export default abstract class Formatter {
  /**
   * The configuration for the adze log.
   */
  protected cfg: Configuration;

  /**
   * The log level configuration.
   */
  protected level: LevelConfig;

  constructor(cfg: Configuration, level: LevelConfig) {
    this.cfg = cfg;
    this.level = level;
  }

  /**
   * Entry point to printing logs.
   */
  public print(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    if (this.cfg.silent) return [];
    if (mods.assertion === true) return [];
    if (mods.if === false) return [];
    if (mods.method && !isSpecialMethodWithLeader(mods.method)) {
      if (isSpecialMethod(mods.method) && isMethodWithArgs(mods.method)) return args;
    }
    const message = isBrowser()
      ? this.formatBrowser(mods, timestamp, args)
      : this.formatNode(mods, timestamp, args);
    if (mods.stacktrace) message.push(mods.stacktrace);
    return message;
  }

  /**
   * Return a string format for your logs in the browser.
   */
  protected abstract formatBrowser(
    data: ModifierData,
    timestamp: string,
    args: unknown[]
  ): unknown[];

  /**
   * Return a string format for your logs in Node.js.
   */
  protected abstract formatNode(data: ModifierData, timestamp: string, args: unknown[]): unknown[];
}
