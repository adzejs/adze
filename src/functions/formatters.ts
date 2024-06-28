import { Label } from '../_types';

/**
 * Formats an array of namespace values into a display string
 */
export function formatNamespace(ns: string[]): string {
  if (ns.length > 0) {
    return ns.reduce((acc, name) => `${acc}#${name} `, '');
  }
  return '';
}

export function formatLabel(lbl?: Label): string {
  return lbl ? `[${lbl.name}] ` : '';
}

export function formatCount(count?: number): string {
  return count ? `(Count: ${count}) ` : '';
}
