import { Label } from './Label';
import { Env } from '../env';
import { globalStoreExists } from '../util';

/**
 * Attempts to get a label by the given name from the GlobalStore if it exists.
 */
export function getLabel(name: string): Label | undefined {
  const globalStore = Env.global().$globalStore;
  if (globalStoreExists(globalStore)) {
    return globalStore.getLabel(name);
  }
}

/**
 * Attempts to add a label to the global store if it exists.
 */
export function addLabel(label: Label): Label {
  const globalStore = Env.global().$globalStore;
  if (globalStoreExists(globalStore)) {
    globalStore.addLabel(label);
  }
  return label;
}
