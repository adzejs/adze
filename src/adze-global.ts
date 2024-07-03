import { Label, LabelMap, UserConfiguration } from './_types';

export default class AdzeGlobal {
  /**
   * Global Adze configuration overrides.
   */
  private config: UserConfiguration;

  /**
   * All log labels.
   */
  private labels: LabelMap = new Map();

  constructor(configuration: UserConfiguration) {
    this.config = configuration;
  }

  /**
   * Get the global Adze configuration.
   */
  public get configuration(): UserConfiguration {
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
