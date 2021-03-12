import { FinalLogData } from '../_contracts';
import { Env } from '../Env';
export declare class SharedPrinter {
    protected env: Env;
    protected data: FinalLogData;
    constructor(data: FinalLogData);
    get use_emoji(): boolean;
    /**
     * Formats the namespace on the log string based on the namespace
     * modifier applied to this log.
     */
    protected fNamespace(): string;
}
