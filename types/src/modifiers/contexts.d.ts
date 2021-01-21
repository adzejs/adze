import { Log } from '../_contracts';
/**
 * Instructs the log terminator to add the key/value pairs from the
 * thread context to the console output.
 */
export declare function dump(this: Log): Log;
export declare function meta<T>(this: Log, key: string, val: T): Log;
