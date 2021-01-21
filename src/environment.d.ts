/* eslint-disable @typescript-eslint/no-namespace */
import { Shed } from './shed';

declare global {
  interface Window {
    $shed?: Shed;
    ADZE_ENV?: 'test' | 'dev';
  }
  namespace NodeJS {
    export interface Global {
      $shed?: Shed;
      ADZE_ENV?: 'test' | 'dev';
    }
  }
}
