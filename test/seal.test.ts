import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { Middleware, setup, teardown } from '../src';
import Log from '../src/log';

/**
 * @vitest-environment happy-dom
 */

describe('Configuration', () => {
  afterEach(() => {
    delete globalThis.$ADZE_ENV;
    window.location.search = '';
    teardown();
  });

  test('can seal an already sealed logger', () => {
    console.log = vi.fn();

    const logger1 = adze.withEmoji.seal();
    const logger2 = logger1.ns('sealed').seal();

    logger2.log('This is a log from a twice sealed logger.');

    expect(console.log).toHaveBeenCalledWith(
      '%c🪵 %c Log',
      'font-size: 12px;',
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '#sealed ',
      'This is a log from a twice sealed logger.'
    );
  });

  test('the same number of middlewares are inherited after sealing', () => {
    console.log = vi.fn();

    const store = setup({
      middleware: [{} as Middleware],
    });

    store.addListener('*', (log: Log) => {
      expect(log.configuration.middleware?.length).toBe(2);
    });

    const logger1 = adze.ns('l1').seal();
    const logger2 = logger1.ns('l2').seal({
      middleware: [{} as Middleware],
    });
    const logger3 = logger2.ns('l3').seal();

    logger3.log('This is a log from a sealed logger.');
  });

  test('sealTag returns a template literal tag function that generates a log of the sealed level', () => {
    console.error = vi.fn();

    const logger1 = adze.withEmoji.seal();
    const ERR = logger1.sealTag('error');

    ERR`Something went wrong with node ${1}! ${new Error('An error occurred')}`;

    expect(console.error).toHaveBeenCalledWith(
      '%c🔥 %c Error',
      'font-size: 12px;',
      'padding-right: 24px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;',
      'Something went wrong with node 1! Error: An error occurred'
    );
  });
});
