import { Log, LogLevelDefinition } from '../_contracts';
import { env } from '../global';
import { storeExists } from '../shed';

/**
 * Caches this log to the Shed if it exists.
 */
export function cache(this: Log, def: LogLevelDefinition, args: any[]):void {
  if (storeExists(env.$shed)) {
    env.$shed.addToCache(this, def, args);
  }
}

/**
 * Fires listeners for this log instance if a Shed exists.
 */
export function fireListeners(this: Log, def: LogLevelDefinition, args: any[]):void {
  if (storeExists(env.$shed)) {
    env.$shed.fireListeners(this, def, args);
  }
}