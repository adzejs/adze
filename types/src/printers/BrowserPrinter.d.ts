import { SharedPrinter } from './SharedPrinter';
import { LogRender, FinalLogData } from '../_contracts';
export declare class BrowserPrinter extends SharedPrinter {
    constructor(data: FinalLogData);
    /**
     * The primary method for rendering logs.
     */
    printLog(): LogRender;
    /**
     * The method for rendering group logs.
     */
    printGroup(): LogRender;
    /**
     * The method for rendering collapsed group logs.
     */
    printGroupCollapsed(): LogRender;
    /**
     * Renders the stacktrace.
     */
    printTrace(): LogRender;
    /**
     * Formats the leader of the log string. This contains the emoji if enabled,
     * the log level name, and the number of arguments being printed.
     */
    fLeader(): string;
    /**
     * Adds the emoji to the log leader if enabled.
     */
    fEmoji(): string;
    /**
     * Adds the log level name to the leader in initial caps.
     */
    fName(): string;
    /**
     * Formats the meta section of the log string which includes the
     * log namespace, the label, the timestamp from the timer, the count
     * from the counter, or the test result from any assertions if any of
     * these modifiers were applied to this log.
     */
    fMeta(): string;
    /**
     * Formats the time on the log string based on any time modifiers
     * that have been applied to this log.
     */
    fTime(): string;
    /**
     * Formats the count on the log string based on any counter modifiers
     * that have been applied to this log.
     */
    fCount(): string;
    /**
     * Formats the label on the log string based on the label
     * modifier applied to this log.
     */
    fLabel(): string;
    /**
     * Adds indicator text to the log render when
     * the assertion fails.
     */
    fAssert(): string;
    /**
     * Adds indicator text to the log render when
     * the test expression passes.
     */
    fTest(): string;
}
