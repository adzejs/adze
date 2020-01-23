import { isBrowser } from './global';
import { adze } from './adze';
import { createStore } from './shed';

export { adze, createStore };

// const Log = isBrowser ? LogBrowser : LogNode;
// export const ink: Ink = () => {
//   return new Log();
// };