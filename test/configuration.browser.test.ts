import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { setup, teardown } from '../src';

/**
 * @vitest-environment happy-dom
 */

describe('Configuration', () => {
  afterEach(() => {
    delete globalThis.$ADZE_ENV;
    window.location.search = '';
    teardown();
  });

  test('overwriting a default log level applies the new configuration properly', () => {
    console.error = vi.fn();

    setup({
      levels: {
        error: {
          levelName: 'error',
          level: 1,
          method: 'error',
          style: 'color: purple; background: white;', // <- changing the error style to use purple text.
          terminalStyle: ['magenta', 'bgWhite'],
          emoji: '🔥',
        },
      },
    });

    adze.withEmoji.error('This is an error log with overwritten style configuration.');

    expect(console.error).toHaveBeenCalledWith(
      '%c🔥 %c Error',
      'font-size: 12px;',
      'color: purple; background: white;',
      'This is an error log with overwritten style configuration.'
    );
  });

  test('logs do not print if the $ADZE_ENV global variable is set to test', () => {
    console.log = vi.fn();
    console.error = vi.fn();

    globalThis.$ADZE_ENV = 'test';

    adze.log('This log should not print.');
    adze.error('This error should not print.');

    expect(console.log).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });

  test('logs do not print if the ADZE_ENV url param is set to test', () => {
    console.log = vi.fn();
    console.error = vi.fn();

    window.location.search = '?ADZE_ENV=test';

    adze.log('This log should not print.');
    adze.error('This error should not print.');

    expect(console.log).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });
});
