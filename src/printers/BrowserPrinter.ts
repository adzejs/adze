import { SharedPrinter } from './SharedPrinter';
import { LogRender, FinalLogData } from '../_contracts';
import { initialCaps } from '../util';

export class BrowserPrinter extends SharedPrinter {
  constructor(data: FinalLogData) {
    super(data);
  }

  // ------- PRINT METHODS -------- //

  /**
   * The primary method for rendering logs.
   */
  public printLog(): LogRender {
    const method = this.data.definition.method;
    const leader = this.fLeader();
    const style = this.unstyled
      ? ''
      : this.data.cfg.baseStyle + this.data.definition.style;
    const meta = this.fMeta();

    // Assemble the args
    const renderArgsRaw = [leader, style, meta];
    const renderArgsFiltered = renderArgsRaw.filter((val) => val !== '');
    const renderArgs = [...renderArgsFiltered, ...this.data.args];

    return [method, renderArgs];
  }

  /**
   * The method for rendering group logs.
   */
  public printGroup(): LogRender {
    const partialArgs = [
      this.fLeader(),
      this.data.cfg.baseStyle + this.data.definition.style,
    ];
    const render_args =
      typeof this.data.args[0] === 'string'
        ? [...partialArgs, this.data.args[0]]
        : partialArgs;

    return ['group', render_args];
  }

  /**
   * The method for rendering collapsed group logs.
   */
  public printGroupCollapsed(): LogRender {
    const partial_args = [
      this.fLeader(),
      this.data.cfg.baseStyle + this.data.definition.style,
    ];
    const render_args =
      typeof this.data.args[0] === 'string'
        ? [...partial_args, this.data.args[0]]
        : partial_args;

    return ['groupCollapsed', render_args];
  }

  /**
   * Renders the stacktrace.
   */
  public printTrace(): LogRender {
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
    const styleFlag = this.unstyled ? '' : '%c';
    const argCount = this.data.args.length;
    // const timestamp = this.data.showTimestamp ? `this.data.timestamp.utc`
    return ` ${styleFlag}${this.fEmoji()} ${this.fName()}(${argCount})`;
  }

  /**
   * Adds the emoji to the log leader if enabled.
   */
  public fEmoji(): string {
    return this.use_emoji ? ` ${this.data.definition.emoji}` : '';
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
    return `${this.fNamespace()}${this.fLabel()}${this.fTime()}${this.fCount()}${this.fAssert()}${this.fTest()}`;
  }

  /**
   * Formats the time on the log string based on any time modifiers
   * that have been applied to this log.
   */
  public fTime(): string {
    const timeNow = this.data.label.timeNow ?? this.data.timeNow;
    const timeEllapsed = this.data.label?.timeEllapsed;
    const labelTxt = `${timeNow ?? timeEllapsed ?? ''}`;

    return labelTxt !== '' ? ` (${this.use_emoji ? '⏱' : ''}${labelTxt}) ` : '';
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
   * Adds indicator text to the log render when
   * the assertion fails.
   */
  public fAssert(): string {
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
