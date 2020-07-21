import { Log, LogLevelDefinition, LogRender, ConsoleMethod } from '../../_contracts';
import { env } from '../../global';
import { initialCaps } from '../../util';

// ------- PRINT METHODS -------- //

export function printLog(this: Log, def: LogLevelDefinition, base_style: string, _args: any[]):LogRender {
  const render = makeRender(this, def.method, def, base_style, _args);
  const [ method, [leader, style, meta, args ]] = render;

  // Must check the return value of meta otherwise Firefox prints "empty string"...
  if (meta === '') {
    console[method](leader, style, ...args);
  } else {
    console[method](leader, style, meta, ...args);
  }
  
  return render;
}

export function printGroup(this: Log, def: LogLevelDefinition, base_style: string, _args: any[]):LogRender {
  const render = makeRender(this, 'group', def, base_style, _args);
  const [ _, [leader, style, __, args ]] = render;

  console.group(`${leader}`, style, typeof args[0] === "string" ? args[0] : undefined );

  return render;
}

export function printGroupCollapsed(this: Log, def: LogLevelDefinition, base_style: string, _args: any[]):LogRender {
  const render = makeRender(this, 'groupCollapsed', def, base_style, _args);
  const [ _, [leader, style, __, args ]] = render;

  console.groupCollapsed(`${leader}`, style, typeof args[0] === "string" ? args[0] : undefined );

  return render;
}

/**
 * Utility function to create the LogRender tuple.
 */
function makeRender(ctxt: Log, method: ConsoleMethod, def: LogLevelDefinition, base_style: string, args: any[]):LogRender {
  return [method, [fLeader(def, args), (base_style + def.style), fMeta(ctxt), args]];
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
