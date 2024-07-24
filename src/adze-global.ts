import { Label, LabelMap, LogListener, UserConfiguration } from './_types';

export default class AdzeGlobal {
  /**
   * Global Adze configuration overrides.
   */
  private config: UserConfiguration;

  /**
   * Incrementing ID counter for identifying logs.
   */
  private pidCounter = 1;

  /**
   * All log labels.
   */
  private labels: LabelMap = new Map();

  /**
   * All log listeners.
   */
  private _listeners: Map<number, LogListener> = new Map();

  constructor(configuration: UserConfiguration = {}) {
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

  /**
   * Get the next process ID.
   */
  public get pid(): number {
    const current = this.pidCounter;
    this.pidCounter++;
    return current;
  }

  /**
   * Adds a log listener that will be called after a log has been terminated.
   */
  public addListener(listener: LogListener): number {
    const id = this._listeners.size + 1;
    this._listeners.set(id, listener);
    return id;
  }

  /**
   * Removes a log listener by its ID.
   */
  public removeListener(id: number): void {
    this._listeners.delete(id);
  }

  /**
   * Returns an array of log listener callback functions.
   */
  public get listeners(): LogListener[] {
    return Array.from(this._listeners.values());
  }
}
