import { FinalLog, LogData, LabelData } from '../_contracts';

/**
 * Creates a slimmed down object comprised of data from
 * the final log.
 */
export function makeLogData(log: FinalLog): LogData {
  const {
    cfg,
    level,
    timestamp,
    stacktrace,
    definition,
    args,
    namespaceVal: namespace = null,
    labelVal = null,
    timeNowVal: timeNow = null,
    metaData: meta = {},
  } = log;

  const label: LabelData = {
    name: labelVal?.name ?? null,
    timeNow: labelVal?.timeNow ?? null,
    timeEllapsed: labelVal?.timeEllapsed ?? null,
    count: labelVal?.count ?? null,
  };

  const context = labelVal?.context ?? null;

  return {
    cfg,
    level,
    timestamp,
    stacktrace,
    definition,
    args,
    namespace,
    label,
    timeNow,
    meta,
    context,
  };
}
