import {
  Log, Configuration,
  TerminatingMethodKeys,
} from '../_contracts';

export function all(ctxt: Log, bundle: Log[] = []) {
  bundle.forEach(log => {
    const method_key = log.terminatingMethod ?? '';
    const args = log.args ?? [];
    if (isStandard(ctxt.cfg, method_key)) {
      log[method_key](...args);
    } else {
      log.custom(method_key, ...args);
    }
  });
}

function isStandard(cfg: Configuration, key: TerminatingMethodKeys | string): key is TerminatingMethodKeys {
  return Object.keys(cfg?.log_levels ?? {}).includes(key);
}