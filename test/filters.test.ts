import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { setup, teardown } from '../src';

describe.skip('modifiers with pretty format in the browser', () => {
  afterEach(() => {
    teardown();
  });

  test('prints a log with a timer', () => {
    vi.useFakeTimers();
    console.log = vi.fn();

    adze.label('timer').time.log('Test timer.');
    adze.label('timer').timeEnd.log('Test timer.');

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[timer] ',
      'Test timer.'
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[timer] (Time elapsed: 0s 0ms)',
      'Test timer.'
    );
  });
});
