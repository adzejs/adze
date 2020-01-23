import { Log, LogLevelDefinition } from '../../_contracts';
import { formatLeader, formatMeta } from '../';

export function printNode(this: Log, def: LogLevelDefinition, ...args: any[]):void {
  console[def.method](`${formatLeader(def, args)}${formatMeta(this)}`, ...args);
}