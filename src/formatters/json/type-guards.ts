import { JsonLogRequiredFields } from './types';

/**
 * Validates that the log meta data contains the required fields for a JSON log.
 */
export function hasRequiredFields(meta: Record<string, any>): meta is JsonLogRequiredFields {
  return typeof meta.name === 'string' && typeof meta.hostname === 'string';
}
