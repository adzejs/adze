import { Log, LogRender, Defaults, ConsoleMethod } from "../_contracts";
import { env } from '../global';

// ------- PRINT ENTRY -------- //

export function print(this: Log, cfg: Defaults, levelName: string, args: any[]):LogRender {
  const use_emoji = env.$shed?.cfg?.use_emoji === true || cfg.use_emoji === true;
  return this.printer(cfg, levelName, use_emoji, args);
}

// ------- PRINT METHODS -------- //

export function printGroupEnd(this: Log, cfg: Defaults, _: string, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(this, 'groupEnd', []));
}

export function printTable(this: Log, cfg: Defaults, _: string, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(this, 'table', args), false);
}

export function printDir(this: Log, cfg: Defaults, _: string, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(this, 'dir', args), false);
}

export function printDirxml(this: Log, cfg: Defaults, _: string, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(this, 'dirxml', args), false);
}

export function printTrace(this: Log, cfg: Defaults, _: string, use_emoji: boolean, args: any[]):LogRender {
  return toConsole(applyRender(this, 'trace', args));
}

// ------ Print to the console ------- //

export function applyRender(ctxt: Log, method: ConsoleMethod, args: any[]):LogRender {
  ctxt.render = [method, args];
  return ctxt.render;
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