import { SharedPrinter } from './SharedPrinter';
import { LogRender, FinalLogData } from '../_contracts';
export declare class NodePrinter extends SharedPrinter {
    constructor(data: FinalLogData);
    /**
     * The primary method for printing logs to the node console.
     */
    printLog(): LogRender;
    /**
     * The method for printing group logs to the node console.
     */
    printGroup(): LogRender;
    /**
     * The method for printing collapsed group logs to the node console.
     */
    printGroupCollapsed(): LogRender;
    printTrace(): LogRender;
    setupPrintGroup(): unknown[];
    /**
     * Formats the leader of the log string. This contains the emoji if enabled,
     * the log level name, and the number of arguments being printed.
     */
    private fLeader;
    /**
     * Add spaces to the end of a log title to make them all align.
     */
    private addPadding;
    /**
     * Adds the emoji to the log leader if enabled.
     */
    private fEmoji;
    /**
     * Adds the log level name to the leader in initial caps.
     */
    private fName;
    /**
     * Formats the meta section of the log string which includes the
     * log namespace, the label, the timestamp from the timer, the count
     * from the counter, or the test result from any assertions if any of
     * these modifiers were applied to this log.
     */
    private fMeta;
    /**
     * Formats the time on the log string based on any time modifiers
     * that have been applied to this log.
     */
    private fTime;
    /**
     * Formats the count on the log string based on any counter modifiers
     * that have been applied to this log.
     */
    private fCount;
    /**
     * Formats the label on the log string based on the label
     * modifier applied to this log.
     */
    private fLabel;
    /**
     * Adds indicator text to the log render when
     * the assertion fails.
     */
    private fAssert;
    /**
     * Adds indicator text to the log render when
     * the test expression passes.
     */
    fTest(): string;
}
