import { Env } from '../env';
import { Printer } from '../printers';
import { Bundle, Configuration, Constraints } from '../_contracts';
import { BaseLog } from './BaseLog';

export class BundledLog<C extends Constraints> extends BaseLog<C> {
  private _bundle: Bundle;

  constructor(printer: typeof Printer, env: Env, bundle: Bundle, user_cfg?: Configuration) {
    super(printer, env, user_cfg);
    this._bundle = bundle;
  }

  public get bundle(): Bundle {
    return this._bundle;
  }
}
