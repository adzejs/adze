import { Label } from '~/_contracts';
import { env } from '~/global';
import { shedExists } from '~/shed';

/**
 * Attempts to get a label by the given name from the shed if it exists.
 */
export function getLabel(name: string):Label|undefined {
  const shed = env.$shed;
  if (shedExists(shed)) {
    return shed.getLabel(name);
  }
}

/**
 * Attempts to add a label to the global store if it exists.
 */
export function addLabel(label: Label):Label {
  const shed = env.$shed;
  if (shedExists(shed)) {
    shed.addLabel(label);
  }
  return label;
}