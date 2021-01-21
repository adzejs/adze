export declare const env: Window | NodeJS.Global;
export declare const isBrowser: boolean;
/**
 * TypeGuard to determine if the env value is the Window object.
 */
export declare const envIsWindow: (env: Window | NodeJS.Global) => env is Window;
export declare const isChrome: boolean;
export declare const isFirefox: boolean;
export declare const isSafari: boolean;
