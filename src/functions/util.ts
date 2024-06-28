import { Configuration, LogData } from '../_types';

export function setup(configuration: Configuration) {}

/**
 * Capitalizes the first character of the provided string.
 */
export function initialCaps(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
