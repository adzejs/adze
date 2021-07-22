import test from 'ava';
import { passesFilters } from '../src/conditions';
import { adze, defaults, isFinalLogData } from '../src';
import { Defaults, LogLevelDefinition } from '../src/_contracts';

global.ADZE_ENV = 'dev';

test('create a new logger with defaults', (t) => {
  const log = adze();

  t.truthy(log);

  // Test the congruity of the default options
  const cfg = log.data.cfg as Defaults;

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

  Object.keys(cfg.logLevels).forEach((name) => {
    t.truthy(Object.keys(defaults.logLevels).includes(name));
    testLevel(cfg.logLevels[name], defaults.logLevels[name]);
  });

  // Test congruity of filters
  t.truthy(cfg.filters);
  t.is(cfg.filters.hideAll, defaults.filters.hideAll);
});

test('prevents log render when the log level is lowered', (t) => {
  const terminated = adze({ logLevel: 5 }).log('testing');
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

test('passesFilters correctly indicates that a log is allowed to render', (t) => {
  const { log } = adze({
    filters: {
      hideAll: true,
    },
  }).log('This is a test.');
  const data = log.data;

  if (isFinalLogData(data)) {
    if (passesFilters(data.cfg, data)) {
      t.fail();
    } else {
      t.pass();
    }
  } else {
    t.fail();
  }
});

test('hideAll global log filter prevents all logs rendering', (t) => {
  const cfg = {
    filters: {
      hideAll: true,
    },
  };

  const log = adze(cfg).seal();

  const { render: a_render } = log().alert('This is an alert!');
  const { render: e_render } = log().error('This is an error!');
  const { render: w_render } = log().warn('This is a warn!');
  const { render: i_render } = log().info('This is an info!');
  const { render: f_render } = log().fail('This is a failure!');
  const { render: s_render } = log().success('This is a success!');
  const { render: l_render } = log().log('This is a log!');
  const { render: d_render } = log().debug('This is a debug!');
  const { render: v_render } = log().verbose('This is a verbose!');

  t.falsy(a_render);
  t.falsy(e_render);
  t.falsy(w_render);
  t.falsy(i_render);
  t.falsy(f_render);
  t.falsy(s_render);
  t.falsy(l_render);
  t.falsy(d_render);
  t.falsy(v_render);
});

test('global filter excludes logs based on label', (t) => {
  const cfg = {
    filters: {
      label: {
        exclude: ['test', 'test2'],
      },
    },
  };

  const log = adze(cfg).seal();

  const { render: a_render } = log().alert('This is an alert!');
  const { render: e_render } = log().label('test').error('This is an error!');
  const { render: w_render } = log().warn('This is a warn!');
  const { render: i_render } = log().label('test').info('This is an info!');
  const { render: f_render } = log().fail('This is a failure!');
  const { render: s_render } = log().success('This is a success!');
  const { render: l_render } = log().label('test2').log('This is a log!');
  const { render: d_render } = log().label('test2').debug('This is a debug!');
  const { render: v_render } = log().verbose('This is a verbose!');

  t.truthy(a_render);
  t.falsy(e_render);
  t.truthy(w_render);
  t.falsy(i_render);
  t.truthy(f_render);
  t.truthy(s_render);
  t.falsy(l_render);
  t.falsy(d_render);
  t.truthy(v_render);
});

test('global filter includes logs based on label', (t) => {
  const cfg = {
    filters: {
      label: {
        include: ['test', 'test2'],
      },
    },
  };

  const log = adze(cfg).seal();

  const { render: a_render } = log().alert('This is an alert!');
  const { render: e_render } = log().label('test').error('This is an error!');
  const { render: w_render } = log().warn('This is a warn!');
  const { render: i_render } = log().label('test').info('This is an info!');
  const { render: f_render } = log().fail('This is a failure!');
  const { render: s_render } = log().success('This is a success!');
  const { render: l_render } = log().label('test2').log('This is a log!');
  const { render: d_render } = log().label('test2').debug('This is a debug!');
  const { render: v_render } = log().verbose('This is a verbose!');

  t.falsy(a_render);
  t.truthy(e_render);
  t.falsy(w_render);
  t.truthy(i_render);
  t.falsy(f_render);
  t.falsy(s_render);
  t.truthy(l_render);
  t.truthy(d_render);
  t.falsy(v_render);
});

test('global filter excludes logs based on namespace', (t) => {
  const cfg = {
    filters: {
      namespace: {
        exclude: ['testWOW'],
      },
    },
  };

  const log = adze(cfg).seal();

  const { render: a_render } = log().alert('This is an alert!');
  const { render: e_render } = log().ns('testWOW').error('This is an error!');
  const { render: w_render } = log().warn('This is a warn!');
  const { render: i_render } = log().ns('testWOW').info('This is an info!');
  const { render: f_render } = log().fail('This is a failure!');
  const { render: s_render } = log().success('This is a success!');
  const { render: l_render } = log()
    .ns(['testWOW', 'test2'])
    .log('This is a log!');
  const { render: d_render } = log().ns('test2').debug('This is a debug!');
  const { render: v_render } = log().verbose('This is a verbose!');

  t.truthy(a_render);
  t.falsy(e_render);
  t.truthy(w_render);
  t.falsy(i_render);
  t.truthy(f_render);
  t.truthy(s_render);
  t.falsy(l_render);
  t.truthy(d_render);
  t.truthy(v_render);
});

test('global filter includes logs based on namespace', (t) => {
  const cfg = {
    filters: {
      namespace: {
        include: ['test'],
      },
    },
  };

  const log = adze(cfg).seal();

  const { render: a_render } = log().alert('This is an alert!');
  const { render: e_render } = log().ns('test').error('This is an error!');
  const { render: w_render } = log().warn('This is a warn!');
  const { render: i_render } = log().ns('test').info('This is an info!');
  const { render: f_render } = log().fail('This is a failure!');
  const { render: s_render } = log().success('This is a success!');
  const { render: l_render } = log()
    .ns(['test', 'test2'])
    .log('This is a log!');
  const { render: d_render } = log().ns('test2').debug('This is a debug!');
  const { render: v_render } = log().verbose('This is a verbose!');

  t.truthy(a_render);
  t.truthy(e_render);
  t.truthy(w_render);
  t.truthy(i_render);
  t.truthy(f_render);
  t.truthy(s_render);
  t.truthy(l_render);
  t.falsy(d_render);
  t.truthy(v_render);
});
