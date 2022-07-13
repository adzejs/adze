import { Env } from '../env';

/**
 * Generates a stacktrace and returns it.
 */
export function stacktrace(): string | null {
  return Error().stack ?? null;
}

/**
 * Gets a URLSearchParams object of the current URL.
 */
export function getSearchParams(): URLSearchParams | undefined {
  const env = new Env();
  const ctxt = env.global;
  if (Env.envIsWindow(ctxt)) {
    return new URLSearchParams(ctxt.document.location.search.substring(1));
  }
}
