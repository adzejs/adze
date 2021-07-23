// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import { adze, defaults } from '../../../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

test('group log renders correctly', (t) => {
  const { log, render } = adze().group.success('Opening a log group.');
  if (render) {
    const [method, args] = render;
    t.is(method, 'group');
    t.is(log.data.level, 5);
    t.is(args[0], ' %c Success(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.success.style}`);
    t.is(args[2], 'Opening a log group.');
  } else {
    t.fail();
  }
});

test('group collapsed renders correctly', (t) => {
  const { log, render } = adze().groupCollapsed.success(
    'Opening a collapsed log group.'
  );
  if (render) {
    const [method, args] = render;
    t.is(method, 'groupCollapsed');
    t.is(log.data.level, 5);
    t.is(args[0], ' %c Success(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.success.style}`);
    t.is(args[2], 'Opening a collapsed log group.');
  } else {
    t.fail();
  }
});
