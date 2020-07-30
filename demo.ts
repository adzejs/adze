import { JSDOM } from 'jsdom';

import * as AdzeLib from './src';
import runDemo from './demo_funcs.js';

const dom = new JSDOM(`<!DOCTYPE html><div id="test">Hello world</div>`);
const el = dom.window.document.querySelector('#test');

runDemo(AdzeLib, el);