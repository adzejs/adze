import { formatISO } from 'date-fns/formatISO';
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

/**
 * The base class for all adze log formatters.
 */
export default abstract class Formatter {
  /**
   * The configuration for the adze log.
   */
  protected cfg: Configuration;

  /**
   * The log level configuration.
   */
  protected level: LevelConfig;

  /**
   * The default timestamp formatter. Override this to customize for your own formatter.
   */
  protected timestampFormatFunction: (date: Date) => string = (date: Date) => formatISO(date);

  constructor(cfg: Configuration, level: LevelConfig) {
    this.cfg = cfg;
    this.level = level;
  }

  /**
   * Returns the timestamp formatter override function or the timestamp formatter function from
   * this formatter instance.
   */
  public get timestampFormatter(): (date: Date) => string {
    return this.cfg?.timestampFormatter
      ? this.cfg?.timestampFormatter
      : this.timestampFormatFunction;
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

  private failsFilters(mods: ModifierData): boolean {
    if (this.failsLevelFilter()) return true;
    if (this.failsNamespacesFilter(mods)) return true;
    if (this.failsLabelsFilter(mods)) return true;
    return false;
  }

  /**
   * Validate that if a level filter is set the log passes the filter.
   */
  private failsLevelFilter(): boolean {
    if (this.cfg.filters?.levels === undefined) return false;
    const normalizedLevelFilter = normalizeLevelFilter(this.cfg, this.cfg.filters.levels);
    if (failsLevelFilter(normalizedLevelFilter, this.level.level)) return true;
    return false;
  }

  /**
   * Validate that if a namespaces filter is set the log passes the filter.
   */
  private failsNamespacesFilter(mods: ModifierData): boolean {
    if (this.cfg.filters?.namespaces === undefined) return false;
    if (this.cfg.filters.namespaces.values.length > 0 && mods.namespace === undefined) return true;
    if (this.cfg.filters?.namespaces.type === 'include') {
      const namespaces = mods.namespace ?? [];
      return isNotIncluded(this.cfg.filters?.namespaces.values, namespaces);
    }
    if (this.cfg.filters?.namespaces.type === 'exclude') {
      const namespaces = mods.namespace ?? [];
      return isExcluded(this.cfg.filters?.namespaces.values, namespaces);
    }
    return false;
  }

  /**
   * Validate that if a labels filter is set the log passes the filter.
   */
  private failsLabelsFilter(mods: ModifierData): boolean {
    if (this.cfg.filters?.labels === undefined) return false;
    if (this.cfg.filters.labels.values?.length > 0 && mods.label === undefined) return true;
    const label = mods.label ? [mods.label.name] : [];
    if (this.cfg.filters?.labels.type === 'include') {
      return isNotIncluded(this.cfg.filters?.labels.values, label);
    }
    if (this.cfg.filters?.labels.type === 'exclude') {
      return isExcluded(this.cfg.filters?.labels.values, label);
    }
    return false;
  }
}
