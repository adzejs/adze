import { BundledLog } from '../Log';

/**
 * Generates a new bundled log.
 */
export type Bundler = () => BundledLog;

/**
 * Array of bundled logs.
 */
export type Bundle = BundledLog[];
