import test from 'ava';
import { adze, defaults } from '../src';
import { Defaults, LogLevelDefinition } from '../src/_contracts';

global.ADZE_ENV = 'dev';

// ------- Default Browser Logs -------- //

test('browser renders a default attention log', (t) => {
  const t_log = adze().attention('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' Attention(1)');
    t.is(
      args[1],
      'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;padding-right: 15px; background: linear-gradient(to right, #fff, #e2baff); color: #483c51; border-color: #c19fd9;'
    );
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a default error log', (t) => {
  const t_log = adze().error('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'error');
    t.is(args[0], ' Error(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.error.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a default warn log', (t) => {
  const t_log = adze().warn('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'warn');
    t.is(args[0], ' Warn(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.warn.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a default info log', (t) => {
  const t_log = adze().info('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' Info(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.info.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a default fail log', (t) => {
  const t_log = adze().fail('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' Fail(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.fail.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a default success log', (t) => {
  const t_log = adze().success('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' Success(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.success.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a default log', (t) => {
  const t_log = adze().log('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'log');
    t.is(args[0], ' Log(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.log.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a default debug log', (t) => {
  const t_log = adze().debug('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' Debug(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.debug.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a default verbose log', (t) => {
  const t_log = adze().verbose('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' Verbose(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.verbose.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});
