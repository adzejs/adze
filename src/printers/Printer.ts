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
    return this.attachContext(this.printer.printLog());
  }

  public printGroup(): LogRender | undefined {
    return this.attachContext(this.printer.printGroup());
  }

  public printGroupCollapsed(): LogRender | undefined {
    return this.attachContext(this.printer.printGroupCollapsed());
  }

  public printTrace(): LogRender | undefined {
    return this.attachContext(this.printer.printTrace());
  }

  public printGroupEnd(): LogRender | undefined {
    return this.attachContext(['groupEnd', []]);
  }

  public printTable(): LogRender | undefined {
    return this.attachContext(['table', this.args]);
  }

  public printDir(): LogRender | undefined {
    return this.attachContext(['dir', this.args]);
  }

  public printDirxml(): LogRender | undefined {
    return this.attachContext(['dirxml', this.args]);
  }

  // =======================
  //  Private Methods
  // =======================

  /**
   * Attaches context values to the arguments of the log render if the
   * dump modifier was used.
   */
  private attachContext(render: LogRender | undefined): LogRender | undefined {
    if (render && this.data.dumpContext) {
      return [render[0], [...render[1], this.data.context]];
    }
    return render;
  }
}
