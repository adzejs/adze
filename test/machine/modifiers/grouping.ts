// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import adze from '../../../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

test('group log renders correctly', (t) => {
  const { log, render } = adze().group.success('Opening a log group.');

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'info');
    t.is(parsed.level, 5);
    t.is(parsed.levelName, 'success');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'Opening a log group.');
  } else {
    t.fail();
  }
});

test('group collapsed renders correctly', (t) => {
  const { log, render } = adze().groupCollapsed.success('Opening a collapsed log group.');

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'info');
    t.is(parsed.level, 5);
    t.is(parsed.levelName, 'success');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'Opening a log group.');
  } else {
    t.fail();
  }
});

test('group ends correctly', (t) => {
  const { log, render } = adze().groupEnd.success();

  t.truthy(log);
  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'info');
    t.is(parsed.level, 5);
    t.is(parsed.levelName, 'success');
    t.is(parsed.args.length, 0);
  } else {
    t.fail();
  }
});
