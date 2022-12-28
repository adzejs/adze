import { applyConfigDefaults } from '.';
import { GlobalStoreUserConfig, GlobalStoreConfig } from '../_contracts';

export function applyGlobalStoreDefaults(userCfg?: GlobalStoreUserConfig): GlobalStoreConfig {
  return {
    cacheLimit: userCfg?.cacheLimit ?? 300,
    globalCfg: userCfg?.globalCfg ? applyConfigDefaults(userCfg.globalCfg) : null,
  };
}
