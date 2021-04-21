import { FinalLogData } from '../_contracts';
import { Env } from '../env';
import { isString } from '../util';

export class SharedPrinter {
  protected env: Env = new Env();

  protected data: FinalLogData;

  constructor(data: FinalLogData) {
    this.data = data;
  }

  get use_emoji(): boolean {
    return (
      this.env.global.$shed?.overrides?.use_emoji === true ||
      this.data.cfg.use_emoji === true
    );
  }

  // ------ Shared Formatters ------- //

  /**
   * Formats the namespace on the log string based on the namespace
   * modifier applied to this log.
   */
  protected fNamespace(): string {
    const ns = this.data.namespace;
    if (ns) {
      if (isString(ns)) {
        return `#${ns} `;
      } else {
        return ns.reduce((acc, name) => `${acc}#${name} `, '');
      }
    }
    return '';
  }
}
