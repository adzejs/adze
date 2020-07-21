import { isBrowser } from '../global';
import { time as timeBrowser, timeNow as timeNowBrowser, timeEnd as timeEndBrowser } from './browser';
import { time as timeNode, timeNow as timeNowNode, timeEnd as timeEndNode } from './node';

const time = isBrowser ? timeBrowser : timeNode;
const timeNow = isBrowser ? timeNowBrowser : timeNowNode;
const timeEnd = isBrowser ? timeEndBrowser : timeEndNode;

export { time, timeNow, timeEnd }
export { count, countReset } from './counting';
export { dir, dirxml, table } from './formatting';
export { group, groupCollapsed, groupEnd } from './grouping';
export { label, namespace, ns, trace } from './identifying';
export { modifier, prependModifier } from './modifier';
export { assert, test } from './testing';

