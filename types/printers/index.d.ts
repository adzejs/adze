import { printLog as printLogBrowser, printGroup as printGroupBrowser, printGroupCollapsed as printGroupCollapsedBrowser } from './browser';
import { print, printGroupEnd, printTable, printDir, printDirxml, printTrace } from './shared';
declare const printLog: typeof printLogBrowser;
declare const printGroup: typeof printGroupBrowser;
declare const printGroupCollapsed: typeof printGroupCollapsedBrowser;
export { print, printLog, printGroup, printGroupCollapsed, printGroupEnd, printTable, printDir, printDirxml, printTrace, };
