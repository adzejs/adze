import {
  Log, FinalLog, LogFunction,
  CustomLogFunction,
  Defaults, LogLevelDefinition, TerminatedLog,
} from '../_contracts';
import { print } from '../printers';
import { allowed, evalPasses } from '../conditions';
import { mutateProps } from '../util';
import { shedExists } from '../shed';
import { env } from '../global';

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
export function seal(this: Log):() => Log {
  // Run the modifier queue to apply their results
  runModifierQueue(this.modifierQueue);
  // Clear the queue as to not repeat the actions when the subsequent logs are terminated.
  this.modifierQueue = [];
  return () => ({ ...this });
}

/**
 * Generates a terminating log method the specified log level name.
 */
export function logMethod(cfg: Defaults, levelName: string):LogFunction {
  return function(this: Log, ...args: any[]):TerminatedLog {
    return executionPipeline(this, cfg, getDefinition(cfg, 'log_levels', levelName), args);
  };
}

/**
 * Generates a terminating log method that enables the user to specify a custom
 * log level by key as the format for the log.
 */
export function customMethod(cfg: Defaults):CustomLogFunction {
  return function(this: Log, levelName: string, ...args: any[]):TerminatedLog {
    return executionPipeline(this, cfg, getDefinition(cfg, 'custom_levels', levelName), args);
  };
};

/**
 * Gets the log level definition from the log configuration.
 */
function getDefinition(cfg: Defaults, type: "log_levels"|"custom_levels", levelName: string):LogLevelDefinition|undefined {
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
function executionPipeline(log: Log, cfg: Defaults, def: LogLevelDefinition|undefined, args: any[]):TerminatedLog {

  if (def && allowed(cfg, def)) {
    // Apply modifiers in the proper order.
    runModifierQueue(log.modifierQueue);

    // Check the test modifiers.
    if (evalPasses(log)) {

      // Save terminator props for recall purposes
      const final_log = mutateProps<FinalLog>(log, [ ['args', args], ['level', def.level] ]);

      // Render the log
      const render = print(final_log, def, args);
    
      // Fire log events
      store(final_log);
      fireListeners(final_log, def);

      // Return the terminated log object for testing purposes
      return { log: final_log, render };
    }
  }

  // Return the terminated log object for testing purposes
  return { log, render: null };
}

/**
 * Executes all of the log modifier functions within the queue.
 */
function runModifierQueue(queue: Function[]):void {
  queue.forEach(func => func());
}

/*----------------------------------------*\
 * Log Events
\*----------------------------------------*/

/**
 * Stores this log in the Shed if the Shed exists.
 */
export function store(log: FinalLog):void {
  const shed = env.$shed;
  if (shedExists(shed)) {
    shed.store(log);
  }
}

/**
 * Fires listeners for this log instance if a Shed exists.
 */
export function fireListeners(log: FinalLog, def: LogLevelDefinition):void {
  const shed = env.$shed;
  if (shedExists(shed)) {
    shed.fireListeners(log, def);
  }
}