import defaultsDeep from 'lodash.defaultsdeep';
import {
  Shed, Log,
  Configuration, Defaults,
  LogLevelDefinition, ListenerLocations,
  Listeners, ListenerCallback, Adze
} from './_contracts';
import { defaults } from './_defaults';

import { env } from './global';

export function storeExists(store: Shed|undefined):store is Shed {
  return store !== undefined;
}

export function createShed(config: Configuration):void {
  // const cfg: Defaults = defaultsDeep(config, defaults);
  // env.$shed = {
  //   cfg,
  //   cache: [],
  //   labels: new Map(),
  //   id_counter: -1,
  //   listeners: initListenerLocations(cfg),

  //   assignId,
  //   addToCache,
  //   addListener,
  //   removeListener,
  //   fireListeners,
  // };
}

// function initListenerLocations(cfg: Defaults):Listeners {
//   const listeners: Listeners = new Map();
//   Object.values(cfg.log_levels).forEach((def) => {
//     listeners.set(def.level, new Map());
//   });
//   return listeners;
// }

// function addToCache(this: Shed, log: Log, def: LogLevelDefinition, args: any[]):void {
//   if (this.cache.length < this.cfg.log_cache_size) {
//     this.cache = this.cache.concat([[log, def, args]]);
//   }
// }

// /**
//  * Takes an instance of a log and returns a boolean indicating whether or
//  * not it should be hidden according to the configured global filter rules. 
//  * @param log Instance of a log.
//  */
// public globalFilter(log: LogBrowser|LogNode):boolean {
//   if (this.all_hidden && log.namespace === null && log.Label === null) {
//     return true;
//   }
//   return this.globalFilterNamespace(log) || this.globalFilterLabel(log);
// }

// /**
//  * Takes an instance of a log and returns a boolean indicating whether or
//  * not it should be hidden according to the configured global **label** filter rules. 
//  * @param log Instance of a log.
//  */
// private globalFilterNamespace(log: LogBrowser|LogNode):boolean {
//   if (log.namespace) {
//     if (this.included_namespaces.includes(log.namespace)) {
//       return false;
//     }
//     if (this.excluded_namespaces.includes(log.namespace) || this.namespaces_hidden === true || this.all_hidden === true) {
//       return true;
//     }
//   }
//   return false;
// }

// /**
//  * Takes an instance of a log and returns a boolean indicating whether or
//  * not it should be hidden according to the configured global **namespace** filter rules. 
//  * @param log Instance of a log.
//  */
// private globalFilterLabel(log: LogBrowser|LogNode):boolean {
//   if (log.Label) {
//     if (this.included_labels.includes(log.Label.name)) {
//       return false;
//     }
//     if (this.excluded_labels.includes(log.Label.name) || this.labels_hidden === true || this.all_hidden === true) {
//       return true;
//     }
//   }
//   return false;
// }

// function addListener(this: Shed, levels: number[], cb: ListenerCallback):ListenerLocations {
//   return levels.map((lvl: number) => {
//     const level_map = this.listeners.get(lvl);
//     const id = this.assignId();
//     level_map?.set(id, cb);
//     this.listeners.set(lvl, level_map ?? new Map());
//     return [lvl, id];
//   });
// }

// function removeListener(this: Shed, locations: ListenerLocations):void {
//   locations.forEach(([lvl_id, id]) => {
//     const level = this.listeners.get(lvl_id);
//     level?.delete(id);
//   });
// }

// function fireListeners(this: Shed, ctxt: Log, def: LogLevelDefinition, args: any[]):void {
//   this.listeners.get(def.level)?.forEach(listener => {
//     listener({ ...ctxt, ...def, args });
//   });
// }

// function assignId(this: Shed):number {
//   this.id_counter = this.id_counter + 1; // Written for clarity
//   return this.id_counter;
// }