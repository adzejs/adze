/* eslint-disable @typescript-eslint/ban-ts-comment */
import test from 'ava';
import adze from '../../../src';

global.ADZE_ENV = 'dev';

test('log is generated when assertion is false (fails)', (t) => {
  const x = 2;
  const { log, render } = adze()
    // @ts-expect-error
    .assert(x === 3)
    .log('Asserts that x is 3.');

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
    t.is(parsed.args[0], 'Asserts that x is 3.');
  } else {
    t.fail();
  }
});

test('log is generated when expression is true (passes)', (t) => {
  const x = 2;
  const { log, render } = adze()
    .test(x === 2)
    .log('Value of x is 2.');

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
    t.is(parsed.args[0], 'Value of x is 2.');
  } else {
    t.fail();
  }
});
