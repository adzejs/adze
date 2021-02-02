// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import { adze, defaults } from '../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

// ------- Default Browser Logs -------- //

test('browser renders a default attention log', (t) => {
  const t_log = adze().attention('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c Attention(1)');
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
    t.is(args[0], ' %c Error(1)');
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
    t.is(args[0], ' %c Warn(1)');
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
    t.is(args[0], ' %c Info(1)');
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
    t.is(args[0], ' %c Fail(1)');
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
    t.is(args[0], ' %c Success(1)');
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
    t.is(args[0], ' %c Log(1)');
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
    t.is(args[0], ' %c Debug(1)');
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
    t.is(args[0], ' %c Verbose(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.verbose.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a custom log', (t) => {
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
    t.is(args[0], ' %c Custom(1)');
    t.is(args[1], defaults.base_style + style);
    t.is(args[2], 'This is a custom log.');
  } else {
    t.fail();
  }
});

// =========================
// WITH EMOJI
// =========================

test('browser renders a attention log with emoji', (t) => {
  const t_log = adze({
    use_emoji: true,
  }).attention('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c 🌈 Attention(1)');
    t.is(
      args[1],
      'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;padding-right: 15px; background: linear-gradient(to right, #fff, #e2baff); color: #483c51; border-color: #c19fd9;'
    );
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a error log with emoji', (t) => {
  const t_log = adze({
    use_emoji: true,
  }).error('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'error');
    t.is(args[0], ' %c 🔥 Error(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.error.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a warn log with emoji', (t) => {
  const t_log = adze({
    use_emoji: true,
  }).warn('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'warn');
    t.is(args[0], ' %c 🔔 Warn(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.warn.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a info log with emoji', (t) => {
  const t_log = adze({
    use_emoji: true,
  }).info('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c 📬 Info(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.info.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a fail log with emoji', (t) => {
  const t_log = adze({
    use_emoji: true,
  }).fail('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c ❌ Fail(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.fail.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a success log with emoji', (t) => {
  const t_log = adze({
    use_emoji: true,
  }).success('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c 🎉 Success(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.success.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a log with emoji', (t) => {
  const t_log = adze({
    use_emoji: true,
  }).log('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'log');
    t.is(args[0], ' %c 📌 Log(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.log.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a debug log with emoji', (t) => {
  const t_log = adze({
    use_emoji: true,
  }).debug('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' %c 🐞 Debug(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.debug.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a verbose log with emoji', (t) => {
  const t_log = adze({
    use_emoji: true,
  }).verbose('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' %c 💤 Verbose(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.verbose.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test('browser renders a custom log with emoji', (t) => {
  const style =
    'padding-right: 26px; border-color: 1px solid red; color: white; border-color: blue;';
  const { log, render } = adze({
    use_emoji: true,
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
    t.is(args[0], ' %c 🤪 Custom(1)');
    t.is(args[1], defaults.base_style + style);
    t.is(args[2], 'This is a custom log.');
  } else {
    t.fail();
  }
});

// =========================
// WITH EMOJI
// =========================

test('browser renders a log with altered base style', (t) => {
  const base_style =
    'font-size: 12px; font-weight: normal; border-radius: 0 5px 5px 0; border-width: 2px; border-style: dashed;';
  const t_log = adze({
    base_style,
  }).log('testing');
  t.truthy(t_log.log);

  if (t_log.render) {
    const [method, args] = t_log.render;
    t.is(method, 'log');
    t.is(args[0], ' %c Log(1)');
    t.is(args[1], base_style + defaults.log_levels.log.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});
