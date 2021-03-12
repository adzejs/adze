import test from 'ava';
import { adze } from '../../src';

global.ADZE_ENV = 'dev';

// ------- Default Node Logs -------- //

test('renders a default attention log', (t) => {
  const t_log = adze().attention('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' Attention(1)  ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default error log', (t) => {
  const t_log = adze().error('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'error');
    t.is(args[0], ' Error(1)      ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default warn log', (t) => {
  const t_log = adze().warn('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'warn');
    t.is(args[0], ' Warn(1)       ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default info log', (t) => {
  const t_log = adze().info('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' Info(1)       ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default fail log', (t) => {
  const t_log = adze().fail('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' Fail(1)       ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default success log', (t) => {
  const t_log = adze().success('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' Success(1)    ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default log', (t) => {
  const t_log = adze().log('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'log');
    t.is(args[0], ' Log(1)        ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default debug log', (t) => {
  const t_log = adze().debug('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' Debug(1)      ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default verbose log', (t) => {
  const t_log = adze().verbose('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' Verbose(1)    ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a custom log', (t) => {
  const style =
    'padding-right: 26px; border-color: 1px solid red; color: white; border-color: blue;';
  const { log, render } = adze({
    custom_levels: {
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
    t.is(args[0], ' Custom(1)     ');
    t.is(args[1], 'This is a custom log.');
  } else {
    t.fail();
  }
});
