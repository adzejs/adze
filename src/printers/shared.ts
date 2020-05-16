import { env, isBrowser } from '../global';
import { LogLevelDefinition, Log } from "../_contracts";

// ------- PRINT ENTRY -------- //

export function print(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):void {
  if (allowed(this, def)) {
    this.printer(def, base_style, args);
  }
}

// ------- PRINT METHODS -------- //

export function printGroupEnd(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):void {
  console.groupEnd();
}

export function printTable(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):void {
  console.table(args);
}

export function printDir(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):void {
  console.dir(args);
}

export function printDirxml(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):void {
  console.dirxml(args);
}

// ------- PRINT HELPERS -------- //

export function allowed(ctxt: Log, def: LogLevelDefinition):boolean {
  return levelActive(def) && evalPasses(ctxt) && notTestEnv();

}

function levelActive(def: LogLevelDefinition):boolean {
  if (env.$shed) {
    return def.level <= env.$shed.cfg.log_level;
  }
  return true;
}

function evalPasses(ctxt: Log):boolean {
  if (ctxt.assertion !== undefined && ctxt.expression !== undefined) {
    console.warn("You have declared both an assertion and test on the same log. Please only declare one or nefarious results may occur.");
    return true;
  }
  if (ctxt.assertion !== undefined) {
    return !(ctxt.assertion === false);
  }
  if (ctxt.expression !== undefined) {
    return ctxt.expression === true;
  }
  return true;
}

function notTestEnv():boolean {
  if (isBrowser) {
    return true;
  }
  return env && env.CSAW_ENV !== 'test';
}