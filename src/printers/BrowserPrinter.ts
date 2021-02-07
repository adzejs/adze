import { SharedPrinter } from './SharedPrinter';
import { LogRender, FinalLogData } from '../_contracts';
import { initialCaps } from '../util';

export class BrowserPrinter extends SharedPrinter {
  constructor(data: FinalLogData) {
    super(data);
  }

  // ------- PRINT METHODS -------- //

  /**
   * The primary method for printing logs to the browser console.
   */
  public printLog(): LogRender | undefined {
    const method = this.data.definition.method;
    const leader = this.fLeader();
    const style = this.data.cfg.base_style + this.data.definition.style;
    const meta = this.fMeta();

    const render_args =
      meta === ''
        ? [leader, style, ...this.data.args]
        : [leader, style, meta, ...this.data.args];

    return [method, render_args];
  }

  /**
   * The method for printing group logs to the browser console.
   */
  public printGroup(): LogRender | undefined {
    const partial_args = [
      this.fLeader(),
      this.data.cfg.base_style + this.data.definition.style,
    ];
    const render_args =
      typeof this.data.args[0] === 'string'
        ? [...partial_args, this.data.args[0]]
        : partial_args;

    return ['group', render_args];
  }

  /**
   * The method for printing collapsed group logs to the browser console.
   */
  public printGroupCollapsed(): LogRender | undefined {
    const partial_args = [
      this.fLeader(),
      this.data.cfg.base_style + this.data.definition.style,
    ];
    const render_args =
      typeof this.data.args[0] === 'string'
        ? [...partial_args, this.data.args[0]]
        : partial_args;

    return ['groupCollapsed', render_args];
  }

  public printTrace(): LogRender | undefined {
    // NOTE: Firefox does not support styling on console.trace()
    if (this.env.isFirefox) {
      return ['trace', this.data.args];
    }
    // All other browsers support console styling on console.trace()
    const render = this.printLog();
    const args = render?.[1] ?? [];
    return ['trace', args];
  }

  // ------- PRINT FORMATTERS -------- //

  /**
   * Formats the leader of the log string. This contains the emoji if enabled,
   * the log level name, and the number of arguments being printed.
   */
  public fLeader(): string {
    return ` %c${this.fEmoji()} ${this.fName()}(${this.data.args.length})`;
  }

  /**
   * Adds the emoji to the log leader if enabled.
   */
  public fEmoji(): string {
    const global_use_emoji = this.env.global.$shed?.overrides?.use_emoji;
    return global_use_emoji || this.use_emoji
      ? ` ${this.data.definition.emoji}`
      : '';
  }

  /**
   * Adds the log level name to the leader in initial caps.
   */
  public fName(): string {
    return initialCaps(this.data.definition.levelName ?? '');
  }

  /**
   * Formats the meta section of the log string which includes the
   * log namespace, the label, the timestamp from the timer, the count
   * from the counter, or the test result from any assertions if any of
   * these modifiers were applied to this log.
   */
  public fMeta(): string {
    return `${this.fNamespace()}${this.fLabel()}${this.fTime()}${this.fCount()}${this.fTest()}`;
  }

  /**
   * Formats the time on the log string based on any time modifiers
   * that have been applied to this log.
   */
  public fTime(): string {
    const timeNow = this.data.label?.timeNow;
    const timeEllapsed = this.data.label?.timeEllapsed;
    const label_txt = `${timeNow ?? timeEllapsed ?? ''}`;

    const global_use_emoji = this.env.global.$shed?.overrides?.use_emoji;

    return label_txt !== ''
      ? ` (${global_use_emoji || this.use_emoji ? '⏱' : ''}${label_txt}) `
      : '';
  }

  /**
   * Formats the count on the log string based on any counter modifiers
   * that have been applied to this log.
   */
  public fCount(): string {
    const count = this.data.label.count;
    return count !== null ? `(Count: ${count})` : '';
  }

  /**
   * Formats the label on the log string based on the label
   * modifier applied to this log.
   */
  public fLabel(): string {
    return this.data.label.name ? `[${this.data.label.name}] ` : '';
  }

  /**
   * Formats the assertion or test on the log string based on
   * any testing modifiers applied to this log.
   */
  public fTest(): string {
    return this.data.assertion === false
      ? `${this.use_emoji ? '❌ ' : ''}Assertion failed:`
      : '';
  }
}
