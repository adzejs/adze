import * as chalk from 'chalk';
import { Log, LogLevelDefinition, LogRender } from '../../_contracts';
import { toConsole, applyRender, fNamespace } from '../shared';
import { env } from '../../global';
import { initialCaps, isString } from '../../util';

// ------- PRINT METHODS -------- //

/**
 * The primary method for printing logs to the node console.
 */
export function printLog(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const [ method, leader, style, meta ] = [ def.method, fLeader(def, use_emoji, args), def.terminal, fMeta(log, use_emoji) ];
  const render_args = meta === '' ? [ leader, ...args ] : [ leader, style, meta, ...args ];
  return toConsole(applyRender(log, method, render_args ), log.isSilent);
}

/**
 * The method for printing group logs to the node console.
 */
export function printGroup(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const render_args = setupPrintGroup(def, use_emoji, args);
  return toConsole(applyRender(log, 'group', render_args), log.isSilent);
}

/**
 * The method for printing collapsed group logs to the node console.
 */
export function printGroupCollapsed(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const render_args = setupPrintGroup(def, use_emoji, args);
  return toConsole(applyRender(log, 'groupCollapsed', render_args), log.isSilent);
}

function setupPrintGroup(def: LogLevelDefinition, use_emoji: boolean, args: any[]):any[] {
  const partial_args = [ fLeader(def, use_emoji, args) ];
  return typeof args[0] === "string" ? [ ...partial_args, args[0] ] : partial_args;
}

// ------- PRINT FORMATTERS -------- //

/**
 * Formats the leader of the log string. This contains the emoji if enabled,
 * the log level name, and the number of arguments being printed.
 */
export function fLeader(def: LogLevelDefinition, use_emoji: boolean, args: any[]):string {
  const emoji = use_emoji ? fEmoji(def.emoji) : '';
  const padding = use_emoji ? (14 + emoji.length) : 14;
  const padded_leader = addPadding(`${emoji} ${fName(def.levelName)}(${args.length})`, padding);
  
  return def.terminal.reduce((acc, style) => {
    return chalk[style](acc);
  }, padded_leader);
}

/**
 * Add spaces to the end of a log title to make them all align.
 */
function addPadding(str: string, len: number):string {
  const diff = len - str.length;
  let padded = str;
  for (let i = 0; i <= diff; i += 1) {
    padded += ' ';
  }
  return padded;
}

/**
 * Adds the emoji to the log leader if enabled.
 */
function fEmoji(emoji: string):string {
  return ` ${emoji}`;
}

/**
 * Adds the log level name to the leader in initial caps.
 */
function fName(name: string|undefined):string {
  return initialCaps(name ?? '');
}

/**
 * Formats the meta section of the log string which includes the
 * log namespace, the label, the timestamp from the timer, the count
 * from the counter, or the test result from any assertions if any of
 * these modifiers were applied to this log.
 */
export function fMeta(log: Log, use_emoji: boolean):string {
  return `${fNamespace(log)}${fLabel(log)}${fTime(log, use_emoji)}${fCount(log)}${fTest(log, use_emoji)}`;
}

/**
 * Formats the time on the log string based on any time modifiers
 * that have been applied to this log.
 */
function fTime(log: Log, use_emoji: boolean):string {
  const label_txt = `${log.timeNowVal ?? log.labelVal?.timeEllapsed ?? ''}`;
  return label_txt !== '' ? `(${env.$shed?.overrides?.use_emoji || use_emoji ? '⏱' : ''}${label_txt}) ` : '';
}

/**
 * Formats the count on the log string based on any counter modifiers
 * that have been applied to this log.
 */
function fCount(log: Log):string {
  const count = log.labelVal?.count;
  return count !== undefined ? `(Count: ${count})` : '';
}

/**
 * Formats the label on the log string based on the label
 * modifier applied to this log.
 */
function fLabel(log: Log):string {
  return log.labelVal ? `[${log.labelVal.name}] ` : '';
}

/**
 * Formats the assertion or test on the log string based on
 * any testing modifiers applied to this log.
 */
function fTest(log: Log, use_emoji: boolean):string {
  return log.assertion === false ? `${use_emoji ? '❌ ' : ''}Assertion failed:` : '';
}