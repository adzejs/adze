import { Log, LogLevelDefinition, LogRender } from '../../_contracts';
import { applyRender, toConsole } from '../shared';
import { env } from '../../global';
import { initialCaps } from '../../util';

// ------- PRINT METHODS -------- //

export function printLog(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const [ method, leader, style, meta ] = [ def.method, fLeader(def, use_emoji, args), (log.cfg.base_style + def.style), fMeta(log, use_emoji) ];
  const render_args = meta === '' ? [ leader, style, ...args ] : [ leader, style, meta, ...args ];
  return toConsole(applyRender(log, method, render_args ));
}

export function printGroup(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const partial_args = [ fLeader(def, use_emoji, args), (log.cfg.base_style + def.style) ];
  const render_args = typeof args[0] === "string" ? [ ...partial_args, args[0] ] : partial_args;
  return toConsole(applyRender(log, 'group', render_args));
}

export function printGroupCollapsed(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const partial_args = [ fLeader(def, use_emoji, args), (log.cfg.base_style + def.style) ];
  const render_args = typeof args[0] === "string" ? [ ...partial_args, args[0] ] : partial_args;
  return toConsole(applyRender(log, 'groupCollapsed', render_args));
}

// ------- PRINT FORMATTERS -------- //

export function fLeader(def: LogLevelDefinition, use_emoji: boolean, args: any[]):string {
  return ` %c${fEmoji(def, use_emoji)} ${fName(def.levelName)}(${args.length})`;
}

function fEmoji(def: LogLevelDefinition, use_emoji: boolean):string {
  return env.$shed?.cfg?.use_emoji || use_emoji ? ` ${def.emoji}` : '';
}

function fName(name: string|undefined):string {
  return initialCaps(name ?? '');
}

export function fMeta(log: Log, use_emoji: boolean):string {
  return `${fNamespace(log)}${fLabel(log)}${fTime(log, use_emoji)}${fCount(log)}${fTest(log, use_emoji)}`;
}

function fTime(log: Log, use_emoji: boolean):string {
  const label_txt = `${log.labelVal?.timeNow ?? log.labelVal?.timeEllapsed ?? ''}`;
  return label_txt !== '' ? ` (${env.$shed?.cfg?.use_emoji || use_emoji ? '⏱' : ''}${label_txt}) ` : '';
}

function fCount(log: Log):string {
  const count = log.labelVal?.count;
  return count !== undefined ? `(Count: ${count})` : '';
}

function fNamespace(log: Log):string {
  return log.namespaceVal ? `#${log.namespaceVal} ` : '';
}

function fLabel(log: Log):string {
  return log.labelVal ? `[${log.labelVal.name}] ` : '';
}

function fTest(log: Log, use_emoji: boolean):string {
  return log.assertion === false ? `${use_emoji ? '❌ ' : ''}Assertion failed:` : '';
}