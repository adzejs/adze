// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import { adze } from '../../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

test('label prints correctly', (t) => {
  const { log, render } = adze().label('test').log('This log has a label.');
  if (render) {
    const [_, args] = render;
    t.is(args[2], '[test] ');
  } else {
    t.fail();
  }
});

test('log with single namespace prints correctly', (t) => {
  const { log, render } = adze().ns('test').log('This log has a label.');
  if (render) {
    const [_, args] = render;
    t.is(args[2], '#test ');
  } else {
    t.fail();
  }
});
