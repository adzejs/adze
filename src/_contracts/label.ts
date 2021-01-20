/**
 * An object representing a label on a log.
 */
export interface Label {
  name: string;
  timeStart?: [number, number];
  timeNow?: string;
  timeEllapsed?: string;
  count?: number;
  context: any;
}
