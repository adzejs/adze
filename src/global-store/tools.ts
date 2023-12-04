import { LevelFilter, Collection } from '../_contracts';
import {
  render,
  rerender,
  filterCollection,
  filterLabel,
  filterLevel,
  filterNamespace,
} from '../filters';
import { GlobalStore } from '.';
import { globalContext } from '../util/env';
/**
 * This class wraps utility functions for use in the global context. These will mostly be
 * useful for manual browser debugging purposes.
 */
export class Tools {
  /**
   * Reference to the GlobalStore instance.
   */
  private globalStore: GlobalStore;

  /**
   * Pass-through alias for the render function.
   */
  public render = render;

  /**
   * Pass-through alias for the rerender function.
   */
  public rerender = rerender;

  /**
   * Pass-through alias for the filterCollection function.
   */
  public filterCollection = filterCollection;

  /**
   * Pass-through alias for the filterLabel function.
   */
  public filterLabel = filterLabel;

  /**
   * Pass-through alias for the filterLevel function.
   */
  public filterLevel = filterLevel;

  /**
   * Pass-through alias for the filterNamespace function.
   */
  public filterNamespace = filterNamespace;

  constructor(globalStore: GlobalStore) {
    this.globalStore = globalStore;
  }

  /**
   * Shortcut method for rendering a level filtered collection from the GlobalStore cache.
   */
  public renderCache(filter: LevelFilter): Collection {
    const filtered = this.globalStore.getCollection(filter);
    if (globalContext().ADZE_ENV !== 'dev') {
      filtered.forEach(rerender);
    }
    return filtered;
  }

  /**
   * Shortcut method for rendering a level and namespace filtered collection from the GlobalStore cache.
   */
  public renderNamespace(filter: LevelFilter, ...ns: string[]): Collection {
    const filtered = this.filterNamespace(this.globalStore.getCollection(filter), ns);
    if (globalContext().ADZE_ENV !== 'dev') {
      filtered.forEach(rerender);
    }
    return filtered;
  }

  /**
   * Shortcut method for rendering a level and label filtered collection from the GlobalStore cache.
   */
  public renderLabel(filter: LevelFilter, label: string): Collection {
    const filtered = this.filterLabel(this.globalStore.getCollection(filter), label);
    if (globalContext().ADZE_ENV !== 'dev') {
      filtered.forEach(rerender);
    }
    return filtered;
  }
}
