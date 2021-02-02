import { Log } from '../_contracts';
import { modifier } from './modifier';

/**
 * Instructs the log terminator to add the key/value pairs from the
 * thread context to the console output.
 */
export function dump(ctxt: Log): Log {
  return modifier(ctxt, () => {
    ctxt.dumpContext = true;
  });
}

export function meta<T>(this: Log, key: string, val: T): Log {
  return modifier(this, () => {
    this.metaData[key] = val;
  });
}
