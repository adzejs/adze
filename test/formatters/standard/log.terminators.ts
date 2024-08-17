import { expect, vi } from 'vitest';
import adze, { StandardLogFormatMeta, LevelConfig, setup } from '../../../src';
import { isMatch } from 'date-fns';

export const printStandardAlert = async () => {
  const fn = vi.fn();
  console.error = fn;
  setup({ format: 'standard', timestampFormatter: () => '2013-01-04T19:01:18.241Z' });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .alert('This is an alert log.', 'foo');

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] ALERT: myapp/40208 on localhost: This is an alert log. ',
    'foo'
  );
};

export const printStandardError = () => {
  const fn = vi.fn();
  console.error = fn;
  setup({ format: 'standard', timestampFormatter: () => '2013-01-04T19:01:18.241Z' });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .error('This is an error log.', 'foo');

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] ERROR: myapp/40208 on localhost: This is an error log. ',
    'foo'
  );
};

export const printStandardWarn = () => {
  const fn = vi.fn();
  console.warn = fn;
  setup({ format: 'standard', timestampFormatter: () => '2013-01-04T19:01:18.241Z' });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .warn('This is a warn log.', 'foo');

  expect(console.warn).toHaveBeenCalledTimes(1);
  expect(console.warn).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] WARN: myapp/40208 on localhost: This is a warn log. ',
    'foo'
  );
};

export const printStandardInfo = () => {
  const fn = vi.fn();
  console.info = fn;
  setup({ format: 'standard', timestampFormatter: () => '2013-01-04T19:01:18.241Z' });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .info('This is an info log.', 'foo');

  expect(console.info).toHaveBeenCalledTimes(1);
  expect(console.info).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] INFO: myapp/40208 on localhost: This is an info log. ',
    'foo'
  );
};

export const printStandardFail = () => {
  const fn = vi.fn();
  console.info = fn;
  setup({ format: 'standard', timestampFormatter: () => '2013-01-04T19:01:18.241Z' });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .fail('This is a fail log.', 'foo');

  expect(console.info).toHaveBeenCalledTimes(1);
  expect(console.info).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] FAIL: myapp/40208 on localhost: This is a fail log. ',
    'foo'
  );
};

export const printStandardSuccess = () => {
  const fn = vi.fn();
  console.info = fn;
  setup({ format: 'standard', timestampFormatter: () => '2013-01-04T19:01:18.241Z' });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .success('This is a success log.', 'foo');

  expect(console.info).toHaveBeenCalledTimes(1);
  expect(console.info).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] SUCCESS: myapp/40208 on localhost: This is a success log. ',
    'foo'
  );
};

export const printStandardLog = () => {
  const fn = vi.fn();
  console.log = fn;
  setup({ format: 'standard', timestampFormatter: () => '2013-01-04T19:01:18.241Z' });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .log('This is a log log.', 'foo');

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] LOG: myapp/40208 on localhost: This is a log log. ',
    'foo'
  );
};

export const printStandardDebug = () => {
  const fn = vi.fn();
  console.debug = fn;
  setup({
    activeLevel: 'debug',
    format: 'standard',
    timestampFormatter: () => '2013-01-04T19:01:18.241Z',
  });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .debug('This is a debug log.', 'foo');

  expect(console.debug).toHaveBeenCalledTimes(1);
  expect(console.debug).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] DEBUG: myapp/40208 on localhost: This is a debug log. ',
    'foo'
  );
};

export const printStandardVerbose = () => {
  const fn = vi.fn();
  console.debug = fn;
  setup({
    activeLevel: 'verbose',
    format: 'standard',
    timestampFormatter: () => '2013-01-04T19:01:18.241Z',
  });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .verbose('This is a verbose log.', 'foo');

  expect(console.debug).toHaveBeenCalledTimes(1);
  expect(console.debug).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] VERBOSE: myapp/40208 on localhost: This is a verbose log. ',
    'foo'
  );
};

export const printStandardLogWithNamespace = () => {
  const fn = vi.fn();
  console.log = fn;
  setup({
    activeLevel: 'verbose',
    format: 'standard',
    timestampFormatter: () => '2013-01-04T19:01:18.241Z',
  });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .ns('foo', 'bar')
    .log('This is a standard log with a namespace.', 'foo');

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] LOG: myapp/40208 on localhost: foo/bar This is a standard log with a namespace. ',
    'foo'
  );
};

export const printStandardLogWithLabel = () => {
  const fn = vi.fn();
  console.log = fn;
  setup({
    activeLevel: 'verbose',
    format: 'standard',
    timestampFormatter: () => '2013-01-04T19:01:18.241Z',
  });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .label('foo')
    .log('This is a standard log with a label.', 'foo');

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] LOG: myapp/40208 on localhost: [foo] This is a standard log with a label. ',
    'foo'
  );
};

export const printStandardCustom = () => {
  const fn = vi.fn();
  console.log = fn;

  const leetLevel: LevelConfig = {
    levelName: 'leetLevel',
    level: 1337,
    method: 'log',
    style:
      'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
    terminalStyle: ['white', 'bgMagenta'],
    emoji: '👾',
  };
  setup({
    activeLevel: 1337,
    levels: { leetLevel },
    format: 'standard',
    timestampFormatter: () => '2013-01-04T19:01:18.241Z',
  });
  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .custom('leetLevel', 'This is a custom log.', 'foo');

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] LEETLEVEL: myapp/40208 on localhost: This is a custom log. ',
    'foo'
  );
};

export const noEmoji = () => {
  const fn = vi.fn();
  console.log = fn;
  setup({ format: 'standard', timestampFormatter: () => '2013-01-04T19:01:18.241Z' });

  adze.withEmoji
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      port: 40208,
      appname: 'myapp',
      name: 'test-app',
    })
    .log('This is a log log.', 'foo');

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith(
    '[2013-01-04T19:01:18.241Z] LOG: myapp/40208 on localhost: This is a log log. ',
    'foo'
  );
};

export const defaultTimestamp = () => {
  const fn = vi.fn();
  console.log = fn;
  setup({
    format: 'standard',
    timestampFormatter: () => '2024-07-27T16:50:05-04:00',
  });

  adze
    .meta<StandardLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .log('This is a log log.', 'foo');
  expect(console.log).toHaveBeenCalledTimes(1);
  const message = fn.mock.calls[0][0];
  const timestamp = message.split('[')[1].split(']')[0];
  expect(isMatch(timestamp, "yyyy-MM-dd'T'HH:mm:ssxxx")).toBe(true);
};
