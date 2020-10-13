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