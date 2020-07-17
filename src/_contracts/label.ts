/**
 * An object representing a label on a log.
 */
export interface Label {
  name: string;
  timeStart?: number;
  timeNow?: number;
  timeEllapsed?: number;
  count?: number;
}