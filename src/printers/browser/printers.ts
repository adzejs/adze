import { Log, LogLevelDefinition, LogRender } from '../../_contracts';
import { applyRender, toConsole } from '../shared';
import { env } from '../../global';
import { initialCaps } from '../../util';

// ------- PRINT METHODS -------- //

export function printLog(this: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const [ method, leader, style, meta ] = [ def.method, fLeader(def, args), (this.cfg.base_style + def.style), fMeta(this) ];
  const render_args = meta === '' ? [ leader, style, ...args ] : [ leader, style, meta, ...args ];
  return toConsole(applyRender(this, method, render_args ));
}

export function printGroup(this: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const partial_args = [ fLeader(def, args), (this.cfg.base_style + def.style) ];
  const render_args = typeof args[0] === "string" ? [ ...partial_args, args[0] ] : partial_args;
  return toConsole(applyRender(this, 'group', render_args));
}

export function printGroupCollapsed(this: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  const partial_args = [ fLeader(def, args), (this.cfg.base_style + def.style) ];
  const render_args = typeof args[0] === "string" ? [ ...partial_args, args[0] ] : partial_args;
  return toConsole(applyRender(this, 'groupCollapsed', render_args));
}

// ------- PRINT FORMATTERS -------- //

export function fLeader(def: LogLevelDefinition, args: any[]):string {
  return ` %c${fEmoji(def)} ${fName(def.levelName)}(${args.length})`;
}

function fEmoji(def: LogLevelDefinition):string {
  return env.$shed?.cfg?.use_emoji === true ? ` ${def.emoji}` : '';
}

function fName(name: string|undefined):string {
  return initialCaps(name ?? '');
}

export function fMeta(ctxt: Log):string {
  return `${fNamespace(ctxt)}${fLabel(ctxt)}${fTime(ctxt)}${fCount(ctxt)}`;
}

function fTime(ctxt: Log):string {
  const label_txt = `${ctxt.labelVal?.timeNow ?? ctxt.labelVal?.timeEllapsed ?? ''}`;
  return label_txt !== '' ? ` (${env.$shed?.cfg?.use_emoji ? '⏱' : ''}${label_txt}) ` : '';
}

function fCount(ctxt: Log):string {
  const count = ctxt.labelVal?.count;
  return count !== undefined ? `(Count: ${count})` : '';
}

function fNamespace(ctxt: Log):string {
  return ctxt.namespaceVal ? `#${ctxt.namespaceVal} ` : '';
}

function fLabel(ctxt: Log):string {
  return ctxt.labelVal ? `[${ctxt.labelVal.name}] ` : '';
}
