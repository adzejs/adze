import { Shed, Log, LogFunction, MethodKeys } from './_contracts';
import { isBrowser } from './global';
import { adze } from './adze';
import { createShed } from './shed';
import { initialize } from './initialize';

export { initialize, createShed, Shed, Log, LogFunction, MethodKeys };

// const Log = isBrowser ? LogBrowser : LogNode;
// export const ink: Ink = () => {
//   return new Log();
// };