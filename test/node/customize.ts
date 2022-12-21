import test from 'ava';
import adze, { ChalkStyle } from '../../src';
import { applyChalkStyles } from '../../src/util';

global.ADZE_ENV = 'dev';

test('renders a custom log', (t) => {
  const style =
    'padding-right: 26px; border-color: 1px solid red; color: white; border-color: blue;';
  const terminal: ChalkStyle[] = ['bgCyanBright', 'cyan'];
  const { log, render } = adze({
    customLevels: {
      custom: {
        level: 1,
        emoji: '🤪',
        method: 'log',
        terminal,
        style,
      },
    },
  }).custom('custom', 'This is a custom log.');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args[0], applyChalkStyles(' Custom(1)     ', terminal));
    t.is(args[1], 'This is a custom log.');
  } else {
    t.fail();
  }
});

test('renders a custom log with emoji', (t) => {
  const style =
    'padding-right: 26px; border-color: 1px solid red; color: white; border-color: blue;';
  const terminal: ChalkStyle[] = ['bgCyanBright', 'cyan'];
  const { log, render } = adze({
    useEmoji: true,
    customLevels: {
      custom: {
        level: 1,
        emoji: '🤪',
        method: 'log',
        terminal,
        style,
      },
    },
  }).custom('custom', 'This is a custom log.');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args[0], applyChalkStyles(' 🤪 Custom(1)     ', terminal));
    t.is(args[1], 'This is a custom log.');
  } else {
    t.fail();
  }
});

// Unstyled logs for stdout
test('renders an unstyled log', (t) => {
  const unstyled = adze({ unstyled: true }).label('unstyled').log('This log should have no style.');

  t.truthy(unstyled.log);

  if (unstyled.render) {
    const [method, args] = unstyled.render;
    t.is(method, 'log');
    t.is(args[0], ' Log(1)        ');
    t.is(args[1], '[unstyled] ');
    t.is(args[2], 'This log should have no style.');
  }
});

test('renders a log that does not render the number of args in the leader', (t) => {
  const { log, render } = adze({ renderArgCount: false }).log('testing');
  const terminal: ChalkStyle[] = ['bgGray', 'white'];
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args[0], applyChalkStyles(' Log           ', terminal));
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('does not render leader when it is disabled in configuration', (t) => {
  const { render } = adze({ renderLeader: false }).info('testing');
  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args[0], 'testing');
  } else {
    t.fail();
  }
});
