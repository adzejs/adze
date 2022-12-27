import { applyConfigDefaults } from '.';
import { ShedUserConfig, ShedConfig } from '../_contracts';

export function applyShedDefaults(userCfg?: ShedUserConfig): ShedConfig {
  return {
    cacheLimit: userCfg?.cacheLimit ?? 300,
    globalCfg: userCfg?.globalCfg ? applyConfigDefaults(userCfg.globalCfg) : null,
  };
}
