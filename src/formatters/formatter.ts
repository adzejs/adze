import { Configuration, LevelConfig, ModifierData } from '../_types';
import {
  getActiveLevel,
  isBrowser,
  isMethodWithArgs,
  isSpecialMethod,
  isSpecialMethodWithLeader,
} from '../functions';
import {
  failsLevelFilter,
  normalizeLevelFilter,
  isNotIncluded,
  isExcluded,
} from '../functions/filters';

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
    // Do not print the log if its log level is higher than the active level.
    if (this.level.level > getActiveLevel(this.cfg)) return [];
    if (this.failsFilters(mods)) return [];
    if (this.cfg.silent) return [];
    if (mods.assertion === true) return [];
    if (mods.if === false) return [];
    if (mods.method && !isSpecialMethodWithLeader(mods.method)) {
      if (isSpecialMethod(mods.method) && isMethodWithArgs(mods.method)) return args;
    }
    // Select the appropriate formatter method on the environment.
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

  /**
   * Checks if the log fails to pass any filters.
   */
  private failsFilters(mods: ModifierData): boolean {
    // Is this log level filtered out?
    const normalizedLevelFilter = normalizeLevelFilter(this.cfg, this.cfg.filters.levels);
    if (failsLevelFilter(normalizedLevelFilter, this.level.level)) return true;
    // ---- Handle Namespaces ----
    // Is the log namespace included in the filter?
    if (isNotIncluded(this.cfg.filters.namespaces.include, mods.namespace ?? [])) return true;
    // Is the log namespace excluded in the filter?
    if (isExcluded(this.cfg.filters.namespaces.exclude, mods.namespace ?? [])) return true;
    // ---- Handle Labels ----
    const label = mods.label?.name ? [mods.label.name] : [];
    // Is the log label included in the filter?
    if (isNotIncluded(this.cfg.filters.labels.include, label)) return true;
    // Is the log label excluded in the filter?
    if (isExcluded(this.cfg.filters.labels.exclude, label)) return true;
    // If it passes all of the filters
    return false;
  }
}
