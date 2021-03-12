import { Label } from './Label';
/**
 * Attempts to get a label by the given name from the shed if it exists.
 */
export declare function getLabel(name: string): Label | undefined;
/**
 * Attempts to add a label to the global store if it exists.
 */
export declare function addLabel(label: Label): Label;
