import { LogRender, FinalLogData } from '../_contracts';
import { Env } from '../env';
import { BrowserPrinter } from './BrowserPrinter';
import { NodePrinter } from './NodePrinter';
import { MachinePrinter } from './MachinePrinter';

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

  private printer: BrowserPrinter | NodePrinter | MachinePrinter;

  private data: FinalLogData<any>;

  constructor(data: FinalLogData<any>) {
    this.data = data;
    this.printer = this.resolvePrinter();
  }

  /**
   * Determine the Printer to use based upon configuration and environment.
   */
  private resolvePrinter(): BrowserPrinter | NodePrinter | MachinePrinter {
    if (this.data.cfg.machineReadable) {
      return new MachinePrinter(this.data);
    } else if (this.env.isBrowser) {
      return new BrowserPrinter(this.data);
    }
    return new NodePrinter(this.data);
  }

  get args(): unknown[] {
    return this.data.args ?? [];
  }

  // ------- PRINT METHODS -------- //

  public printLog(): LogRender | null {
    return this.checkSilent(this.attachContext(this.printer.printLog()));
  }

  public printGroup(): LogRender | null {
    return this.checkSilent(this.attachContext(this.printer.printGroup()));
  }

  public printGroupCollapsed(): LogRender | null {
    return this.checkSilent(this.attachContext(this.printer.printGroupCollapsed()));
  }

  public printTrace(): LogRender | null {
    return this.checkSilent(this.attachContext(this.printer.printTrace()));
  }

  public printGroupEnd(): LogRender | null {
    return this.checkSilent(this.attachContext(this.printer.printGroupEnd()));
  }

  public printTable(): LogRender | null {
    return this.checkSilent(this.attachContext(this.printer.printTable()));
  }

  public printDir(): LogRender | null {
    return this.checkSilent(this.attachContext(this.printer.printDir()));
  }

  public printDirxml(): LogRender | null {
    return this.checkSilent(this.attachContext(this.printer.printDirxml()));
  }

  // =======================
  //  Private Methods
  // =======================

  /**
   * Attaches context values to the arguments of the log render if the
   * dump modifier was used.
   */
  private attachContext(render: LogRender | null): LogRender | null {
    if (render && this.data.dumpContext && !this.data.cfg.machineReadable) {
      return [render[0], [...render[1], this.data.context]];
    }
    return render;
  }

  /**
   * If the log data is flagged as silent, return null instead of the log render.
   */
  private checkSilent(render: LogRender | null): LogRender | null {
    if (this.data.isSilent) {
      return null;
    }
    return render;
  }
}
