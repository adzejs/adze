import { Log } from '../_contracts';

export function modifier(log: Log, func: Function):Log {
  log.modifierQueue = log.modifierQueue.concat([func]);
  return log;
}

export function prependModifier(log: Log, func: Function):Log {
  log.modifierQueue = [func].concat(log.modifierQueue);
  return log;
}