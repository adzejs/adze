import { Configuration, Label, LabelMap, UserConfiguration } from './_types';
import { defaultConfiguration } from './constants';

export default class AdzeGlobal {
  /**
   * Global Adze configuration overrides.
   */
  private config: Configuration;

  /**
   * All log labels.
   */
  private labels: LabelMap = new Map();

  constructor(configuration: UserConfiguration) {
    this.config = { ...defaultConfiguration, ...configuration };
  }

  /**
   * Get the global Adze configuration.
   */
  public get configuration(): Configuration {
    return this.config;
  }

  /**
   * Get a label by name.
   */
  public getLabel(name: string): Label | undefined {
    return this.labels.get(name);
  }

  /**
   * Sets a new label or overwrites an existing one.
   */
  public setLabel(name: string, label: Label): void {
    this.labels.set(name, label);
  }
}
