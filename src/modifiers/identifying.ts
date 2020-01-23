import { Log } from '../_contracts';
import { getLabel, addLabel } from '../label';
import { prependModifier, modifier } from './modifier';

export function label(this: Log, name: string):Log {
  return prependModifier(this, () => {
    this.labelVal = addLabel(getLabel(name) ?? { name });
  });
}

export function namespace(this: Log, ns: string):Log {
  return modifier(this, () => {
    this.namespaceVal = ns;
  });
}

export function ns(this: Log, ns: string):Log {
  return this.namespace(ns);
}

export function trace(this: Log):Log {
  return modifier(this, () => {
    this.method = 'trace';
  })
}