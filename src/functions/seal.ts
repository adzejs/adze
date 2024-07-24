import { Configuration, ModifierData } from '..';

type Constructor = new (...args: any[]) => {};

export function SealedLog<TBase extends Constructor>(
  Base: TBase,
  cfg: Configuration,
  mods: ModifierData
) {
  const { formatters, ...cfgWithoutFormatters } = cfg;
  return class Sealing extends Base {
    _cfg = { ...structuredClone(cfgWithoutFormatters), formatters: { ...formatters } };
    _modifierData = structuredClone(mods);
  };
}
