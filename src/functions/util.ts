import { Chalk } from 'chalk';
import { ChalkStyle } from '..';
import Log from '../log';

/**
 * Capitalizes the first character of the provided string.
 */
export function initialCaps(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Make a range of numbers from the start to the end.
 */
export function makeRange(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

/**
 * Add spaces to the end of a log title to make them all align.
 */
export function addPadding(str: string, withEmoji = false, emoji?: string): string {
  const len = withEmoji && emoji ? 9 + emoji.length : 9;
  const diff = len - str.length;
  let padded = str;
  for (let i = 0; i <= diff; i += 1) {
    padded += ' ';
  }
  return padded;
}

/**
 * Applies array of chalk styles to the provided string. An optional terminal color fidelity
 * value can be passed to enable different color fidelities for different terminals.
 *
 * Refer to https://github.com/chalk/chalk#chalklevel
 */
export function applyChalkStyles(
  str: string,
  styles: ChalkStyle[],
  fidelity: 0 | 1 | 2 | 3 = 1
): string {
  // Force chalk colors
  const chalk = new Chalk({ level: fidelity });
  return styles.reduce((acc, style) => {
    return chalk[style](acc);
  }, str);
}

/**
 * Render a log from its log data.
 */
export function render(log: Log): void {
  if (log.data) {
    console[log.data.method](...log.data.message);
  }
}
