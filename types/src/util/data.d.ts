import { LogTimestamp } from '../_contracts';
/**
 * Generate a unique ID for your log.
 */
export declare function timestamp(): LogTimestamp;
/**
 * Generates a stacktrace and returns it.
 */
export declare function stacktrace(): string | null;
/**
 * Gets a URLSearchParams object of the current URL.
 */
export declare function getSearchParams(): URLSearchParams | undefined;
