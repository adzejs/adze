import { Shed } from '../shed';
import { Env } from '../env';
import { ShedUserConfig } from '../_contracts';

/**
 * A typeguard that indicates that a global Shed store exists.
 */
export function shedExists(store: Shed | undefined): store is Shed {
  return store !== undefined;
}
/**
 * Creates a new Shed instance in your environment's global context.
 */
export function createShed(config?: ShedUserConfig): Shed {
  const env = new Env();
  env.global.$shed = new Shed(env, config);
  return env.global.$shed;
}

/**
 * Removes the Shed from the environment's global context.
 */
export function removeShed(): void {
  delete Env.global().$shed;
}
