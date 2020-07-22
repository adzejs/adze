import { isBrowser } from '../global';
import {
  printLog as printLogBrowser,
  printGroup as printGroupBrowser,
  printGroupCollapsed as printGroupCollapsedBrowser,
} from './browser';
import {
  printLog as printLogNode,
  printGroup as printGroupNode,
  printGroupCollapsed as printGroupCollapsedNode,
} from './node';
import {
  print,
  printGroupEnd,
  printTable,
  printDir,
  printDirxml,
  printTrace,
} from './shared';

const printLog = isBrowser ? printLogBrowser : printLogNode;
const printGroup = isBrowser ? printGroupBrowser : printGroupNode;
const printGroupCollapsed = isBrowser ? printGroupCollapsedBrowser : printGroupCollapsedNode;

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
};