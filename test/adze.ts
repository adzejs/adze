import test from 'ava';
import { adze, defaults, } from '../src';
import { Defaults, LogLevelDefinition } from '../src/_contracts';

global.ADZE_ENV = 'dev';

test('create a new logger with defaults', t => {
  const log = adze();

  t.truthy(log);

  // Test the congruity of the default options
  const cfg = log.cfg as Defaults;
  t.is(cfg.log_level, defaults.log_level);
  t.is(cfg.log_cache_size, 300);
  t.truthy(cfg.use_emoji);
  t.is(cfg.base_style, 'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;'),
  t.truthy(cfg.custom_levels);

  // Test the congruity of the default log levels
  const testLevel = (
    { level, style, terminal, method, emoji }: LogLevelDefinition,
    { level: cfg_level, style: cfg_style, terminal: cfg_terminal, method: cfg_method, emoji: cfg_emoji }: LogLevelDefinition,
  ):void => {
    t.is(level, cfg_level);
    t.is(style, cfg_style);
    Array.isArray(terminal) ? t.deepEqual(terminal, cfg_terminal) : t.is(terminal, cfg_terminal);
    t.is(method, cfg_method);
    t.is(emoji, cfg_emoji);
  };

  Object.keys(cfg.log_levels).forEach((name) => {
    t.truthy(Object.keys(defaults.log_levels).includes(name));
    testLevel(cfg.log_levels[name], defaults.log_levels[name]);
  });

  // Test congruity of filters
  t.truthy(cfg.filters);
  t.is(cfg.filters.hideAll, defaults.filters.hideAll);
  t.truthy(cfg.filters.namespace);
  t.is(cfg.filters.namespace.hideAll, defaults.filters.namespace.hideAll);
  t.deepEqual(cfg.filters.namespace.exclude, defaults.filters.namespace.exclude);
  t.deepEqual(cfg.filters.namespace.include, defaults.filters.namespace.include);
  t.truthy(cfg.filters.label);
  t.is(cfg.filters.label.hideAll, defaults.filters.label.hideAll);
  t.deepEqual(cfg.filters.label.exclude, defaults.filters.label.exclude);
  t.deepEqual(cfg.filters.label.include, defaults.filters.label.include);
});

test("prevents log render when the log level is lowered", t => {
  const terminated = adze({ log_level: 5 }).log('testing');
  t.truthy(terminated.log);
  t.is(terminated.render, null);
});

test("prevents log render when in a test environment", t => {
  global.ADZE_ENV = 'test';
  const terminated = adze().log('testing');
  t.truthy(terminated.log);
  t.is(terminated.render, null);
  global.ADZE_ENV = 'dev';
});

// ------- Default Browser Logs -------- //

test("browser renders a default attention log", t => {
  const t_log = adze().attention("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c Attention(1)');
    t.is(args[1], 'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;padding-right: 15px; background: linear-gradient(to right, #fff, #e2baff); color: #483c51; border-color: #c19fd9;');
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("browser renders a default error log", t => {
  const t_log = adze().error("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'error');
    t.is(args[0], ' %c Error(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.error.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("browser renders a default warn log", t => {
  const t_log = adze().warn("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'warn');
    t.is(args[0], ' %c Warn(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.warn.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("browser renders a default info log", t => {
  const t_log = adze().info("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c Info(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.info.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("browser renders a default fail log", t => {
  const t_log = adze().fail("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c Fail(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.fail.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("browser renders a default success log", t => {
  const t_log = adze().success("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c Success(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.success.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("browser renders a default log", t => {
  const t_log = adze().log("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'log');
    t.is(args[0], ' %c Log(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.log.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("browser renders a default debug log", t => {
  const t_log = adze().debug("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' %c Debug(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.debug.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("browser renders a default verbose log", t => {
  const t_log = adze().verbose("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' %c Verbose(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.verbose.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

// ------- Default Node Logs -------- //

test("node renders a default attention log", t => {
  const t_log = adze().attention("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c Attention(1)');
    t.is(args[1], 'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;padding-right: 15px; background: linear-gradient(to right, #fff, #e2baff); color: #483c51; border-color: #c19fd9;');
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("node renders a default error log", t => {
  const t_log = adze().error("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'error');
    t.is(args[0], ' %c Error(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.error.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("node renders a default warn log", t => {
  const t_log = adze().warn("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'warn');
    t.is(args[0], ' %c Warn(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.warn.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("node renders a default info log", t => {
  const t_log = adze().info("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c Info(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.info.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("node renders a default fail log", t => {
  const t_log = adze().fail("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c Fail(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.fail.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("node renders a default success log", t => {
  const t_log = adze().success("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'info');
    t.is(args[0], ' %c Success(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.success.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("node renders a default log", t => {
  const t_log = adze().log("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'log');
    t.is(args[0], ' %c Log(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.log.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("node renders a default debug log", t => {
  const t_log = adze().debug("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' %c Debug(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.debug.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});

test("node renders a default verbose log", t => {
  const t_log = adze().verbose("testing");
  t.truthy(t_log.log);

  if (t_log.render) {
    const [ method, args ] = t_log.render;
    t.is(method, 'debug');
    t.is(args[0], ' %c Verbose(1)');
    t.is(args[1], defaults.base_style + defaults.log_levels.verbose.style);
    t.is(args[2], 'testing');
  } else {
    t.fail();
  }
});
