import { LogTimestamp } from '~/_contracts';

/**
 * Capitalizes the first character of the provided string.
 */
export function initialCaps(str: string):string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Applies property mutations to the provided object.
 */
export function mutateProps<O>(obj: any, mutations: Array<[string, any]>):O {
  mutations.forEach(([prop, val]) => obj[prop] = val);
  return obj;
}

/**
 * Generate a unique ID for your log.
 */
export function timestamp():LogTimestamp {
  const unixMilli = Date.now();
  const date = new Date(unixMilli);
  const utc = date.toUTCString();
  return { unixMilli, utc };
}

/**
 * Gets a URLSearchParams object of the current URL.
 */
export function getSearchParams(): URLSearchParams {
  return new URLSearchParams(document.location.search.substring(1));
}

/**
 * Type Guard to check if the given value is a String.
 */
export function isString(val: any): val is string {
  return typeof val === 'string';
}

/**
 * Type Guard to check if the given value is an Array.
 */
export function isArray(val: any): val is [] {
  return Array.isArray(val);
}