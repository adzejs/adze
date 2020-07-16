import { Log, LogLevelDefinition } from '../../_contracts';
import { env } from '../../global';
import { initialCaps } from '../../util';

// ------- PRINT METHODS -------- //

export function printLog(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):void {
  // Must check the return value of meta otherwise FF prints "empty string"...
  const meta = fMeta(this);
  if (meta === '') {
    const x = def.method;
    console[def.method](`${fLeader(def, args)}`, (base_style + def.style), ...args);
  } else {
    console[def.method](`${fLeader(def, args)}`, (base_style + def.style), meta, ...args);
  }
}

export function printGroup(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):void {
  console.group(`${fLeader(def, args)}`, (base_style + def.style), typeof args[0] === "string" ? args[0] : undefined );
}

export function printGroupCollapsed(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):void {
  console.groupCollapsed(`${fLeader(def, args)}`, (base_style + def.style), typeof args[0] === "string" ? args[0] : undefined );
}

// ------- PRINT FORMATTERS -------- //

function fLeader(def: LogLevelDefinition, args: any[]):string {
  return ` %c${fEmoji(def)} ${fName(def.levelName)}(${args.length})`;
}

function fEmoji(def: LogLevelDefinition):string {
  return env.$shed?.cfg?.use_emoji === true ? ` ${def.emoji}` : '';
}

function fName(name: string|undefined):string {
  return initialCaps(name ?? '');
}

function fMeta(ctxt: Log):string {
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