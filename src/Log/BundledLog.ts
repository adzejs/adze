import { Env } from 'src/Env';
import { Printer } from '../printers';
import { Bundle, Configuration, TerminatedLog } from 'src/_contracts';
import { Log } from './Log';

// interface TerminatedBundledLog extends TerminatedLog<BundledLog> {
//   log: BundledLog;
// }

// interface BundledLogTerminators {
//   log: (...args: unknown[]) => TerminatedBundledLog;
// }
export class BundledLog extends Log {
  private _bundle: Bundle;

  constructor(
    printer: typeof Printer,
    env: Env,
    bundle: Bundle,
    user_cfg?: Configuration
  ) {
    super(printer, env, user_cfg);
    this._bundle = bundle;
  }

  public get bundle(): Bundle {
    return this._bundle;
  }
}
