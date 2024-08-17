import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { Middleware, ModifierData, ModifierName, setup, teardown } from '../src';

// export interface Middleware {
//   /**
//    * Hook that is called during construction of a log instance.
//    */
//   constructed?: (log: Log) => void;
//   /**
//    * Hook that is called just before a log is terminated.
//    */
//   beforeTerminated?: (log: Log, terminator: string, args: unknown[]) => void;
//   /**
//    * Hook that is called just before a modifier is applied to a log instance.
//    */
//   beforeModifierApplied?: (log: Log, data: ModifierData) => void;
//   /**
//    * Hook that is called just after a modifier is applied to a log instance.
//    */
//   afterModifierApplied?: (log: Log, data: ModifierData) => void;
//   /**
//    * Hook that is called just before a formatter is applied to a log instance to format a message.
//    */
//   beforeFormatApplied?: (log: Log, message: unknown[]) => void;
//   /**
//    * Hook that is called just after a formatter is applied to a log instance to format a message.
//    */
//   afterFormatApplied?: (log: Log, message: unknown[]) => void;
//   /**
//    * Hook that is called just before a log instance message is printed to the browser or console.
//    */
//   beforePrint?: (log: Log) => void;
//   /**
//    * Hook that is called just when a log instance has completed termination.
//    */
//   afterTerminated?: (log: Log) => void;
// }

describe('middleware', () => {
  afterEach(() => {
    teardown();
  });

  test('constructed hook fires', () => {
    console.log = vi.fn();
    const func = vi.fn();

    class TestMiddleware extends Middleware {
      constructed(log: adze) {
        func();
        expect(log).toBeDefined();
        expect(log.data).toBeUndefined();
      }
    }
    setup({
      middleware: [new TestMiddleware()],
    });

    adze.meta({ foo: 'bar' }).log('Test log.');
    expect(console.log).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('beforeTerminated hook fires', () => {
    console.log = vi.fn();
    const func = vi.fn();

    class TestMiddleware extends Middleware {
      beforeTerminated(log: adze) {
        func();
        expect(log).toBeDefined();
        expect(log.data).toBeUndefined();
      }
    }
    setup({
      middleware: [new TestMiddleware()],
    });

    adze.meta({ foo: 'bar' }).log('Test log.');
    expect(console.log).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('beforeModifierApplied hook fires', () => {
    console.log = vi.fn();
    const func = vi.fn();

    class TestMiddleware extends Middleware {
      beforeModifierApplied(log: adze, name: ModifierName, data: ModifierData) {
        func();
        expect(name).toBe('meta');
        expect(log).toBeDefined();
        expect(log.configuration.meta).toStrictEqual({
          foo: 'bar',
        });
      }
    }
    setup({
      middleware: [new TestMiddleware()],
    });

    adze.meta({ foo: 'bar' }).log('Test log.');
    expect(console.log).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
