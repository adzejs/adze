/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modifier, ModifierData } from '..';
import { Configuration } from '../configuration';
import Log from '../log';

/**
 * Required type for creating mixins in TypeScript.
 */
type Constructor = new (...args: any[]) => {
  /* noop */
};

/**
 * A mixin function for creating a sealed log instance that inherits properties from the parent.
 */
export function SealedLog<N extends string, Msg, TBase extends Constructor = Constructor>(
  Base: TBase,
  cfg: Configuration,
  mods: ModifierData,
  modifierQueue: Modifier[]
) {
  const { formatters, middleware = [], ...cfgWithoutFormatters } = cfg.exportValues();
  const sealing: unknown = class Sealing extends Base {
    _cfg = new Configuration({
      ...structuredClone(cfgWithoutFormatters),
      formatters: { ...formatters },
      middleware: [...middleware],
    });
    _modifierData = structuredClone(mods);
    modifierQueue = [...modifierQueue];
  };
  const sealed = sealing as Log<N, Msg>;
  return sealed;
}
