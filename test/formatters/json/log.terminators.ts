import { expect, vi } from 'vitest';
import adze, {
  JsonLogFormatMeta,
  LevelConfiguration,
  serializeRequest,
  serializeResponse,
  setup,
} from '../../../src';
import { isMatch } from 'date-fns';

export const printJsonAlert = () => {
  const fn = vi.fn();
  console.error = fn;
  setup({ format: 'json', timestampFormatter: () => '2024-07-31T13:19:25-04:00' });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .alert('This is an alert log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log: string = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 0,
    levelName: 'alert',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is an alert log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printJsonError = () => {
  const fn = vi.fn();
  console.error = fn;
  setup({ format: 'json', timestampFormatter: () => '2024-07-31T13:19:25-04:00' });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .error('This is an error log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 1,
    levelName: 'error',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is an error log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printJsonWarn = () => {
  const fn = vi.fn();
  console.warn = fn;
  setup({ format: 'json', timestampFormatter: () => '2024-07-31T13:19:25-04:00' });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .warn('This is a warn log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 2,
    levelName: 'warn',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a warn log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printJsonInfo = () => {
  const fn = vi.fn();
  console.info = fn;
  setup({ format: 'json', timestampFormatter: () => '2024-07-31T13:19:25-04:00' });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .info('This is an info log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 3,
    levelName: 'info',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is an info log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printJsonFail = () => {
  const fn = vi.fn();
  console.info = fn;
  setup({ format: 'json', timestampFormatter: () => '2024-07-31T13:19:25-04:00' });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .fail('This is a fail log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 4,
    levelName: 'fail',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a fail log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printJsonSuccess = () => {
  const fn = vi.fn();
  console.info = fn;
  setup({ format: 'json', timestampFormatter: () => '2024-07-31T13:19:25-04:00' });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .success('This is a success log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 5,
    levelName: 'success',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a success log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printJsonLog = () => {
  const fn = vi.fn();
  console.log = fn;
  setup({ format: 'json', timestampFormatter: () => '2024-07-31T13:19:25-04:00' });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .log('This is a log log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 6,
    levelName: 'log',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a log log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printJsonDebug = () => {
  const fn = vi.fn();
  console.debug = fn;
  setup({
    activeLevel: 'debug',
    format: 'json',
    timestampFormatter: () => '2024-07-31T13:19:25-04:00',
  });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .debug('This is a debug log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 7,
    levelName: 'debug',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a debug log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printJsonVerbose = () => {
  const fn = vi.fn();
  console.debug = fn;
  setup({
    activeLevel: 'verbose',
    format: 'json',
    timestampFormatter: () => '2024-07-31T13:19:25-04:00',
  });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .verbose('This is a verbose log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 8,
    levelName: 'verbose',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a verbose log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printJsonCustom = () => {
  const fn = vi.fn();
  console.log = fn;

  const leetLevel: LevelConfiguration = {
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
    format: 'json',
    timestampFormatter: () => '2024-07-31T13:19:25-04:00',
  });
  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .custom('leetLevel', 'This is a custom log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 1337,
    levelName: 'leetLevel',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a custom log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const noEmoji = () => {
  const fn = vi.fn();
  console.log = fn;
  setup({
    format: 'json',
    timestampFormatter: () => '2024-07-31T13:19:25-04:00',
  });

  adze.withEmoji
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .log('This is a log log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 6,
    levelName: 'log',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a log log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const defaultTimestamp = () => {
  const fn = vi.fn();
  console.log = fn;
  setup({
    format: 'json',
    timestampFormatter: () => '2024-07-31T13:19:25-04:00',
  });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .log('This is a log log.', 'foo');
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  expect(isMatch(log.time, "yyyy-MM-dd'T'HH:mm:ssxxx")).toBe(true);
};

export const incrementingPids = () => {
  const fn = vi.fn();
  console.log = fn;
  setup({
    format: 'json',
    timestampFormatter: () => '2024-07-31T13:19:25-04:00',
  });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .log('This is a log log.', 'foo');
  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
    })
    .log('This is a log log.', 'foo');

  expect(fn).toHaveBeenCalledTimes(2);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log1 = JSON.parse(fn.mock.calls[0][0]);
  expect(log1).toEqual({
    v: 1,
    level: 6,
    levelName: 'log',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a log log.',
    args: ['foo'],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log2 = JSON.parse(fn.mock.calls[1][0]);
  expect(log2).toEqual({
    v: 1,
    level: 6,
    levelName: 'log',
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is a log log.',
    args: ['foo'],
    pid: 2,
    time: '2024-07-31T13:19:25-04:00',
  });
};

export const printsOptionalFields = async () => {
  const fn = vi.fn();
  console.error = fn;
  setup({ format: 'json', timestampFormatter: () => '2024-07-31T13:19:25-04:00' });

  const request = new Request('https://120.0.0.1:51244/path?q=1#anchor', {
    method: 'POST',
    headers: {
      'x-hi': 'Mom',
      connection: 'close',
      Authorization: 'Basic ' + btoa('astacy:password'),
    },
    body: JSON.stringify({ foo: 'bar' }),
  });
  const response = new Response('hello world!', {
    status: 200,
    statusText: 'OK',
    headers: { boop: 'beep' },
  });
  Object.defineProperty(response, 'url', { value: 'https://120.0.0.1:51244/path?q=1#anchor' });

  adze
    .meta<JsonLogFormatMeta>({
      hostname: 'localhost',
      name: 'test-app',
      err: {
        message: 'An error occurred.',
        name: 'TestError',
        stack: 'error stack',
      },
      latency: 100,
      levelName: 'alert',
      meta: {
        hello: 'world',
      },
      req: await serializeRequest(request),
      res: serializeResponse(response),
      req_id: '12345',
      src: 'test.ts',
    })
    .alert('This is an alert log.');

  expect(fn).toHaveBeenCalledTimes(1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  const log = JSON.parse(fn.mock.calls[0][0]);
  expect(log).toEqual({
    v: 1,
    level: 0,
    name: 'test-app',
    hostname: 'localhost',
    msg: 'This is an alert log.',
    args: [],
    pid: 1,
    time: '2024-07-31T13:19:25-04:00',
    levelName: 'alert',
    meta: {
      levelName: 'alert',
      meta: {
        hello: 'world',
      },
    },
    src: 'test.ts',
    err: {
      message: 'An error occurred.',
      name: 'TestError',
      stack: 'error stack',
    },
    req_id: '12345',
    req: {
      headers: {
        connection: 'close',
        'content-type': 'text/plain;charset=UTF-8',
        'x-hi': 'Mom',
      },
      method: 'POST',
      url: 'https://120.0.0.1:51244/path?q=1#anchor',
      body: JSON.stringify({
        foo: 'bar',
      }),
      remoteAddress: '120.0.0.1',
      remotePort: 51244,
    },
    res: {
      statusCode: 200,
      header: 'HTTPS 200 OK\r\nboop: 0\r\ncontent-type: 1\r\n\r\n',
    },
    latency: 100,
  });
};
