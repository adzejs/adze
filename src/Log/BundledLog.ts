import { Env } from 'src/Env';
import { Printer } from '../printers';
import { Bundle, Configuration } from 'src/_contracts';
import { Log } from './Log';

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
