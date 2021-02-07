import { LogRender, FinalLogData } from '../_contracts';
import { Env } from '../Env';
import { BrowserPrinter } from './BrowserPrinter';
import { NodePrinter } from './NodePrinter';

export type PrinterMethods =
  | 'printLog'
  | 'printGroup'
  | 'printGroupCollapsed'
  | 'printGroupEnd'
  | 'printTrace'
  | 'printTable'
  | 'printDir'
  | 'printDirxml';

export class Printer {
  private env: Env = new Env();

  private printer: BrowserPrinter | NodePrinter;

  private data: FinalLogData;

  constructor(data: FinalLogData) {
    this.data = data;
    this.printer = this.env.isBrowser
      ? new BrowserPrinter(data)
      : new NodePrinter(data);
  }

  get args(): unknown[] {
    return this.data.args ?? [];
  }

  // ------- PRINT METHODS -------- //

  public printLog(): LogRender | undefined {
    return this.printer.printLog();
  }

  public printGroup(): LogRender | undefined {
    return this.printer.printGroup();
  }

  public printGroupCollapsed(): LogRender | undefined {
    return this.printer.printGroupCollapsed();
  }

  public printTrace(): LogRender | undefined {
    return this.printer.printTrace();
  }

  public printGroupEnd(): LogRender {
    return this.finalizeRender(['groupEnd', []]);
  }

  public printTable(): LogRender {
    return this.finalizeRender(['table', this.args], false);
  }

  public printDir(): LogRender {
    return this.finalizeRender(['dir', this.args], false);
  }

  public printDirxml(): LogRender {
    return this.finalizeRender(['dirxml', this.args], false);
  }

  // ------ Print to the console ------- //

  /**
   * Applies the render tuple to the log instance. If spread is indicated, the args
   * value will be an array. If spread is false, the args value will be an array with
   * a nested array to prevent the spread operator from destructuring the values.
   */
  private finalizeRender([method, args]: LogRender, spread = true): LogRender {
    const expanded_args = this.data.dumpContext
      ? args.concat([this.data.context])
      : args;
    const spread_args = spread ? expanded_args : [expanded_args];
    return [method, spread_args];
  }
}
