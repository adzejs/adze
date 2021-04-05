import hrtime from 'browser-process-hrtime';
import { MetaData, HrTime, LabelData } from '../_contracts';

export class Label {
  /**
   * The name of the label.
   */
  public readonly name: string;

  /**
   * MDC context that has been assigned to the label
   * through a thread.
   */
  private _context: MetaData = {};

  /**
   * A counter for the number of times a log
   * with this label has been terminated.
   */
  private _count: number | null;

  /**
   * Time ellapsed since execution.
   */
  private _timeNow: string | null;

  /**
   * Beginning of a timer for this label.
   */
  private _timeStart: [number, number] | null = null;

  /**
   * Amount of time ellapsed between the calls of startTime()
   * and endTime() for this label.
   */
  private _timeEllapsed: string | null;

  constructor(
    name: string,
    context: MetaData = {},
    count: number | null = null,
    timeNow: string | null = null,
    timeEllapsed: string | null = null
  ) {
    this.name = name;
    this._context = context;
    this._count = count;
    this._timeNow = timeNow;
    this._timeEllapsed = timeEllapsed;
  }

  public get count(): number | null {
    return this._count;
  }

  public get timeNow(): string | null {
    return this._timeNow;
  }

  public get timeEllapsed(): string | null {
    return this._timeEllapsed;
  }

  /**
   * Retrieve a copy of the MDC context attached to this label.
   */
  public getContext(): MetaData {
    return { ...this._context };
  }

  /**
   * Add context to the MDC thread.
   */
  public addContext<T>(key: string, value: T): void {
    this._context[key] = value;
  }

  /**
   * Remove context from the MDC thread.
   */
  public removeContext(key: string): void {
    delete this._context[key];
  }

  /**
   * Empties the MDC context.
   */
  public clearContext(): void {
    this._context = {};
  }

  /**
   * Add to the counter. Adds 1 by default.
   */
  public addCount(num = 1): void {
    this._count = this._count ? this._count + num : num;
  }

  /**
   * Reset the counter to 0.
   */
  public resetCount(): void {
    this._count = 0;
  }

  /**
   * Sets the counter to null.
   */
  public clearCount(): void {
    this._count = null;
  }

  /**
   * Starts a new timer by capturing the time when
   * this method was executed.
   */
  public startTime(): void {
    this._timeStart = hrtime();
  }

  /**
   * Sets the current execution time.
   */
  public captureTimeNow(): void {
    this._timeNow = Label.formatTime(hrtime());
  }

  /**
   * Ends a previously started timer and records the
   * time ellapsed.
   */
  public endTime(): void {
    if (this._timeStart) {
      this._timeEllapsed = Label.formatTime(hrtime(this._timeStart));
    } else {
      console.warn('Adze: You cannot end a timer that has not been started.');
    }
  }

  /**
   * Generates the current execution time.
   */
  public static createTimeNow(): string {
    return Label.formatTime(hrtime());
  }

  /**
   * Takes an HrTime tuple and converts it into a human-readable formatted
   * string in the format of `{sec}s {ms}ms`.
   */
  public static formatTime([sec, nano]: HrTime): string {
    return `${sec}s ${nano / 1000000}ms`;
  }

  /**
   * Returns a data object containing the values tracked globally
   * on this label instance.
   */
  public get data(): LabelData {
    return {
      name: this.name,
      timeNow: this._timeNow,
      timeEllapsed: this._timeEllapsed,
      count: this._count,
    };
  }
}
