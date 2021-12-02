/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const browserEnv = require('browser-env');
import test from 'ava';
import adze, { defaults } from '../../../src';

// Simulate the browser environment for testing
browserEnv();
// Our global context is the window not global
window.ADZE_ENV = 'dev';

test('log renders when assertion is false (fails)', (t) => {
  const x = 2;
  const { render } = adze()
    // @ts-ignore
    .assert(x === 3)
    .log('Asserts that x is 3.');

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args[0], ' %c Log(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.log.style}`);
    t.is(args[2], 'Assertion failed:');
    t.is(args[3], 'Asserts that x is 3.');
  } else {
    t.fail();
  }
});

test('log renders with emoji when assertion is false (fails)', (t) => {
  const x = 2;
  const { render } = adze({ useEmoji: true })
    // @ts-ignore
    .assert(x === 3)
    .log('Asserts that x is 3.');

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args[0], ' %c 📌 Log(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.log.style}`);
    t.is(args[2], '❌ Assertion failed:');
    t.is(args[3], 'Asserts that x is 3.');
  } else {
    t.fail();
  }
});

test('log renders when expression is true (passes)', (t) => {
  const x = 2;
  const { render } = adze()
    .test(x === 2)
    .log('Value of x is 2.');

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args[0], ' %c Log(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.log.style}`);
    t.is(args[2], 'Expression Passed:');
    t.is(args[3], 'Value of x is 2.');
  } else {
    t.fail();
  }
});

test('log renders with emoji when expression is true (passes)', (t) => {
  const x = 2;
  const { render } = adze({ useEmoji: true })
    .test(x === 2)
    .log('Value of x is 2.');

  if (render) {
    const [method, args] = render;
    t.is(method, 'log');
    t.is(args[0], ' %c 📌 Log(1)');
    t.is(args[1], `${defaults.baseStyle}${defaults.logLevels.log.style}`);
    t.is(args[2], '✅ Expression Passed:');
    t.is(args[3], 'Value of x is 2.');
  } else {
    t.fail();
  }
});
