import { Fulcrum } from './_contracts';

// Declare the Global scope of the environment for TypeScript
declare global {
  interface Window {
    $shed?: Fulcrum;
    CSAW_ENV?: string;
  }
  namespace NodeJS {
    export interface Global {
      $shed?: Fulcrum;
      CSAW_ENV?: string;
    }
  }
}

export const env: Window|NodeJS.Global = global ? global : window;
export const isBrowser = typeof window !== 'undefined';
export const isChrome = navigator.userAgent.indexOf("Chrome") > -1;
export const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
export const isSafari = navigator.userAgent.indexOf("Safari") > -1 && !isChrome;