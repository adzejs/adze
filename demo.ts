import { JSDOM } from 'jsdom';

import * as AdzeLib from './src';
import runDemo from './demo_funcs.js';

const dom = new JSDOM(`<!DOCTYPE html><div id="test">Hello world</div>`);
const el = dom.window.document.querySelector('#test');

// const { adze, createShed, fireListeners, filterLabel, rerender } = AdzeLib;

// createShed({
//   cache_location: 'localStorage',
//   global_cfg: {
//     use_emoji: true,
//   },
//   filters: {
//     hideAll: false,
//     label: {
//       include: [],
//     },
//     level: {
//       include: '1-8',
//     },
//     namespace: {
//       exclude: [],
//     },
//   },
// });

// adze().silent().error('This log is silent but deadly.');
// adze().meta('another', 'value').error('This is a test');
// adze().label('foo').warn('This is a test');
// adze().ns('baz').label('wow').info('This is a test');
// adze().label('bar').success('This is a test');
// adze().fail('This is a test');
// adze().ns('bar').label('wow').log('This is a test');
// adze().ns('bat').log('This is a test');
// adze().ns('baz').debug('This is a test');
// adze().verbose('This is a test');

// if (global?.$shed) {
//   global.$shed.addListener([1, 2, 3, 4, 5, 6, 7, 8], (log) =>
//     console.log('ERROR FIRED', log)
//   );

//   const bundle = filterLabel(global.$shed.getCollection('*'), 'foo');
//   bundle.forEach(rerender);
//   bundle.forEach(fireListeners);
// }

runDemo(AdzeLib, el);
