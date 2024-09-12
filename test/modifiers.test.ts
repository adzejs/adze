import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { setup, teardown } from '../src';

describe('modifiers with pretty format in the browser', () => {
  afterEach(() => {
    teardown();
  });

  test('adds meta data to the log', () => {
    console.log = vi.fn();
    const ctxt = setup();
    ctxt.addListener('log', (log) => {
      if (log.data) {
        expect(log.data.meta).toEqual({ foo: 'bar' });
      } else {
        throw new Error('Failed to get log meta data.');
      }
    });
    adze.meta({ foo: 'bar' }).log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      'Test log.'
    );
  });

  test('log does not print when marked as silent', () => {
    console.log = vi.fn();
    const ctxt = setup();
    ctxt.addListener('log', (log) => {
      if (log.data) {
        expect(log.data.message).toStrictEqual([
          '%c Log',
          'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
          'Test log.',
        ]);
      } else {
        throw new Error('Failed to get log meta data.');
      }
    });
    adze.silent.log('Test log.');
    expect(console.log).not.toHaveBeenCalled();
  });

  test('timestamp is formatted as ISO-8601 by default', () => {
    const fn = vi.fn();
    console.log = fn;

    adze.timestamp.log('Log with ISO-8601 timestamp.');

    expect(console.log).toHaveBeenCalledTimes(1);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const timestamp = fn.mock.calls[0][2];
    expect(timestamp).toMatch(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d/);
  });
});
