import { Log } from '../_contracts';

export function modifier(context: Log, func: Function):Log {
  context.modifierQueue = context.modifierQueue.concat([func]);
  return context;
}

export function prependModifier(context: Log, func: Function):Log {
  context.modifierQueue = [func].concat(context.modifierQueue);
  return context;
}