import Formatter from './formatter';
import {
  formatAssert,
  formatCount,
  formatIf,
  formatLabel,
  formatNamespace,
  initialCaps,
} from '../functions';
import { Configuration, LevelConfig, ModifierData } from '../_types';

export default class PrettyFormatter extends Formatter {
  constructor(cfg: Configuration, level: LevelConfig) {
    super(cfg, level);
  }

  /**
   * Format the log message for the browser.
   */
  protected formatBrowser(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    const leader = this.formatLeader();
    const meta = this.formatMeta(mods, timestamp);
    if (this.cfg.withEmoji) {
      return [leader, 'font-size: 12px;', this.level.style, meta, ...(args ?? [])];
    }
    return [leader, this.level.style, meta, ...(args ?? [])];
  }

  /**
   * Format the log message for Node.js.
   */
  protected formatNode(mods: ModifierData, timestamp: string, args: unknown[]): unknown[] {
    return [''];
  }

  /**
   * Returns a formatted leader string.
   */
  private formatLeader(): string {
    const name = ' ' + initialCaps(this.level.levelName);
    if (this.cfg.withEmoji) {
      return `%c${this.formatEmoji()}%c${name}`;
    }
    return `%c${name}`;
  }

  /**
   * Formats the emoji if it is enabled.
   */
  private formatEmoji(): string {
    return this.level.emoji ? `${this.level.emoji} ` : '';
  }

  /**
   * Returns a formatted log meta data string. This is not data defined by the meta modifier.
   */
  private formatMeta(mods: ModifierData, timestamp: string): string {
    const ts = this.cfg.showTimestamp ? timestamp + ' ' : '';
    const ns = formatNamespace(mods.namespace);
    const lbl = formatLabel(mods.label);
    const time = this.formatTime(mods);
    const cnt = formatCount(mods.label?.count);
    const asrt = formatAssert(mods.assertion, this.cfg.withEmoji);
    const _if = formatIf(mods.if, this.cfg.withEmoji);
    const tst = asrt !== '' ? asrt : _if !== '' ? _if : '';
    return ts + ns + lbl + time + cnt + tst;
  }

  /**
   * Formats the time elapsed string.
   */
  private formatTime(mods: ModifierData): string {
    const timeLeader = `${this.cfg.withEmoji ? '⏱ ' : 'Time elapsed: '}`;
    if (mods.timeNow) {
      return `(${timeLeader}${mods.timeNow})`;
    }
    return mods.label?.timeElapsed ? `(${timeLeader}${mods.label?.timeElapsed})` : '';
  }
}
