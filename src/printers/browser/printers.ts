import { FinalLog, LogLevelDefinition, LogRender } from '../../_contracts';
import { applyRender, fNamespace } from '../shared';
import { env } from '../../global';
import { initialCaps } from '../../util';

// ------- PRINT METHODS -------- //

/**
 * The primary method for printing logs to the browser console.
 */
export function printLog(log: FinalLog, use_emoji: boolean): LogRender {
  const [method, leader, style, meta] = [
    log.definition.method,
    fLeader(log.definition, use_emoji, log.args),
    log.cfg.base_style + log.definition.style,
    fMeta(log, use_emoji),
  ];
  const render_args =
    meta === ''
      ? [leader, style, ...log.args]
      : [leader, style, meta, ...log.args];

  return applyRender(log, method, render_args);
}

/**
 * The method for printing group logs to the browser console.
 */
export function printGroup(log: FinalLog, use_emoji: boolean): LogRender {
  const partial_args = [
    fLeader(log.definition, use_emoji, log.args),
    log.cfg.base_style + log.definition.style,
  ];
  const render_args =
    typeof log.args[0] === 'string'
      ? [...partial_args, log.args[0]]
      : partial_args;

  return applyRender(log, 'group', render_args);
}

/**
 * The method for printing collapsed group logs to the browser console.
 */
export function printGroupCollapsed(
  log: FinalLog,
  use_emoji: boolean
): LogRender {
  const partial_args = [
    fLeader(log.definition, use_emoji, log.args),
    log.cfg.base_style + log.definition.style,
  ];
  const render_args =
    typeof log.args[0] === 'string'
      ? [...partial_args, log.args[0]]
      : partial_args;

  return applyRender(log, 'groupCollapsed', render_args);
}

// ------- PRINT FORMATTERS -------- //

/**
 * Formats the leader of the log string. This contains the emoji if enabled,
 * the log level name, and the number of arguments being printed.
 */
export function fLeader(
  def: LogLevelDefinition,
  use_emoji: boolean,
  args: unknown[]
): string {
  return ` %c${fEmoji(def, use_emoji)} ${fName(def.levelName)}(${args.length})`;
}

/**
 * Adds the emoji to the log leader if enabled.
 */
function fEmoji(def: LogLevelDefinition, use_emoji: boolean): string {
  return env.$shed?.overrides?.use_emoji || use_emoji ? ` ${def.emoji}` : '';
}

/**
 * Adds the log level name to the leader in initial caps.
 */
function fName(name: string | undefined): string {
  return initialCaps(name ?? '');
}

/**
 * Formats the meta section of the log string which includes the
 * log namespace, the label, the timestamp from the timer, the count
 * from the counter, or the test result from any assertions if any of
 * these modifiers were applied to this log.
 */
export function fMeta(log: FinalLog, use_emoji: boolean): string {
  return `${fNamespace(log)}${fLabel(log)}${fTime(log, use_emoji)}${fCount(
    log
  )}${fTest(log, use_emoji)}`;
}

/**
 * Formats the time on the log string based on any time modifiers
 * that have been applied to this log.
 */
function fTime(log: FinalLog, use_emoji: boolean): string {
  const label_txt = `${
    log.labelVal?.timeNow ?? log.labelVal?.timeEllapsed ?? ''
  }`;
  return label_txt !== ''
    ? ` (${
        env.$shed?.overrides?.use_emoji || use_emoji ? '⏱' : ''
      }${label_txt}) `
    : '';
}

/**
 * Formats the count on the log string based on any counter modifiers
 * that have been applied to this log.
 */
function fCount(log: FinalLog): string {
  const count = log.labelVal?.count;
  return count !== undefined ? `(Count: ${count})` : '';
}

/**
 * Formats the label on the log string based on the label
 * modifier applied to this log.
 */
function fLabel(log: FinalLog): string {
  return log.labelVal ? `[${log.labelVal.name}] ` : '';
}

/**
 * Formats the assertion or test on the log string based on
 * any testing modifiers applied to this log.
 */
function fTest(log: FinalLog, use_emoji: boolean): string {
  return log.assertion === false
    ? `${use_emoji ? '❌ ' : ''}Assertion failed:`
    : '';
}
