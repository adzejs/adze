import { LogRender, FinalLogData } from '../_contracts';
export declare type PrinterMethods = 'printLog' | 'printGroup' | 'printGroupCollapsed' | 'printGroupEnd' | 'printTrace' | 'printTable' | 'printDir' | 'printDirxml';
export declare class Printer {
    private env;
    private printer;
    private data;
    constructor(data: FinalLogData);
    get args(): unknown[];
    printLog(): LogRender | null;
    printGroup(): LogRender | null;
    printGroupCollapsed(): LogRender | null;
    printTrace(): LogRender | null;
    printGroupEnd(): LogRender | null;
    printTable(): LogRender | null;
    printDir(): LogRender | null;
    printDirxml(): LogRender | null;
    /**
     * Attaches context values to the arguments of the log render if the
     * dump modifier was used.
     */
    private attachContext;
    /**
     * If the log data is flagged as silent, return null instead of the log render.
     */
    private checkSilent;
}
