/**
 * Map of existing labels.
 */
export type LabelMap = Map<string, Label>;

/**
 * Data object representing a label.
 */
export interface Label {
  name: string;
  count?: number;
  context?: Record<string, unknown>;
  timeStart?: [number, number];
  timeElapsed?: string;
}
