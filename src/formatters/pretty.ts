import Formatter from './formatter';
import { formatNamespace, initialCaps } from '../functions';
import { PartialLogData } from '../_types';

export default class PrettyFormatter extends Formatter {
  private useEmoji: boolean = false;

  constructor(data: PartialLogData, useEmoji: boolean) {
    super(data);
    this.useEmoji = useEmoji;
  }

  protected formatBrowser(args: unknown[]): unknown[] {
    const leader = this.formatLeader();
    const meta = this.formatMeta();
    return [leader, 'font-size: 14px;', this.data.style ?? '', meta, ...args];
  }

  /**
   * Format the log message for Node.js.
   */
  protected formatNode(args: unknown[]): unknown[] {
    return [''];
  }

  /**
   * Returns a formatted leader string.
   */
  private formatLeader(): string {
    const name = ' ' + initialCaps(this.data.level);
    return `%c${this.formatEmoji()}%c${name}`;
  }

  /**
   * Formats the emoji if it is enabled.
   */
  private formatEmoji(): string {
    return this.data.emoji ? `${this.data.emoji} ` : '';
    // return this.useEmoji && this.data.emoji ? `${this.data.emoji}` : '';
  }

  /**
   * Returns a formatted log meta data string. This is not data defined by the meta modifier.
   */
  private formatMeta(): string {
    const ts = this.data.timestamp;
    const ns = formatNamespace(this.data.namespace);
    const lbl = '';
    const time = '';
    const cnt = '';
    const asrt = '';
    const tst = '';
    return ts + ns + lbl + time + cnt + asrt + tst;
  }
}
