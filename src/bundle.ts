import { Adze, Configuration, Bundle, Log, TerminatingMethods, TerminatingMethodKeys } from './_contracts';
import { all } from './filters';

export function bundle(log: Log):Bundle {
  const bundle = [] as Log[];
  return () => {
    let bundled_log: Log = { ...log };
    bundled_log.all = curryBundle(bundled_log, bundle, all);
    bundle.push(bundled_log);
    return bundled_log;
  };
};

function curryBundle(log: Log, bundle: Log[], fn: Function, ...args: any[]):() => void {
  return () => {
    fn(log, bundle, ...args);
  };
}
