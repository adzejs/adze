import { Shed } from '~/shed';
import { getSearchParams } from '~/util';

declare global {
  interface Window {
    $shed?: Shed;
    ADZE_ENV?: string;
  }
  namespace NodeJS {
    export interface Global {
      $shed?: Shed;
      ADZE_ENV?: string;
    }
  }
}

export const env: Window|NodeJS.Global = global ? global : window;
export const isBrowser = typeof window !== 'undefined';

export const envIsWindow = (env: Window|NodeJS.Global): env is Window => {
  return typeof window !== undefined;
};

let isChromeVar = false;
let isFirefoxVar = false;
let isSafariVar = false;

if (envIsWindow(env)) {
  isChromeVar = env?.navigator?.userAgent.indexOf("Chrome") > -1;
  isFirefoxVar = env?.navigator?.userAgent.indexOf("Firefox") > -1;
  isSafariVar = env?.navigator?.userAgent.indexOf("Safari") > -1 && !isChromeVar;
}

export const isChrome = isChromeVar;
export const isFirefox = isFirefoxVar;
export const isSafari = isSafariVar;