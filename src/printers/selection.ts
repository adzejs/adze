import { PrintFunction } from '../_contracts';
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

export const printLog = (): PrintFunction =>
  isBrowser() ? printLogBrowser : printLogNode;

export const printGroup = (): PrintFunction =>
  isBrowser() ? printGroupBrowser : printGroupNode;

export const printGroupCollapsed = (): PrintFunction =>
  isBrowser() ? printGroupCollapsedBrowser : printGroupCollapsedNode;

export const printTrace = (): PrintFunction =>
  isBrowser() ? printTraceBrowser : printTraceNode;
