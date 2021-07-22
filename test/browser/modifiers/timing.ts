// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import { adze, createShed, removeShed } from '../../../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

test.beforeEach(() => {
  createShed();
});

test.afterEach(() => {
  removeShed();
});

test('timer starts and ends and prints correctly', (t) => {
  adze().label('test').time.log('Starting the timer.');
  const { render } = adze().label('test').timeEnd.log('Stopping the timer.');
  if (render) {
    const [_, args] = render;
    if (typeof args[2] === 'string') {
      t.regex(args[2], /\[test\]\s\s\(\d+s\s\d+\.\d+ms\)/g);
    }
  } else {
    t.fail();
  }
});

test('timer starts and ends and prints correctly with emoji', (t) => {
  const log = adze({ useEmoji: true }).seal();
  log().label('test').time.log('Starting the timer.');
  const { render } = log().label('test').timeEnd.log('Stopping the timer.');
  if (render) {
    const [_, args] = render;
    if (typeof args[2] === 'string') {
      t.regex(args[2], /\[test\]\s\s\(⏱\d+s\s\d+\.\d+ms\)/g);
    }
  } else {
    t.fail();
  }
});
