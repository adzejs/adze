import { Shed } from './shed';
declare global {
    interface Window {
        $shed?: Shed;
        ADZE_ENV?: 'test' | 'dev';
        ADZE_ENV_CONTEXT?: 'global' | 'window';
    }
    namespace NodeJS {
        interface Global {
            $shed?: Shed;
            ADZE_ENV?: 'test' | 'dev';
            ADZE_ENV_CONTEXT?: 'global' | 'window';
        }
    }
}
/**
 * Class with various properties describing the current environment.
 */
export declare class Env {
    readonly global: Window | NodeJS.Global;
    readonly isBrowser: boolean;
    _isChrome: boolean;
    _isFirefox: boolean;
    _isSafari: boolean;
    constructor();
    /**
     * Getter for identifying if the current environment is the Chrome browser.
     */
    get isChrome(): boolean;
    /**
     * Getter for identifying if the current environment is the Firefox browser.
     */
    get isFirefox(): boolean;
    /**
     * Getter for identifying if the current environment is the Safari browser.
     */
    get isSafari(): boolean;
    /**
     * Static method that returns the environment's global context.
     */
    static global(): Window | NodeJS.Global;
    /**
     * Static method that validates the current environment is `Window`.
     */
    static isBrowser(): boolean;
    /**
     * TypeGuard to determine if the env value is the Window object.
     */
    static envIsWindow: (env: Window | NodeJS.Global) => env is Window;
    /**
     * Static method that validates the current environment is Chrome.
     */
    static isChrome(): boolean;
    /**
     * Static method that validates the current environment is Firefox.
     */
    static isFirefox(): boolean;
    /**
     * Static method that validates the current environment is Safari.
     */
    static isSafari(): boolean;
}
