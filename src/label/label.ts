import { Label } from '../_contracts';
import { env } from '../global';
import { shedExists } from '../shed';

export function getLabel(name: string):Label|undefined {
  const shed = env.$shed;
  if (shedExists(shed)) {
    return shed.getLabel(name);
  }
}

export function addLabel(label: Label):Label {
  const shed = env.$shed;
  if (shedExists(shed)) {
    shed.addLabel(label);
  }
  return label;
}