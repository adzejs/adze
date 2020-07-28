import * as chalk from 'chalk';
import { Log, LogLevelDefinition, LogRender } from '../../_contracts';
import { toConsole, applyRender } from '../shared';
import { env } from '../../global';
import { initialCaps } from '../../util';

// ------- PRINT METHODS -------- //

export function printLog(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const [ method, leader, meta ] = [ def.method, fLeader(def, use_emoji, args), fMeta(log, use_emoji) ];
  const render_args = meta === '' ? [ leader, ...args ] : [ leader, meta, ...args ];
  return toConsole(applyRender(log, method, render_args ));
}

export function printGroup(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const render_args = setupPrintGroup(def, use_emoji, args);
  return toConsole(applyRender(log, 'group', render_args));
}

export function printGroupCollapsed(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const render_args = setupPrintGroup(def, use_emoji, args);
  return toConsole(applyRender(log, 'groupCollapsed', render_args));
}

function setupPrintGroup(def: LogLevelDefinition, use_emoji: boolean, args: any[]):any[] {
  const partial_args = [ fLeader(def, use_emoji, args) ];
  return typeof args[0] === "string" ? [ ...partial_args, args[0] ] : partial_args;
}

// ------- PRINT FORMATTERS -------- //

export function fLeader(def: LogLevelDefinition, use_emoji: boolean, args: any[]):string {
  const emoji = use_emoji ? fEmoji(def.emoji) : '';
  const padding = use_emoji ? (14 + emoji.length) : 14;
  const padded_leader = addPadding(`${emoji} ${fName(def.levelName)}(${args.length})`, padding);
  
  return def.terminal.reduce((acc, style) => {
    return chalk[style](acc);
  }, padded_leader);
}

function addPadding(str: string, len: number):string {
  const diff = len - str.length;
  let padded = str;
  for (let i = 0; i <= diff; i += 1) {
    padded += ' ';
  }
  return padded;
}

function fEmoji(emoji: string):string {
  return ` ${emoji}`;
}

function fName(name: string|undefined):string {
  return initialCaps(name ?? '');
}

export function fMeta(log: Log, use_emoji: boolean):string {
  return `${fNamespace(log)}${fLabel(log)}${fTime(log, use_emoji)}${fCount(log)}${fTest(log, use_emoji)}`;
}

function fTime(log: Log, use_emoji: boolean):string {
  const label_txt = `${log.timeNowVal ?? log.labelVal?.timeEllapsed ?? ''}`;
  return label_txt !== '' ? `(${env.$shed?.cfg?.use_emoji || use_emoji ? '⏱' : ''}${label_txt}) ` : '';
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