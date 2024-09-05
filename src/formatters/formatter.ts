import { formatISO } from 'date-fns/formatISO';
import { Configuration, LevelConfiguration, ModifierData } from '../_types';
import {
  getActiveLevel,
  isBrowser,
  isMethodWithArgs,
  isSpecialMethod,
  isSpecialMethodWithLeader,
} from '../functions';
import {
  failsLevelSelector,
  normalizeLevelSelector,
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
  protected level: LevelConfiguration;

  /**
   * The default timestamp formatter. Override this to customize for your own formatter.
   */
  protected timestampFormatFunction: (date: Date) => string = (date: Date) => formatISO(date);

  constructor(cfg: Configuration, level: LevelConfiguration) {
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
    if (mods.assertion === true) return [];
    if (mods.if === false) return [];
    if (mods.method && !isSpecialMethodWithLeader(mods.method)) {
      if (isSpecialMethod(mods.method) && isMethodWithArgs(mods.method)) return args;
    }
    // Select the appropriate formatter method on the environment.
    const message = isBrowser()
      ? this.formatBrowser(mods, timestamp, args)
      : this.formatServer(mods, timestamp, args);
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
   * Return a string format for your logs in a server environment.
   */
  protected abstract formatServer(
    data: ModifierData,
    timestamp: string,
    args: unknown[]
  ): unknown[];

  private failsFilters(mods: ModifierData): boolean {
    if (this.failsLevelSelector()) return true;
    if (this.failsNamespacesFilter(mods)) return true;
    if (this.failsLabelsFilter(mods)) return true;
    return false;
  }

  /**
   * Validate that if a level filter is set the log passes the filter.
   */
  private failsLevelSelector(): boolean {
    if (this.cfg.filters?.levels === undefined) return false;
    const normalizedLevelSelector = normalizeLevelSelector(
      this.cfg.levels,
      this.cfg.filters.levels.values
    );
    if (failsLevelSelector(this.cfg.filters.levels.type, normalizedLevelSelector, this.level.level))
      return true;
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
