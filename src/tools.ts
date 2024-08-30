import { LevelSelector } from '.';
import AdzeGlobal from './adze-global';
import { filterByLabel, filterByLevel, filterByNamespace, render } from './functions';

export default class Tools {
  /**
   * Reference to the global store.
   */
  private globalStore: AdzeGlobal;

  constructor(globalStore: AdzeGlobal) {
    this.globalStore = globalStore;
  }

  /**
   * Clears the console.
   */
  public clear(): void {
    console.clear();
  }

  /**
   * Rerenders all logs that match the label filter.
   */
  public filterByLabel(label: string): void {
    const logs = filterByLabel(label, this.globalStore.cache);
    logs.forEach((log) => render(log));
  }

  /**
   * Rerenders all logs that match the namespace filter.
   */
  public filterByNamespace(...namespace: string[]): void {
    const logs = filterByNamespace(namespace, this.globalStore.cache);
    logs.forEach((log) => render(log));
  }

  /**
   * Rerenders all logs that match the level selector.
   */
  public filterByLevel(level: LevelSelector): void {
    const logs = filterByLevel(level, this.globalStore.cache);
    logs.forEach((log) => render(log));
  }

  /**
   * Rerenders all logs that have been cached.
   */
  public renderAll(): void {
    this.globalStore.cache.forEach((log) => render(log));
  }
}
