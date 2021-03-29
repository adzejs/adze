import test from 'ava';
import { adze } from '../../src';

global.ADZE_ENV = 'dev';

// =========================
// WITH EMOJI
// =========================

test('renders a default alert log with emoji', (t) => {
  const t_log = adze({ use_emoji: true }).alert('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'error');
    t.is(args[0], ' 🚨 Alert(1)      ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default error log with emoji', (t) => {
  const t_log = adze({ use_emoji: true }).error('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'error');
    t.is(args[0], ' 🔥 Error(1)      ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default warn log with emoji', (t) => {
  const t_log = adze({ use_emoji: true }).warn('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'warn');
    t.is(args[0], ' 🔔 Warn(1)       ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default info log with emoji', (t) => {
  const t_log = adze({ use_emoji: true }).info('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' 📬 Info(1)       ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default fail log with emoji', (t) => {
  const t_log = adze({ use_emoji: true }).fail('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' ❌ Fail(1)       ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default success log with emoji', (t) => {
  const t_log = adze({ use_emoji: true }).success('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' 🎉 Success(1)    ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default log with emoji', (t) => {
  const t_log = adze({ use_emoji: true }).log('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'log');
    t.is(args[0], ' 📌 Log(1)        ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default debug log with emoji', (t) => {
  const t_log = adze({ use_emoji: true }).debug('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' 🐞 Debug(1)      ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default verbose log with emoji', (t) => {
  const t_log = adze({ use_emoji: true }).verbose('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' 💤 Verbose(1)    ');
    t.is(args[1], 'testing');
  } else {
    t.fail();
  }
});
