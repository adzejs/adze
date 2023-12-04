import { Label } from './label';
import { globalStoreExists } from '../util';
import { globalContext } from '../util/env';

/**
 * Attempts to get a label by the given name from the GlobalStore if it exists.
 */
export function getLabel(name: string): Label | undefined {
  const globalStore = globalContext().$globalStore;
  if (globalStoreExists(globalStore)) {
    return globalStore.getLabel(name);
  }
}

/**
 * Attempts to add a label to the global store if it exists.
 */
export function addLabel(label: Label): Label {
  const globalStore = globalContext().$globalStore;
  if (globalStoreExists(globalStore)) {
    globalStore.addLabel(label);
  }
  return label;
}
