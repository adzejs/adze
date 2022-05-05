import test from 'ava';
import adze from '../../src';

global.ADZE_ENV = 'dev';

// ------- Default Browser Logs -------- //
test('renders a default alert log', (t) => {
  const { log, render } = adze({ machineReadable: true }).alert('testing');
  t.truthy(log);

  if (render) {
    /* args should be
      ['{ "method": "error", "level": 0, "levelName": "alert", "args": ["testing"] }']
    */

    const [method, args] = render;
    t.is(method, 'error');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'error');
    t.is(parsed.level, 0);
    t.is(parsed.levelName, 'alert');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default error log', (t) => {
  const { log, render } = adze({ machineReadable: true }).error('testing');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'error');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'error');
    t.is(parsed.level, 1);
    t.is(parsed.levelName, 'error');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default warn log', (t) => {
  const { log, render } = adze({ machineReadable: true }).warn('testing');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'warn');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'warn');
    t.is(parsed.level, 2);
    t.is(parsed.levelName, 'warn');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default info log', (t) => {
  const { log, render } = adze({ machineReadable: true }).info('testing');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'info');
    t.is(parsed.level, 3);
    t.is(parsed.levelName, 'info');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default fail log', (t) => {
  const { log, render } = adze({ machineReadable: true }).fail('testing');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'info');
    t.is(parsed.level, 4);
    t.is(parsed.levelName, 'fail');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default success log', (t) => {
  const { log, render } = adze({ machineReadable: true }).success('testing');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'info');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'info');
    t.is(parsed.level, 5);
    t.is(parsed.levelName, 'success');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default log', (t) => {
  const { log, render } = adze({ machineReadable: true }).log('testing');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'log');
    t.is(parsed.level, 6);
    t.is(parsed.levelName, 'log');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default debug log', (t) => {
  const { log, render } = adze({ machineReadable: true }).debug('testing');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'debug');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'debug');
    t.is(parsed.level, 7);
    t.is(parsed.levelName, 'debug');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});

test('renders a default verbose log', (t) => {
  const { log, render } = adze({ machineReadable: true }).verbose('testing');
  t.truthy(log);

  if (render) {
    const [method, args] = render;
    t.is(method, 'debug');
    t.is(args.length, 1);

    const parsed = JSON.parse(args[0] as string);
    t.is(parsed.method, 'debug');
    t.is(parsed.level, 8);
    t.is(parsed.levelName, 'verbose');
    t.is(parsed.args.length, 1);
    t.is(parsed.args[0], 'testing');
  } else {
    t.fail();
  }
});
