import { UserConfiguration } from '../_types';
import AdzeGlobal from '../adze-global';

declare global {
  var $adzeGlobal: AdzeGlobal | undefined;
  var ADZE_ENV: 'test' | 'dev';
  var ADZE_ENV_CONTEXT: 'global' | 'window';
  interface Window {
    $adzeGlobal?: AdzeGlobal;
    ADZE_ENV?: 'test' | 'dev';
    ADZE_ENV_CONTEXT?: 'global' | 'window';
  }
}

/**
 * Initialize the global log store for Adze. This is used for creating global configuration
 * overrides, storing labels, and optionally caching logs.
 */
export function setup<Meta extends Record<string, any> = Record<string, any>>(
  cfg?: UserConfiguration<Meta>
): AdzeGlobal {
  const store = globalThis.$adzeGlobal;
  if (isGlobalInitialized(store)) {
    return store;
  }
  const globalCtxt = new AdzeGlobal<Meta>(cfg);
  globalThis.$adzeGlobal = globalCtxt;
  return globalCtxt;
}

/**
 * Removes the global log store from the environment.
 */
export function teardown(): void {
  if (isGlobalInitialized(globalThis.$adzeGlobal)) {
    delete globalThis.$adzeGlobal;
  }
}

/**
 * Adze global store has been instantiated.
 */
export function isGlobalInitialized(global: unknown): global is AdzeGlobal {
  return global instanceof AdzeGlobal;
}

/**
 * Validates that the current environment is `Window`.
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * TypeGuard to determine if the env value is the Window object.
 */
export function envIsWindow(_: Window | typeof globalThis): _ is Window {
  return isBrowser();
}

/**
 * Validates the current environment is Chrome.
 */
export function isChrome(): boolean {
  const _glbl = globalThis;
  if (envIsWindow(_glbl)) {
    return _glbl.navigator?.userAgent?.indexOf('Chrome') > -1;
  }
  return false;
}

/**
 * Validates the current environment is Firefox.
 */
export function isFirefox(): boolean {
  const _glbl = globalThis;
  if (envIsWindow(_glbl)) {
    return _glbl.navigator?.userAgent?.indexOf('Firefox') > -1;
  }
  return false;
}

/**
 * Validates the current environment is Safari.
 */
export function isSafari(): boolean {
  const _glbl = globalThis;
  if (envIsWindow(_glbl)) {
    return _glbl.navigator?.userAgent?.indexOf('Safari') > -1 && !isChrome();
  }
  return false;
}
