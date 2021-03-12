import { Env } from 'src/Env';
import { Printer } from '../printers';
import { Bundle, Configuration } from 'src/_contracts';
import { BaseLog } from './BaseLog';
export declare class BundledLog extends BaseLog {
    private _bundle;
    constructor(printer: typeof Printer, env: Env, bundle: Bundle, user_cfg?: Configuration);
    get bundle(): Bundle;
}
