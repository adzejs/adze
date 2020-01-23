import { isBrowser } from '../global';
import {
  printLog as printLogB,
  printGroup as printGroupB,
  printGroupCollapsed as printGroupCollapsedB,
} from './browser';
import { printNode } from './node';
import {
  print,
  printGroupEnd,
  printTable,
  printDir,
  printDirxml,
} from './shared';

const printLog = isBrowser ? printLogB : printNode;
const printGroup = isBrowser ? printGroupB : printNode;
const printGroupCollapsed = isBrowser ? printGroupCollapsedB : printNode;

export {
  print,
  printLog,
  printGroup,
  printGroupCollapsed,
  printGroupEnd,
  printTable,
  printDir,
  printDirxml,
};