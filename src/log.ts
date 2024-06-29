import {
  Configuration,
  Format,
  LevelConfig,
  LogData,
  Modifier,
  PartialLogData,
  UserConfiguration,
} from './_types';
import {
  captureTimeNow,
  formatTime,
  getGlobalStore,
  globalContext,
  hrtime,
  isCommonMethod,
} from './functions';
import { formatISO } from 'date-fns/formatISO';
import {
  getAlertConfig,
  getErrorConfig,
  getWarnConfig,
  getInfoConfig,
  getFailConfig,
  getSuccessConfig,
  getLogConfig,
  getDebugConfig,
  getVerboseConfig,
  defaultConfiguration,
} from './constants';
import Formatter from './formatters/formatter';
import PrettyFormatter from './formatters/pretty';

export default class Log {
  /**
   * The global context object.
   */
  private globalContext: Window | typeof globalThis;

  /**
   * The configuration for the adze log.
   */
  private cfg: Configuration;

  /**
   * Incomplete log data.
   */
  private partialData: PartialLogData | undefined;

  /**
   * The log data object.
   */
  private _data?: LogData;

  /**
   * Queue up modifiers to ensure they are in the correct order when executed.
   */
  private modifierQueue: Modifier[] = [];

  constructor(cfg: Partial<Configuration> = {}, partialData?: PartialLogData) {
    this.globalContext = globalContext();
    this.partialData = partialData;
    this.cfg = this.mergeConfiguration(cfg);
  }

  ////////////////////////////////////////////////////////
  // Getters and Setters
  ////////////////////////////////////////////////////////

  public get data(): LogData | undefined {
    return this.data;
  }

  public get configuration(): Configuration {
    return this.cfg;
  }

  ////////////////////////////////////////////////////////
  // Terminators
  ////////////////////////////////////////////////////////

  public alert(...args: unknown[]): void {
    this.terminate(args, getAlertConfig());
  }

  public static alert(...args: unknown[]): void {
    return new Log().alert(...args);
  }

  public error(...args: unknown[]): void {
    this.terminate(args, getErrorConfig());
  }

  public static error(...args: unknown[]): void {
    return new Log().error(...args);
  }

  public warn(...args: unknown[]): void {
    this.terminate(args, getWarnConfig());
  }

  public static warn(...args: unknown[]): void {
    return new Log().warn(...args);
  }

  public info(...args: unknown[]): void {
    this.terminate(args, getInfoConfig());
  }

  public static info(...args: unknown[]): void {
    return new Log().info(...args);
  }

  public fail(...args: unknown[]): void {
    this.terminate(args, getFailConfig());
  }

  public static fail(...args: unknown[]): void {
    return new Log().fail(...args);
  }

  public success(...args: unknown[]): void {
    this.terminate(args, getSuccessConfig());
  }

  public static success(...args: unknown[]): void {
    return new Log().success(...args);
  }

  public log(...args: unknown[]): void {
    this.terminate(args, getLogConfig());
  }

  public static log(...args: unknown[]): void {
    return new Log().log(...args);
  }

  public debug(...args: unknown[]): void {
    this.terminate(args, getDebugConfig());
  }

  public static debug(...args: unknown[]): void {
    return new Log().debug(...args);
  }

  public verbose(...args: unknown[]): void {
    this.terminate(args, getVerboseConfig());
  }

  public static verbose(...args: unknown[]): void {
    return new Log().verbose(...args);
  }

  public seal(cfg?: UserConfiguration): Log {
    const data = structuredClone(this._data);
    if (data) {
      data.modifiers = this.modifierQueue;
    }
    this.cfg = this.mergeConfiguration({ ...this.cfg, ...cfg });
    return new Log(structuredClone(this.cfg), data);
  }

  public static seal(cfg?: UserConfiguration): Log {
    return new Log().seal(cfg);
  }

  ////////////////////////////////////////////////////////
  // Modifiers
  ////////////////////////////////////////////////////////

  /**
   * Generates a log message if the provided expression is falsey.
   */
  public assert(expression: boolean): Log {
    this.modifierQueue.push((data) => {
      data.tests.assertion = expression;
      return data;
    });
    return this;
  }

  /**
   * Generates a log message if the provided expression is falsey.
   */
  public static assert(expression: boolean): Log {
    return new Log().assert(expression);
  }

  public get count(): Log {
    this.modifierQueue.push((data) => {
      if (data.label) {
        data.label.count = data.label.count !== undefined ? data.label.count + 1 : 1;
      }
      return data;
    });
    return this;
  }

  public static get count(): Log {
    return new Log().count;
  }

  public get countClear(): Log {
    this.modifierQueue.push((data) => {
      if (data.label) {
        delete data.label.count;
      }
      return data;
    });
    return this;
  }

  public static get countClear(): Log {
    return new Log().countClear;
  }

  public get countReset(): Log {
    this.modifierQueue.push((data) => {
      if (data.label) {
        data.label.count = 0;
      }
      return data;
    });
    return this;
  }

  public static get countReset(): Log {
    return new Log().countReset;
  }

  public get dir(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'dir';
      return data;
    });
    return this;
  }

  public static get dir(): Log {
    return new Log().dir;
  }

  public get dirxml(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'dirxml';
      return data;
    });
    return this;
  }

  public static get dirxml(): Log {
    return new Log().dirxml;
  }

  public get dump(): Log {
    this.modifierQueue.push((data) => {
      this.cfg.dump = true;
      return data;
    });
    return this;
  }

  public static get dump(): Log {
    return new Log().dump;
  }

  public format(format: Format): Log {
    this.modifierQueue.push((data) => {
      this.cfg.format = format;
      return data;
    });
    return this;
  }

  public static format(format: Format): Log {
    return new Log().format(format);
  }

  public get pretty(): Log {
    this.modifierQueue.push((data) => {
      this.cfg.format = 'pretty';
      return data;
    });
    return this;
  }

  public static get pretty(): Log {
    return new Log().pretty;
  }

  public get common(): Log {
    this.modifierQueue.push((data) => {
      this.cfg.format = 'common';
      return data;
    });
    return this;
  }

  public static get common(): Log {
    return new Log().common;
  }

  public get json(): Log {
    this.modifierQueue.push((data) => {
      this.cfg.format = 'json';
      return data;
    });
    return this;
  }

  public static get json(): Log {
    return new Log().json;
  }

  public get group(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'group';
      return data;
    });
    return this;
  }

  public static get group(): Log {
    return new Log().group;
  }

  public get groupCollapsed(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'groupCollapsed';
      return data;
    });
    return this;
  }

  public static get groupCollapsed(): Log {
    return new Log().groupCollapsed;
  }

  public get groupEnd(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'groupEnd';
      return data;
    });
    return this;
  }

  public static get groupEnd(): Log {
    return new Log().groupEnd;
  }

  /**
   * Generates a log message if the provided expression is truthy.
   */
  public if(expression: boolean): Log {
    this.modifierQueue.push((data) => {
      data.tests.if = expression;
      return data;
    });
    return this;
  }

  public static if(expression: boolean): Log {
    return new Log().if(expression);
  }

  /**
   * DEPRECATED: Use the equivalent `if` method instead.
   *
   * @deprecated
   */
  public test(expression: boolean): Log {
    return this.if(expression);
  }

  /**
   * DEPRECATED: Use the equivalent `if` method instead.
   *
   * @deprecated
   */
  public static test(expression: boolean): Log {
    return new Log().if(expression);
  }

  public label(name: string): Log {
    // prepend the modifier queue
    this.modifierQueue.unshift((data) => {
      const globalStore = getGlobalStore(this.globalContext);
      if (globalStore) {
        const label = globalStore.getLabel(name) ?? { name };
        data.label = label;
        globalStore.setLabel(name, label);
      }
      return data;
    });
    return this;
  }

  public static label(name: string): Log {
    return new Log().label(name);
  }

  public meta(meta: Record<string, unknown>): Log {
    this.modifierQueue.push((data) => {
      data.meta = meta;
      return data;
    });
    return this;
  }

  public static meta(meta: Record<string, unknown>): Log {
    return new Log().meta(meta);
  }

  public namespace(...namespace: string[]): Log {
    this.modifierQueue.push((data) => {
      data.namespace = namespace;
      return data;
    });
    return this;
  }

  public static namespace(...namespace: string[]): Log {
    return new Log().namespace(...namespace);
  }

  public ns(...namespace: string[]): Log {
    return this.namespace(...namespace);
  }

  public static ns(...namespace: string[]): Log {
    return new Log().namespace(...namespace);
  }

  public get silent(): Log {
    this.modifierQueue.push((data) => {
      this.cfg.silent = true;
      return data;
    });
    return this;
  }

  public static get silent(): Log {
    return new Log().silent;
  }

  public get table(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'table';
      return data;
    });
    return this;
  }

  public static get table(): Log {
    return new Log().table;
  }

  public get time(): Log {
    this.modifierQueue.push((data) => {
      const timeStart = hrtime();
      if (data.label) {
        data.label.timeStart = timeStart;
      }
      return data;
    });
    return this;
  }

  public static get time(): Log {
    return new Log().time;
  }

  public get timeEnd(): Log {
    this.modifierQueue.push((data) => {
      if (data.label && data.label?.timeStart) {
        data.label.timeElapsed = formatTime(hrtime(data.label.timeStart));
      }
      return data;
    });
    return this;
  }

  public static get timeEnd(): Log {
    return new Log().timeEnd;
  }

  public get timeNow(): Log {
    this.modifierQueue.push((data) => {
      data.timeNow = captureTimeNow();
      return data;
    });
    return this;
  }

  public static get timeNow(): Log {
    return new Log().timeNow;
  }

  public get timestamp(): Log {
    this.modifierQueue.push((data) => {
      this.cfg.showTimestamp = true;
      return data;
    });
    return this;
  }

  public static get timestamp(): Log {
    return new Log().timestamp;
  }

  public get trace(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'trace';
      return data;
    });
    return this;
  }

  public static get trace(): Log {
    return new Log().trace;
  }

  public get withEmoji(): Log {
    this.modifierQueue.push((data) => {
      this.cfg.withEmoji = true;
      return data;
    });
    return this;
  }

  public static get withEmoji(): Log {
    return new Log().withEmoji;
  }

  ////////////////////////////////////////////////////////
  // Private Methods
  ////////////////////////////////////////////////////////

  private terminate(args: unknown[], cfg: LevelConfig): void {
    // Initialize our data object. Use partial data provided by the constructor if available.
    let partialData: PartialLogData = {
      args: args,
      level: cfg.level,
      method: cfg.method,
      meta: {},
      modifiers: this.modifierQueue,
      namespace: [],
      terminator: 'alert',
      timestamp: formatISO(new Date()),
      style: {
        style: cfg.style,
        terminalStyle: cfg.terminalStyle,
        emoji: cfg.emoji,
      },
      tests: {},
      ...this.partialData,
    };

    // Run the modifier queue to modify the data object.
    this.modifierQueue.forEach((modifier) => {
      partialData = modifier(partialData);
    });

    // call beforeTerminated hook
    const formatter = this.selectFormatter(partialData, this.cfg.format);
    const data: LogData = {
      ...partialData,
      message: formatter.print(args),
    };
    // save the data to this instance
    this._data = data;

    // Convert this to a print function
    if (data.message.length === 0) {
      // Don't print if the message is empty.
      return;
    }
    if (isCommonMethod(data.method)) {
      console[data.method](...data.message);
    } else {
      console[data.method]();
    }

    // console.debug('CFG', this.cfg);
    // console.debug('DATA', data);
    // call terminated hook
  }

  private selectFormatter(data: PartialLogData, format: Format): Formatter {
    switch (format) {
      case 'pretty':
        return new PrettyFormatter(this.cfg, data);
      case 'prettyEmoji':
        return new PrettyFormatter(this.cfg, data);
      case 'json':
        return new PrettyFormatter(this.cfg, data);
      case 'common':
        return new PrettyFormatter(this.cfg, data);
      default:
        return new PrettyFormatter(this.cfg, data);
    }
  }

  /**
   * Merge the user configuration with the default configuration and the global configuration.
   */
  private mergeConfiguration(cfg?: UserConfiguration): Configuration {
    return {
      ...defaultConfiguration,
      ...cfg,
      ...this.globalContext?.$adzeGlobal?.configuration,
    };
  }
}
