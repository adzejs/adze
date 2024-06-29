import Formatter from './formatter';
import {
  formatAssert,
  formatCount,
  formatIf,
  formatLabel,
  formatNamespace,
  formatTime,
  initialCaps,
} from '../functions';
import { Configuration, PartialLogData } from '../_types';

export default class PrettyFormatter extends Formatter {
  constructor(cfg: Configuration, data: PartialLogData) {
    super(cfg, data);
  }

  protected formatBrowser(args: unknown[]): unknown[] {
    const leader = this.formatLeader();
    const meta = this.formatMeta();
    if (this.cfg.withEmoji) {
      return [leader, 'font-size: 12px;', this.data.style.style ?? '', meta, ...args];
    }
    return [leader, this.data.style.style ?? '', meta, ...args];
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
    if (this.cfg.withEmoji) {
      return `%c${this.formatEmoji()}%c${name}`;
    }
    return `%c${name}`;
  }

  /**
   * Formats the emoji if it is enabled.
   */
  private formatEmoji(): string {
    return this.data.style.emoji ? `${this.data.style.emoji} ` : '';
  }

  /**
   * Returns a formatted log meta data string. This is not data defined by the meta modifier.
   */
  private formatMeta(): string {
    const ts = this.data.timestamp + ' ';
    const ns = formatNamespace(this.data.namespace);
    const lbl = formatLabel(this.data.label);
    const time = this.formatTime();
    const cnt = formatCount(this.data.label?.count);
    const asrt = formatAssert(this.data.tests.assertion, this.cfg.withEmoji);
    const _if = formatIf(this.data.tests.if, this.cfg.withEmoji);
    const tst = asrt !== '' ? asrt : _if !== '' ? _if : '';
    return ts + ns + lbl + time + cnt + tst;
  }

  private formatTime(): string {
    if (this.data.timeNow) {
      return `(⏱: ${this.data.timeNow})`;
    }
    return this.data.label?.timeElapsed ? `(⏱: ${this.data.label?.timeElapsed})` : '';
  }
}
