import { stacktrace as getStacktrace } from '../util';
import { ConsoleMethod, FinalLogData, LogRender, JsonOutput } from '../_contracts';

/**
 * This class is responsible for creating a Log Render that is
 * machine readable (JSON).
 */
export class MachinePrinter {
  /**
   * Finalized log data object.
   */
  private data: FinalLogData<any>;

  constructor(data: FinalLogData<any>) {
    this.data = data;
  }

  // -----------------------------
  // Print Methods
  // -----------------------------

  /**
   * The primary method for printing JSON logs to the console.
   */
  public printLog(_method?: ConsoleMethod): LogRender {
    // Ignore the _method value because we only want to use error, warn, info, log, and debug.
    const method = this.data.definition.method;

    // Create out minimum JSON object to be output.
    let json: JsonOutput = {
      method,
      level: this.data.level,
      levelName: this.data.definition.levelName ?? '',
      args: this.data.args,
      timestamp: this.data.timestamp,
    };

    // Each applier conditionally adds a property to the JSON that will be output.
    // Some of them rely on knowing what the original terminated method was.
    const appliers = [
      this.applyMeta,
      this.applyStacktrace,
      this.applyContext,
      this.applyTimeNow,
      this.applyTimeElapsed,
      this.applyCount,
      this.applyNamespace,
      this.applyLabel,
      this.applyGroup,
    ];

    // Execute each property applier on the JSON object.
    appliers.forEach((func) => {
      const applier = func.bind(this);
      json = applier(json, _method);
    });

    // Make sure to stringify the object!
    return [method, [JSON.stringify(json)]];
  }

  /**
   * Passthrough method for setting the intended print method.
   */
  public printGroup(): LogRender | null {
    return this.printLog('group');
  }

  /**
   * Passthrough method for setting the intended print method.
   */
  public printGroupCollapsed(): LogRender | null {
    return this.printLog('groupCollapsed');
  }

  /**
   * Passthrough method for setting the intended print method.
   */
  public printTrace(): LogRender | null {
    return this.printLog('trace');
  }

  /**
   * Passthrough method for setting the intended print method.
   */
  public printGroupEnd(): LogRender | null {
    return this.printLog('groupEnd');
  }

  /**
   * Passthrough method for setting the intended print method.
   */
  public printTable(): LogRender | null {
    return this.printLog('table');
  }

  /**
   * Passthrough method for setting the intended print method.
   */
  public printDir(): LogRender | null {
    return this.printLog('dir');
  }

  /**
   * Passthrough method for setting the intended print method.
   */
  public printDirxml(): LogRender | null {
    return this.printLog('dirxml');
  }

  // -----------------------------
  // Apply JSON values to output
  // -----------------------------

  /**
   * Applies the groupAction property to the output JSON based upon the intended console method
   * for printing groups.
   */
  private applyGroup(json: JsonOutput, method?: ConsoleMethod): JsonOutput {
    let groupAction: 'open' | 'close' | null = null;
    switch (method) {
      case 'group':
        groupAction = 'open';
        break;
      case 'groupCollapsed':
        groupAction = 'open';
        break;
      case 'groupEnd':
        groupAction = 'close';
        break;
      case undefined:
        groupAction = null;
        break;
    }
    return groupAction ? { ...json, groupAction } : json;
  }

  /**
   * Applies the label property to the output JSON based on the label currently set on the log.
   */
  private applyLabel(json: JsonOutput): JsonOutput {
    return this.data.label.name ? { ...json, label: this.data.label.name } : json;
  }

  /**
   * Applies the namespace property to the output JSON based on the namespace
   * currently set on the log.
   */
  private applyNamespace(json: JsonOutput): JsonOutput {
    return this.data.namespace ? { ...json, namespace: this.data.namespace } : json;
  }

  /**
   * Applies the count property to the output JSON based on the count currently
   * set on the log label object.
   */
  private applyCount(json: JsonOutput): JsonOutput {
    return this.data.label.count !== null ? { ...json, count: this.data.label.count } : json;
  }

  /**
   * Applies the timeElapsed property to the output JSON based on the timeElapsed currently
   * set on the log label object.
   */
  private applyTimeElapsed(json: JsonOutput): JsonOutput {
    return this.data.label.timeElapsed
      ? { ...json, timeElapsed: this.data.label.timeElapsed }
      : json;
  }

  /**
   * Applies the timeNow property to the output JSON based on the timeNow currently
   * set on the log label object.
   */
  private applyTimeNow(json: JsonOutput): JsonOutput {
    return this.data.timeNow ? { ...json, timeNow: this.data.timeNow } : json;
  }

  /**
   * Applies the context property to the output JSON based on the context currently
   * set on the log label object.
   */
  private applyContext(json: JsonOutput): JsonOutput {
    return this.data.context && Object.keys(this.data.context).length > 0
      ? { ...json, context: this.data.context }
      : json;
  }

  /**
   * Applies the stacktrace property to the output JSON based on the whether Adze has
   * captureStacktrace enabled globally or the trace modifier has been called.
   */
  private applyStacktrace(json: JsonOutput, method?: ConsoleMethod): JsonOutput {
    let stacktrace: string | null = null;
    if (this.data.stacktrace) {
      stacktrace = this.data.stacktrace;
    } else if (method === 'trace') {
      stacktrace = getStacktrace();
    }
    return stacktrace ? { ...json, stacktrace } : json;
  }

  /**
   * Applies the meta property to the output JSON based on the meta data set on the log as well
   * as any meta data set globally in the configuration.
   */
  private applyMeta(json: JsonOutput): JsonOutput {
    return this.data.meta && Object.keys(this.data.meta).length > 0
      ? { ...json, meta: this.data.meta }
      : json;
  }
}
