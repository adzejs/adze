import test from 'ava';
import { adze, defaults } from '../src';
import { Defaults, LogLevelDefinition } from '../src/_contracts';

global.ADZE_ENV = 'dev';

test('create a new logger with defaults', (t) => {
  const log = adze();

  t.truthy(log);

  // Test the congruity of the default options
  const cfg = log.cfg as Defaults;
  t.is(cfg.log_level, defaults.log_level);
  t.is(cfg.log_cache_size, 300);
  t.truthy(cfg.use_emoji);
  t.is(
    cfg.base_style,
    'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;'
  ),
    t.truthy(cfg.custom_levels);

  // Test the congruity of the default log levels
  const testLevel = (
    { level, style, terminal, method, emoji }: LogLevelDefinition,
    {
      level: cfg_level,
      style: cfg_style,
      terminal: cfg_terminal,
      method: cfg_method,
      emoji: cfg_emoji,
    }: LogLevelDefinition
  ): void => {
    t.is(level, cfg_level);
    t.is(style, cfg_style);
    Array.isArray(terminal)
      ? t.deepEqual(terminal, cfg_terminal)
      : t.is(terminal, cfg_terminal);
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
  t.deepEqual(
    cfg.filters.namespace.exclude,
    defaults.filters.namespace.exclude
  );
  t.deepEqual(
    cfg.filters.namespace.include,
    defaults.filters.namespace.include
  );
  t.truthy(cfg.filters.label);
  t.is(cfg.filters.label.hideAll, defaults.filters.label.hideAll);
  t.deepEqual(cfg.filters.label.exclude, defaults.filters.label.exclude);
  t.deepEqual(cfg.filters.label.include, defaults.filters.label.include);
});

test('prevents log render when the log level is lowered', (t) => {
  const terminated = adze({ log_level: 5 }).log('testing');
  t.truthy(terminated.log);
  t.is(terminated.render, null);
});

test('prevents log render when in a test environment', (t) => {
  global.ADZE_ENV = 'test';
  const terminated = adze().log('testing');
  t.truthy(terminated.log);
  t.is(terminated.render, null);
  global.ADZE_ENV = 'dev';
});
