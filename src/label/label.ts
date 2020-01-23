import { Label } from '../_contracts';
import { env } from '../global';
import { storeExists } from '../shed';

export function getLabel(name: string):Label|undefined {
  if (storeExists(env.$shed)) {
    return env.$shed.labels.get(name);
  }
}

export function addLabel(label: Label):Label {
  if (storeExists(env.$shed) && !hasLabel(label.name)) {
    env.$shed.labels.set(label.name, label);
  }
  return label;
}

export function hasLabel(name: string):boolean|undefined {
  return env.$shed?.labels.has(name);
}