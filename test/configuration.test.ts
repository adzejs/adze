import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { setup, teardown } from '../src';

describe('Configuration', () => {
  afterEach(() => {
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
});
