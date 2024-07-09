import { Configuration, UserConfiguration } from '../_types';
import AdzeGlobal from '../adze-global';

declare global {
  var $adzeGlobal: AdzeGlobal;
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
export function setup(cfg?: UserConfiguration): void {
  const ctxt = globalContext();
  if (isSetup(ctxt)) {
    console.error('Adze has already been setup. Please only call setup once.');
    return;
  }
  ctxt.$adzeGlobal = new AdzeGlobal(cfg);
}

/**
 * Removes the global log store from the environment.
 */
export function teardown(): void {
  if (isSetup(globalContext())) {
    delete globalContext().$adzeGlobal;
  }
}

/**
 * Adze has been setup.
 */
export function isSetup(ctxt: Window | typeof globalThis): boolean {
  return ctxt.$adzeGlobal instanceof AdzeGlobal;
}

/**
 * Gets the global store instance.
 */
export function getGlobalStore(ctxt: Window | typeof globalThis): AdzeGlobal | undefined {
  if (isSetup(ctxt)) {
    return ctxt.$adzeGlobal;
  }
  console.error(
    'Adze has not been setup. Please set up a global store prior to using labels. Refer to http://adzejs.com/docs/setup for more information.'
  );
}

/**
 * Returns the environment's global context.
 */
export function globalContext(): Window | typeof globalThis {
  return isBrowser() ? window : global;
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
 * Static method that validates the current environment is Chrome.
 */
export function isChrome(): boolean {
  const _glbl = globalContext();
  if (envIsWindow(_glbl)) {
    return _glbl.navigator?.userAgent?.indexOf('Chrome') > -1;
  }
  return false;
}

/**
 * Static method that validates the current environment is Firefox.
 */
export function isFirefox(): boolean {
  const _glbl = globalContext();
  if (envIsWindow(_glbl)) {
    return _glbl.navigator?.userAgent?.indexOf('Firefox') > -1;
  }
  return false;
}

/**
 * Static method that validates the current environment is Safari.
 */
export function isSafari(): boolean {
  const _glbl = globalContext();
  if (envIsWindow(_glbl)) {
    return _glbl.navigator?.userAgent?.indexOf('Safari') > -1 && !isChrome();
  }
  return false;
}
