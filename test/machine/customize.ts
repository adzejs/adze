// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import adze from '../../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

test('renders a custom log', (t) => {
  const style =
    'padding-right: 26px; border-color: 1px solid red; color: white; border-color: blue;';
  const { log, render } = adze({
    customLevels: {
      custom: {
        level: 1,
        emoji: '🤪',
        method: 'log',
        terminal: ['bgCyanBright', 'cyan'],
        style,
      },
    },
  }).custom('custom', 'This is a custom log.');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 1);
    t.is(parsed.levelName, 'custom');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});
