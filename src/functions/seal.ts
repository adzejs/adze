import { Configuration, Modifier, ModifierData } from '..';

type Constructor = new (...args: any[]) => {};

export function SealedLog<TBase extends Constructor>(
  Base: TBase,
  cfg: Configuration,
  mods: ModifierData,
  modifierQueue: Modifier[]
) {
  const { formatters, middleware = [], ...cfgWithoutFormatters } = cfg;
  return class Sealing extends Base {
    _cfg = {
      ...structuredClone(cfgWithoutFormatters),
      formatters: { ...formatters },
      middleware: [...middleware],
    };
    _modifierData = structuredClone(mods);
    modifierQueue = [...modifierQueue];
  };
}
