import {
  Log,
  FinalLog,
  LogFunction,
  CustomLogFunction,
  Defaults,
  LogLevelDefinition,
  TerminatedLog,
  LogTimestamp,
} from '../_contracts';
import { print, toConsole } from '../printers';
import { allowed, evalPasses } from '../conditions';
import { mutateProps, timestamp, stacktrace } from '../util';
import { shedExists } from '../shed';
import { env } from '../global';
import cloneDeep from 'lodash/cloneDeep';

/**
 * Seals the configuration of a log and returns a function that
 * constructs a new log with the same configuration.
 *
 * **Example:**
 * ```javascript
 * const sealed = adze({ use_emoji: true }).ns('sealed').label('sealed-label').seal();
 * sealed().success('Success!'); // -> prints "#sealed [sealed-label] Success!"
 * sealed().log('Another log.'); // -> prints "#sealed [sealed-label] Another log."
 * ```
 */
export function seal(this: Log): () => Log {
  // Run the modifier queue to apply their results
  runModifierQueue(this.modifierQueue);
  // Clear the queue as to not repeat the actions when the subsequent logs are terminated.
  this.modifierQueue = [];
  return () => cloneDeep(this);
}

/**
 * Following the MDC (Mapped Diagnostic Context) pattern this method enables you to create
 * a thread for adding context from different scopes before finally terminating the log.
 *
 * In order to create a thread, this log must specify a label that will be used to link the
 * context and your environment must have a **shed** created.
 *
 * **Example:**
 * ```typescript
 * import { adze, createShed } from 'adze';
 *
 * const shed = createShed();
 *
 * // Creating a shed listener is a great way to get meta data from your
 * // threaded logs to write to disk or pass to another plugin, library,
 * // or service.
 * shed.addListener([1,2,3,4,5,6,7,8], (log) => {
 *   // Do something with `log.context.added` or `log.context.subtracted`.
 * });
 *
 * function add(a, b) {
 *   const answer = a + b;
 *   adze().label('foo').thread('added', { a, b, answer });
 *   return answer;
 * }
 *
 * function subtract(x, y) {
 *   const answer = x - y;
 *   adze().label('foo').thread('subtracted', { x, y, answer });
 *   return answer;
 * }
 *
 * add(1, 2);
 * subtract(4, 3);
 *
 * adze().label('foo').dump().info('Results from our thread');
 * // Info => Results from our thread, { a: 1, b: 2, answer: 3 }, { x: 4, y: 3, answer: 1 }
 *
 * ```
 */
export function thread(this: Log, key: string, value: unknown): void {
  // Check if the log has a label. If not, console.warn the user.
  // If the log has a label, attach the context to the label.
  runModifierQueue(this.modifierQueue);
  if (this.labelVal) {
    this.labelVal.context[key] = value;
  } else {
    console.warn('Thread context was not added! Threads must have a label.');
  }
}

/**
 * Closes a thread assigned to the log by clearing the context values.
 */
export function close(this: Log): void {
  if (this.labelVal) {
    this.labelVal.context = {};
  }
}

/**
 * Alias for console.clear().
 */
export function clear(this: Log): void {
  console.clear();
}

/**
 * Alias for clear() which is an alias for console.clear().
 */
export function clr(this: Log): void {
  this.clear();
}

/**
 * Generates a terminating log method the specified log level name.
 */
export function logMethod(levelName: string): LogFunction {
  return function (this: Log, ...args: unknown[]): TerminatedLog {
    return executionPipeline(
      this,
      this.cfg,
      getDefinition(this.cfg, 'log_levels', levelName),
      args
    );
  };
}

/**
 * Generates a terminating log method that enables the user to specify a custom
 * log level by key as the format for the log.
 */
export function customMethod(): CustomLogFunction {
  return function (
    this: Log,
    levelName: string,
    ...args: unknown[]
  ): TerminatedLog {
    return executionPipeline(
      this,
      this.cfg,
      getDefinition(this.cfg, 'custom_levels', levelName),
      args
    );
  };
}

/**
 * Gets the log level definition from the log configuration.
 */
function getDefinition(
  cfg: Defaults,
  type: 'log_levels' | 'custom_levels',
  levelName: string
): LogLevelDefinition | undefined {
  const shed = env.$shed;
  let definition = undefined;

  if (shedExists(shed) && shed.hasOverrides) {
    definition = shed.overrides?.[type]?.[levelName];
  } else {
    definition = cfg[type][levelName];
  }

  return definition ? { ...definition, levelName } : undefined;
}

/**
 * The primary execution pipeline for terminating log methods.
 */
function executionPipeline(
  log: Log,
  cfg: Defaults,
  def: LogLevelDefinition | undefined,
  args: unknown[]
): TerminatedLog {
  if (def && allowed(cfg, def)) {
    // Apply modifiers in the proper order.
    runModifierQueue(log.modifierQueue);

    // Check the test modifiers.
    if (evalPasses(log)) {
      // Check if capturing stacktrace is enabled
      const stktrc = cfg.capture_stacktrace ? stacktrace() : null;

      // Save terminator props for recall purposes
      const final_log = finalizeLog(log, def, args, timestamp(), stktrc);

      // If a global context exists, check if this log is allowed.
      const globally_allowed = env.$shed?.logGloballyAllowed(final_log) ?? true;

      if (globally_allowed) {
        // Render the log and print to the console
        const render = toConsole(print(final_log), final_log.isSilent);

        // Fire log events
        store(final_log);
        fireListeners(final_log);

        // Return the terminated log object for testing purposes
        return { log: final_log, render };
      }
    }
  }

  // Return the terminated log object for testing purposes
  return { log, render: null };
}

/**
 * Executes all of the log modifier functions within the queue.
 */
function runModifierQueue(queue: Array<() => void>): void {
  queue.forEach((func) => func());
}

/*----------------------------------------*\
 * Log Events
\*----------------------------------------*/

/**
 * Stores this log in the Shed if the Shed exists.
 */
export function store(log: FinalLog): void {
  const shed = env.$shed;
  if (shedExists(shed)) {
    shed.store(log);
  }
}

/**
 * Fires listeners for this log instance if a Shed exists.
 */
export function fireListeners(log: FinalLog): void {
  const shed = env.$shed;
  if (shedExists(shed)) {
    shed.fireListeners(log);
  }
}

/*----------------------------------------*\
 * Log Helpers
\*----------------------------------------*/

function finalizeLog(
  log: Log,
  def: LogLevelDefinition,
  args: unknown[],
  timestamp: LogTimestamp,
  stacktrace: string | null
): FinalLog {
  return mutateProps<FinalLog>(log, [
    ['args', args],
    ['level', def.level],
    ['definition', def],
    ['timestamp', timestamp],
    ['stacktrace', stacktrace],
  ]);
}
