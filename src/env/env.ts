/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-namespace */
import { GlobalStore } from '../global-store/global-store';

declare global {
  var $globalStore: GlobalStore;
  var ADZE_ENV: 'test' | 'dev';
  var ADZE_ENV_CONTEXT: 'global' | 'window';
  interface Window {
    $globalStore?: GlobalStore;
    ADZE_ENV?: 'test' | 'dev';
    ADZE_ENV_CONTEXT?: 'global' | 'window';
  }
}

/**
 * Class with various properties describing the current environment.
 */
export class Env {
  public readonly global: Window | typeof globalThis;

  public readonly isBrowser: boolean = Env.isBrowser();

  public _isChrome = false;

  public _isFirefox = false;

  public _isSafari = false;

  constructor() {
    this.global = Env.global();

    if (Env.envIsWindow(this.global)) {
      this._isChrome = Env.isChrome();
      this._isFirefox = Env.isFirefox();
      this._isSafari = Env.isSafari();
    }
  }

  /**
   * Getter for identifying if the current environment is the Chrome browser.
   */
  public get isChrome(): boolean {
    return this._isChrome;
  }

  /**
   * Getter for identifying if the current environment is the Firefox browser.
   */
  public get isFirefox(): boolean {
    return this._isFirefox;
  }

  /**
   * Getter for identifying if the current environment is the Safari browser.
   */
  public get isSafari(): boolean {
    return this._isSafari;
  }

  /**
   * Static method that returns the environment's global context.
   */
  public static global(): Window | typeof globalThis {
    return Env.isBrowser() ? window : global;
  }

  /**
   * Static method that validates the current environment is `Window`.
   */
  public static isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  /**
   * TypeGuard to determine if the env value is the Window object.
   */
  public static envIsWindow = (env: Window | typeof globalThis): env is Window => {
    return Env.isBrowser();
  };

  /**
   * Static method that validates the current environment is Chrome.
   */
  public static isChrome(): boolean {
    const _glbl = Env.global();
    if (Env.envIsWindow(_glbl)) {
      return _glbl.navigator?.userAgent?.indexOf('Chrome') > -1;
    }
    return false;
  }

  /**
   * Static method that validates the current environment is Firefox.
   */
  public static isFirefox(): boolean {
    const _glbl = Env.global();
    if (Env.envIsWindow(_glbl)) {
      return _glbl.navigator?.userAgent?.indexOf('Firefox') > -1;
    }
    return false;
  }

  /**
   * Static method that validates the current environment is Safari.
   */
  public static isSafari(): boolean {
    const _glbl = Env.global();
    if (Env.envIsWindow(_glbl)) {
      return _glbl.navigator?.userAgent?.indexOf('Safari') > -1 && !Env.isChrome();
    }
    return false;
  }
}
