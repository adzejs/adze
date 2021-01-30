import { isBrowser } from '../global';
import {
  printLog as printLogBrowser,
  printGroup as printGroupBrowser,
  printGroupCollapsed as printGroupCollapsedBrowser,
  printTrace as printTraceBrowser,
} from './browser';
import {
  printLog as printLogNode,
  printGroup as printGroupNode,
  printGroupCollapsed as printGroupCollapsedNode,
  printTrace as printTraceNode,
} from './node';
import {
  print,
  printGroupEnd,
  printTable,
  printDir,
  printDirxml,
  toConsole,
} from './shared';

const printLog = isBrowser ? printLogBrowser : printLogNode;
const printGroup = isBrowser ? printGroupBrowser : printGroupNode;
const printGroupCollapsed = isBrowser
  ? printGroupCollapsedBrowser
  : printGroupCollapsedNode;
const printTrace = isBrowser ? printTraceBrowser : printTraceNode;

export {
  print,
  printLog,
  printGroup,
  printGroupCollapsed,
  printGroupEnd,
  printTable,
  printDir,
  printDirxml,
  printTrace,
  toConsole,
};
