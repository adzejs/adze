import { Log, LogRender, Defaults, ConsoleMethod, LogLevelDefinition } from "../_contracts";
import { env } from '../global';

// ------- PRINT ENTRY -------- //

export function print(log: Log, def: LogLevelDefinition, args: any[]):LogRender {
  const use_emoji = env.$shed?.cfg?.use_emoji === true || log.cfg.use_emoji === true;
  return log.printer(log, def, use_emoji, args);
}

// ------- PRINT METHODS -------- //

export function printGroupEnd(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(log, 'groupEnd', []));
}

export function printTable(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(log, 'table', args), false);
}

export function printDir(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(log, 'dir', args), false);
}

export function printDirxml(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(log, 'dirxml', args), false);
}

export function printTrace(log: Log, def: LogLevelDefinition, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(log, 'trace', args));
}

// ------ Print to the console ------- //

export function applyRender(log: Log, method: ConsoleMethod, args: any[]):LogRender {
  log.render = [method, args];
  return log.render;
}

export function toConsole(render: LogRender, spread: boolean = true):LogRender {
  const [method, args] = render;
  if (env.ADZE_ENV !== 'dev') {
    if (spread) {
      console[method](...args);
    } else {
      console[method](args);
    }
  }
  return render;
}