import { Label, LabelMap, LogListener, UserConfiguration } from './_types';
import Log from './log';
import Tools from './tools';

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

  /**
   * Cache of logs that have been terminated.
   */
  private _cache: Log[] = [];

  constructor(configuration: UserConfiguration = {}) {
    this.config = configuration;
  }

  /**
   * Returns the cache of logs that have been terminated.
   */
  public get cache(): Log[] {
    return this._cache;
  }

  /**
   * Adds a log to the log cache.
   */
  public addLogToCache(log: Log): void {
    this._cache.push(log);
  }

  /**
   * Clears the log cache.
   */
  public clearCache(): void {
    this._cache = [];
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

  /**
   * Tools for rerendering and filtering cached logs.
   */
  public get tools(): Tools {
    return new Tools(this);
  }
}
