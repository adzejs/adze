import { printLog as printLogBrowser, printGroup as printGroupBrowser, printGroupCollapsed as printGroupCollapsedBrowser, printTrace as printTraceBrowser } from './browser';
import { print, printGroupEnd, printTable, printDir, printDirxml, toConsole } from './shared';
declare const printLog: typeof printLogBrowser;
declare const printGroup: typeof printGroupBrowser;
declare const printGroupCollapsed: typeof printGroupCollapsedBrowser;
declare const printTrace: typeof printTraceBrowser;
export { print, printLog, printGroup, printGroupCollapsed, printGroupEnd, printTable, printDir, printDirxml, printTrace, toConsole, };
