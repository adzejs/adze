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
interface BrowserType {
    isChrome: boolean;
    isFirefox: boolean;
    isSafari: boolean;
}
export declare const env: () => Window | NodeJS.Global;
export declare const isBrowser: () => boolean;
/**
 * TypeGuard to determine if the env value is the Window object.
 */
export declare const envIsWindow: (env: Window | NodeJS.Global) => env is Window;
export declare const browser: () => BrowserType;
export {};
