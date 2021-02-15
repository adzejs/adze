import chalk from 'chalk';
import { SharedPrinter } from './SharedPrinter';
import { LogRender, FinalLogData } from '../_contracts';
import { initialCaps } from '../util';

export class NodePrinter extends SharedPrinter {
  constructor(data: FinalLogData) {
    super(data);
  }

  // ------- PRINT METHODS -------- //

  /**
   * The primary method for printing logs to the node console.
   */
  public printLog(): LogRender {
    const method = this.data.definition.method;
    const leader = this.fLeader();
    const style = this.data.definition.terminal;
    const meta = this.fMeta();

    const render_args =
      meta === ''
        ? [leader, ...this.data.args]
        : [leader, style, meta, ...this.data.args];

    return [method, render_args];
  }

  /**
   * The method for printing group logs to the node console.
   */
  public printGroup(): LogRender {
    const render_args = this.setupPrintGroup();
    return ['group', render_args];
  }

  /**
   * The method for printing collapsed group logs to the node console.
   */
  public printGroupCollapsed(): LogRender {
    const render_args = this.setupPrintGroup();
    return ['groupCollapsed', render_args];
  }

  public printTrace(): LogRender {
    const render = this.printLog();
    const args = render?.[1] ?? [];
    return ['trace', args];
  }

  public setupPrintGroup(): unknown[] {
    const partial_args = [this.fLeader()];
    return typeof this.data.args[0] === 'string'
      ? [...partial_args, this.data.args[0]]
      : partial_args;
  }

  // ------- PRINT FORMATTERS -------- //

  /**
   * Formats the leader of the log string. This contains the emoji if enabled,
   * the log level name, and the number of arguments being printed.
   */
  private fLeader(): string {
    const emoji = this.use_emoji ? this.fEmoji() : '';
    const padding = this.use_emoji ? 14 + emoji.length : 14;
    const padded_leader = this.addPadding(
      `${emoji} ${this.fName()}(${this.data.args.length})`,
      padding
    );

    return this.data.definition?.terminal.reduce((acc, style) => {
      return chalk[style](acc);
    }, padded_leader);
  }

  /**
   * Add spaces to the end of a log title to make them all align.
   */
  private addPadding(str: string, len: number): string {
    const diff = len - str.length;
    let padded = str;
    for (let i = 0; i <= diff; i += 1) {
      padded += ' ';
    }
    return padded;
  }

  /**
   * Adds the emoji to the log leader if enabled.
   */
  private fEmoji(): string {
    return ` ${this.data.definition?.emoji ?? ''}`;
  }

  /**
   * Adds the log level name to the leader in initial caps.
   */
  private fName(): string {
    return initialCaps(this.data.definition?.levelName ?? '');
  }

  /**
   * Formats the meta section of the log string which includes the
   * log namespace, the label, the timestamp from the timer, the count
   * from the counter, or the test result from any assertions if any of
   * these modifiers were applied to this log.
   */
  private fMeta(): string {
    return `${this.fNamespace()}${this.fLabel()}${this.fTime()}${this.fCount()}${this.fAssert()}${this.fTest()}`;
  }

  /**
   * Formats the time on the log string based on any time modifiers
   * that have been applied to this log.
   */
  private fTime(): string {
    const timeNow = this.data.timeNow;
    const timeEllapsed = this.data.label.timeEllapsed;
    const label_txt = `${timeNow ?? timeEllapsed ?? ''}`;

    const use_emoji_global = this.env.global.$shed?.overrides?.use_emoji;

    return label_txt !== ''
      ? `(${use_emoji_global || this.use_emoji ? '⏱' : ''}${label_txt}) `
      : '';
  }

  /**
   * Formats the count on the log string based on any counter modifiers
   * that have been applied to this log.
   */
  private fCount(): string {
    const count = this.data.label.count;
    return count ? `(Count: ${count})` : '';
  }

  /**
   * Formats the label on the log string based on the label
   * modifier applied to this log.
   */
  private fLabel(): string {
    return this.data.label.name ? `[${this.data.label.name}] ` : '';
  }

  /**
   * Adds indicator text to the log render when
   * the assertion fails.
   */
  private fAssert(): string {
    return this.data.assertion === false
      ? `${this.use_emoji ? '❌ ' : ''}Assertion failed:`
      : '';
  }

  /**
   * Adds indicator text to the log render when
   * the test expression passes.
   */
  public fTest(): string {
    return this.data.expression === true
      ? `${this.use_emoji ? '✅ ' : ''}Expression Passed:`
      : '';
  }
}
