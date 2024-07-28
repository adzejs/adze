import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { teardown } from '../src';

describe('mapped diagnostic context', () => {
  afterEach(() => {
    teardown();
  });

  test('records context throughout a thread and dumps it', () => {
    console.log = vi.fn();

    function add(a: number, b: number) {
      const answer = a + b;
      adze.label('test').thread('added', { a, b, answer });
      return answer;
    }

    function subtract(x: number, y: number) {
      const answer = x - y;
      adze.label('test').thread('subtracted', { x, y, answer });
      return answer;
    }

    add(1, 2);
    subtract(4, 3);

    adze.label('test').dump.log('This log contains output from MDC thread.');
    expect(console.log).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[test] ',
      'This log contains output from MDC thread.',
      {
        added: {
          a: 1,
          answer: 3,
          b: 2,
        },
        subtracted: {
          answer: 1,
          x: 4,
          y: 3,
        },
      }
    );
  });

  test('closing a thread resets the context', () => {
    console.log = vi.fn();

    adze.label('test').thread('x', { hello: 'world' });

    adze.label('test').dump.log('This log contains output from MDC thread.');
    adze.label('test').closeThread.log('This log closes an MDC thread.');
    adze.label('test').dump.log('Nothing is dumped.');

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[test] ',
      'This log contains output from MDC thread.',
      {
        x: {
          hello: 'world',
        },
      }
    );

    expect(console.log).toHaveBeenNthCalledWith(
      2,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[test] ',
      'This log closes an MDC thread.'
    );

    expect(console.log).toHaveBeenNthCalledWith(
      3,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[test] ',
      'Nothing is dumped.'
    );
  });
});
