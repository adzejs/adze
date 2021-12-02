// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import adze, { defaults } from '../../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

// ------- Default Browser Logs -------- //

test('renders a default alert log', (t) => {
  const t_log = adze().alert('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'error');
    t.is(args[0], ' %c Alert(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.alert.style}`);
    t.is(args[2], 'testing');
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
    t.is(args[0], ' %c Error(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.error.style}`);
    t.is(args[2], 'testing');
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
    t.is(args[0], ' %c Warn(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.warn.style}`);
    t.is(args[2], 'testing');
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
    t.is(args[0], ' %c Info(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.info.style}`);
    t.is(args[2], 'testing');
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
    t.is(args[0], ' %c Fail(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.fail.style}`);
    t.is(args[2], 'testing');
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
    t.is(args[0], ' %c Success(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.success.style}`);
    t.is(args[2], 'testing');
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
    t.is(args[0], ' %c Log(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.log.style}`);
    t.is(args[2], 'testing');
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
    t.is(args[0], ' %c Debug(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.debug.style}`);
    t.is(args[2], 'testing');
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
    t.is(args[0], ' %c Verbose(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.verbose.style}`);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});
