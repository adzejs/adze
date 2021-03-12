import { MetaData, HrTime } from '../_contracts';
export declare class Label {
    /**
     * The name of the label.
     */
    readonly name: string;
    /**
     * MDC context that has been assigned to the label
     * through a thread.
     */
    private _context;
    /**
     * A counter for the number of times a log
     * with this label has been terminated.
     */
    private _count;
    /**
     * Time ellapsed since execution.
     */
    private _timeNow;
    /**
     * Beginning of a timer for this label.
     */
    private _timeStart;
    /**
     * Amount of time ellapsed between the calls of startTime()
     * and endTime() for this label.
     */
    private _timeEllapsed;
    constructor(name: string, context?: MetaData, count?: number | null, timeNow?: string | null, timeEllapsed?: string | null);
    get count(): number | null;
    get timeNow(): string | null;
    get timeEllapsed(): string | null;
    /**
     * Retrieve a copy of the MDC context attached to this label.
     */
    getContext(): MetaData;
    /**
     * Add context to the MDC thread.
     */
    addContext<T>(key: string, value: T): void;
    /**
     * Remove context from the MDC thread.
     */
    removeContext(key: string): void;
    /**
     * Empties the MDC context.
     */
    clearContext(): void;
    /**
     * Add to the counter. Adds 1 by default.
     */
    addCount(num?: number): void;
    /**
     * Reset the counter to 0.
     */
    resetCount(): void;
    /**
     * Sets the counter to null.
     */
    clearCount(): void;
    /**
     * Starts a new timer by capturing the time when
     * this method was executed.
     */
    startTime(): void;
    /**
     * Sets the current execution time.
     */
    captureTimeNow(): void;
    /**
     * Ends a previously started timer and records the
     * time ellapsed.
     */
    endTime(): void;
    /**
     * Generates the current execution time.
     */
    static createTimeNow(): string;
    /**
     * Takes an HrTime tuple and converts it into a human-readable formatted
     * string in the format of `{sec}s {ms}ms`.
     */
    static formatTime([sec, nano]: HrTime): string;
}
