import { GlobalStore } from '../global-store';
import { GlobalStoreUserConfig } from '../_contracts';
import { globalContext } from './env';

/**
 * A typeguard that indicates that a GlobalStore exists.
 */
export function globalStoreExists(store: GlobalStore | undefined): store is GlobalStore {
  return store !== undefined;
}
/**
 * Creates a new GlobalStore instance in your environment's global context.
 */
export function createGlobalStore(config?: GlobalStoreUserConfig): GlobalStore {
  const store = new GlobalStore(config);
  globalContext().$globalStore = store;
  return store;
}

/**
 * Removes the GlobalStore from the environment's global context.
 */
export function removeGlobalStore(): void {
  delete globalContext().$globalStore;
}
