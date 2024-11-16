import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { teardown } from '../../src';
import { applyStyles } from '../../src/functions';
import { getLogConfig } from '../../src/constants';

/**
 * @vitest-environment node
 */

describe('log formatting', () => {
  afterEach(() => {
    teardown();
  });

  test('logs a warning if selecting a format that does not exist', () => {
    console.log = vi.fn();
    console.warn = vi.fn();

    adze.format('bad').log('Testing bad formatting modifier.');

    expect(console.log).toHaveBeenCalledWith(
      applyStyles(' Log       ', getLogConfig().terminalStyle),
      'Testing bad formatting modifier.'
    );
    expect(console.warn).toHaveBeenCalledTimes(1);
  });
});
