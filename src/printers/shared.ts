import { LogLevelDefinition, Log, LogRender } from "../_contracts";

// ------- PRINT ENTRY -------- //

export function print(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):LogRender {
  return this.printer(def, base_style, args);
}

// ------- PRINT METHODS -------- //

export function printGroupEnd(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):LogRender {
  console.groupEnd();
  return ['groupEnd', ['', '', '', []]];
}

export function printTable(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):LogRender {
  console.table(args);
  return ['table', ['', '', '', args]];
}

export function printDir(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):LogRender {
  console.dir(args);
  return ['dir', ['', '', '', args]];
}

export function printDirxml(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):LogRender {
  console.dirxml(args);
  return ['dirxml', ['', '', '', args]];
}

export function printTrace(this: Log, def: LogLevelDefinition, base_style: string, args: any[]):LogRender {
  console.trace(...args);
  return ['trace', ['', '', '', args]];
}