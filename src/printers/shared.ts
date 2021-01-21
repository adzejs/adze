import { FinalLog, LogRender, ConsoleMethod } from '../_contracts';
import { env } from '../global';
import { isString } from '../util';

// ------- PRINT ENTRY -------- //

export function print(log: FinalLog): LogRender {
  const use_emoji =
    env.$shed?.overrides?.use_emoji === true || log.cfg.use_emoji === true;
  return log.printer(log, use_emoji);
}

// ------- PRINT METHODS -------- //

export function printGroupEnd(log: FinalLog): LogRender {
  return applyRender(log, 'groupEnd', []);
}

export function printTable(log: FinalLog): LogRender {
  return applyRender(log, 'table', log.args, false); //, log.isSilent, false);
}

export function printDir(log: FinalLog): LogRender {
  return applyRender(log, 'dir', log.args, false); //, log.isSilent, false);
}

export function printDirxml(log: FinalLog): LogRender {
  return applyRender(log, 'dirxml', log.args, false); //, log.isSilent, false);
}

export function printTrace(log: FinalLog): LogRender {
  return applyRender(log, 'trace', log.args);
}

// ------ Print to the console ------- //

/**
 * Applies the render tuple to the log instance. If spread is indicated, the args
 * value will be an array. If spread is false, the args value will be an array with
 * a nested array to prevent the spread operator from destructuring the values.
 */
export function applyRender(
  log: FinalLog,
  method: ConsoleMethod,
  args: any[],
  spread = true
): LogRender {
  const expanded_args = log.dumpContext ? args.concat([log.context]) : args;
  const spread_args = spread ? expanded_args : [expanded_args];
  log.render = [method, spread_args];
  return log.render;
}

/**
 * Render the log. If the ADZE_ENV is set to "dev" the log will not render and
 * will be returned for unit library development purposes.
 */
export function toConsole(render: LogRender, is_silent: boolean): LogRender {
  const [method, args] = render;
  if (env.ADZE_ENV !== 'dev' && !is_silent) {
    console[method](...args);
  }
  return render;
}

// ------ Shared Formatters ------- //

/**
 * Formats the namespace on the log string based on the namespace
 * modifier applied to this log.
 */
export function fNamespace(log: FinalLog): string {
  const ns = log.namespaceVal;
  if (ns) {
    if (isString(ns)) {
      return `#${log.namespaceVal} `;
    } else {
      return ns.reduce((acc, name) => `${acc}#${name} `, '');
    }
  }
  return '';
}
