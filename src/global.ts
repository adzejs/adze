/* eslint-disable @typescript-eslint/no-namespace */
import { Shed } from './shed';

declare global {
  interface Window {
    $shed?: Shed;
    ADZE_ENV?: 'test' | 'dev';
    ADZE_ENV_CONTEXT?: 'global' | 'window';
  }
  namespace NodeJS {
    export interface Global {
      $shed?: Shed;
      ADZE_ENV?: 'test' | 'dev';
      ADZE_ENV_CONTEXT?: 'global' | 'window';
    }
  }
}

interface BrowserType {
  isChrome: boolean;
  isFirefox: boolean;
  isSafari: boolean;
}

export const env: () => Window | NodeJS.Global = () =>
  isBrowser() ? window : global;

// Window is typeof 'function' and global is typeof 'object'
export const isBrowser = (): boolean => typeof window !== 'undefined';

/**
 * TypeGuard to determine if the env value is the Window object.
 */
export const envIsWindow = (env: Window | NodeJS.Global): env is Window => {
  return isBrowser();
};

export const browser = (): BrowserType => {
  const my_env = env();
  let isChrome = false;
  let isFirefox = false;
  let isSafari = false;

  if (envIsWindow(my_env)) {
    isChrome = my_env.navigator?.userAgent?.indexOf('Chrome') > -1;
    isFirefox = my_env.navigator?.userAgent?.indexOf('Firefox') > -1;
    isSafari = my_env.navigator?.userAgent?.indexOf('Safari') > -1 && !isChrome;
  }

  return { isChrome, isFirefox, isSafari };
};
