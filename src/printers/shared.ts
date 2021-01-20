import {
  Log,
  LogRender,
  ConsoleMethod,
  LogLevelDefinition,
} from '../_contracts';
import { env } from '../global';
import { isString } from '../util';

// ------- PRINT ENTRY -------- //

export function print(
  log: Log,
  def: LogLevelDefinition,
  args: any[]
): LogRender {
  const use_emoji =
    env.$shed?.overrides?.use_emoji === true || log.cfg.use_emoji === true;
  return log.printer(log, def, use_emoji, args);
}

// ------- PRINT METHODS -------- //

export function printGroupEnd(
  log: Log,
  def: LogLevelDefinition,
  use_emoji: boolean,
  args: any[]
): LogRender {
  return toConsole(applyRender(log, 'groupEnd', []), log.isSilent);
}

export function printTable(
  log: Log,
  def: LogLevelDefinition,
  use_emoji: boolean,
  args: any[]
): LogRender {
  return toConsole(applyRender(log, 'table', args), log.isSilent, false);
}

export function printDir(
  log: Log,
  def: LogLevelDefinition,
  use_emoji: boolean,
  args: any[]
): LogRender {
  return toConsole(applyRender(log, 'dir', args), log.isSilent, false);
}

export function printDirxml(
  log: Log,
  def: LogLevelDefinition,
  use_emoji: boolean,
  args: any[]
): LogRender {
  return toConsole(applyRender(log, 'dirxml', args), log.isSilent, false);
}

export function printTrace(
  log: Log,
  def: LogLevelDefinition,
  use_emoji: boolean,
  args: any[]
): LogRender {
  return toConsole(applyRender(log, 'trace', args), log.isSilent);
}

// ------ Print to the console ------- //

export function applyRender(
  log: Log,
  method: ConsoleMethod,
  args: any[]
): LogRender {
  const expanded_args = log.dumpContext ? args.concat([log.context]) : args;
  log.render = [method, expanded_args];
  return log.render;
}

/**
 * Render the log. If the ADZE_ENV is set to "dev" the log will not render and
 * will be returned for unit library development purposes.
 */
export function toConsole(
  render: LogRender,
  is_silent: boolean,
  spread = true
): LogRender {
  const [method, args] = render;
  if (env.ADZE_ENV !== 'dev' && !is_silent) {
    spread ? console[method](...args) : console[method](args);
  }
  return render;
}

// ------ Shared Formatters ------- //

/**
 * Formats the namespace on the log string based on the namespace
 * modifier applied to this log.
 */
export function fNamespace(log: Log): string {
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
