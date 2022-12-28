import { GlobalStore } from '../global-store';
import { Env } from '../env';
import { GlobalStoreUserConfig } from '../_contracts';

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
  const env = new Env();
  env.global.$globalStore = new GlobalStore(env, config);
  return env.global.$globalStore;
}

/**
 * Removes the GlobalStore from the environment's global context.
 */
export function removeGlobalStore(): void {
  delete Env.global().$globalStore;
}
