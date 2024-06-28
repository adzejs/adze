import { Configuration, Format, LevelConfig, LogData, Modifier, PartialLogData } from './_types';
import { globalContext, isCommonMethod } from './functions';
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

export class Log {
  /**
   * The global context object.
   */
  private globalContext: Window | typeof globalThis;

  /**
   * The configuration for the adze log.
   */
  private cfg: Configuration & { format: Format };

  /**
   * The log data object.
   */
  private data?: LogData;

  /**
   * Queue up modifiers to ensure they are in the correct order when executed.
   */
  private modifierQueue: Modifier[] = [];

  constructor(cfg: Partial<Configuration> = {}) {
    this.globalContext = globalContext();
    this.cfg = {
      ...cfg,
      ...defaultConfiguration,
      ...this.globalContext?.$adzeGlobal?.configuration,
    };
  }

  public alert(...args: unknown[]): void {
    this.terminate(args, getAlertConfig());
  }

  public error(...args: unknown[]): void {
    this.terminate(args, getErrorConfig());
  }

  public warn(...args: unknown[]): void {
    this.terminate(args, getWarnConfig());
  }

  public info(...args: unknown[]): void {
    this.terminate(args, getInfoConfig());
  }

  public fail(...args: unknown[]): void {
    this.terminate(args, getFailConfig());
  }

  public success(...args: unknown[]): void {
    this.terminate(args, getSuccessConfig());
  }

  public log(...args: unknown[]): void {
    this.terminate(args, getLogConfig());
  }

  public debug(...args: unknown[]): void {
    this.terminate(args, getDebugConfig());
  }

  public verbose(...args: unknown[]): void {
    this.terminate(args, getVerboseConfig());
  }

  public assert(expression: boolean): Log {
    this.modifierQueue.push((data) => {
      data.assertion = !expression;
      return data;
    });
    return this;
  }

  public count(): Log {
    this.modifierQueue.push((data) => {
      return data;
    });
    return this;
  }

  public countClear(): Log {
    this.modifierQueue.push((data) => {
      return data;
    });
    return this;
  }

  public countReset(): Log {
    this.modifierQueue.push((data) => {
      return data;
    });
    return this;
  }

  public dir(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'dir';
      return data;
    });
    return this;
  }

  public dirxml(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'dirxml';
      return data;
    });
    return this;
  }

  public dump(): Log {
    this.modifierQueue.push((data) => {
      data.dump = true;
      return data;
    });
    return this;
  }

  public group(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'group';
      return data;
    });
    return this;
  }

  public groupCollapsed(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'groupCollapsed';
      return data;
    });
    return this;
  }

  public groupEnd(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'groupEnd';
      return data;
    });
    return this;
  }

  public label(): Log {
    // prepend the modifier queue
    this.modifierQueue.unshift((data) => {
      return data;
    });
    return this;
  }

  public meta(meta: Record<string, unknown>): Log {
    this.modifierQueue.push((data) => {
      data.meta = meta;
      return data;
    });
    return this;
  }

  public namespace(...namespace: string[]): Log {
    this.modifierQueue.push((data) => {
      data.namespace = namespace;
      return data;
    });
    return this;
  }

  public ns(...namespace: string[]): Log {
    return this.namespace(...namespace);
  }

  public silent(): Log {
    this.modifierQueue.push((data) => {
      data.silent = true;
      return data;
    });
    return this;
  }

  public table(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'table';
      return data;
    });
    return this;
  }

  public test(expression: boolean): Log {
    this.modifierQueue.push((data) => {
      data.test = expression;
      return data;
    });
    return this;
  }

  public time(): Log {
    this.modifierQueue.push((data) => {
      return data;
    });
    return this;
  }

  public timeEnd(): Log {
    this.modifierQueue.push((data) => {
      return data;
    });
    return this;
  }

  public timeNow(): Log {
    this.modifierQueue.push((data) => {
      return data;
    });
    return this;
  }

  public timestamp(): Log {
    this.modifierQueue.push((data) => {
      return data;
    });
    return this;
  }

  public trace(): Log {
    this.modifierQueue.push((data) => {
      data.method = 'trace';
      return data;
    });
    return this;
  }

  private terminate(args: unknown[], cfg: LevelConfig): void {
    let partialData: PartialLogData = {
      args: args,
      format: this.cfg.format ?? 'pretty',
      meta: {},
      modifiers: this.modifierQueue,
      namespace: [],
      silent: this.cfg.silent ?? false,
      terminator: 'alert',
      style: cfg.style,
      level: cfg.level,
      method: cfg.method,
      terminalStyle: cfg.terminalStyle,
      emoji: cfg.emoji,
      timestamp: formatISO(new Date()),
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
    this.data = data;

    // Convert this to a print function
    if (isCommonMethod(data.method)) {
      console[data.method](...data.message);
    } else {
      console[data.method]();
    }
    // call terminated hook
  }

  private selectFormatter(data: PartialLogData, format: Format): Formatter {
    switch (format) {
      case 'pretty':
        return new PrettyFormatter(data, false);
      case 'prettyEmoji':
        return new PrettyFormatter(data, true);
      case 'json':
        return new PrettyFormatter(data, false);
      case 'common':
        return new PrettyFormatter(data, false);
      default:
        return new PrettyFormatter(data, false);
    }
  }
}
