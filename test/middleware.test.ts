import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { Middleware, ModifierData, ModifierName, setup, teardown } from '../src';

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
        expect(data).toBeDefined();
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

  test('afterModifierApplied hook fires', () => {
    console.log = vi.fn();
    const func = vi.fn();

    class TestMiddleware extends Middleware {
      afterModifierApplied(log: adze, name: ModifierName, data: ModifierData) {
        func();
        expect(name).toBe('namespace');
        expect(log).toBeDefined();
        expect(data).toBeDefined();
        expect(data.namespace).toStrictEqual(['foo', 'bar']);
      }
    }
    setup({
      middleware: [new TestMiddleware()],
    });

    adze.ns('foo', 'bar').log('Test log.');
    expect(console.log).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('beforeFormatApplied hook fires', () => {
    console.log = vi.fn();
    const func = vi.fn();

    class TestMiddleware extends Middleware {
      beforeFormatApplied(log: adze, format: string) {
        func();
        expect(format).toBe('standard');
        expect(log.configuration.format).toBe('standard');
      }
    }
    setup({
      format: 'standard',
      middleware: [new TestMiddleware()],
    });

    adze.ns('foo', 'bar').log('Test log.');
    expect(console.log).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('afterFormatApplied hook fires', () => {
    console.log = vi.fn();
    const func = vi.fn();

    class TestMiddleware extends Middleware {
      afterFormatApplied(log: adze, format: string) {
        func();
        expect(format).toBe('standard');
        expect(log.configuration.format).toBe('standard');
      }
    }
    setup({
      format: 'standard',
      middleware: [new TestMiddleware()],
    });

    adze.ns('foo', 'bar').log('Test log.');
    expect(console.log).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('beforePrint hook fires', () => {
    vi.useFakeTimers();
    console.log = vi.fn();
    const func = vi.fn();

    class TestMiddleware extends Middleware {
      beforePrint(log: adze) {
        func();
        expect(log.data?.message).toStrictEqual([
          '[2024-08-17T12:01:01-04:00] LOG: foo/bar Test log. ',
        ]);
        expect(log).toBeDefined();
      }
    }
    setup({
      format: 'standard',
      timestampFormatter: () => '2024-08-17T12:01:01-04:00',
      middleware: [new TestMiddleware()],
    });

    adze.ns('foo', 'bar').log('Test log.');
    expect(console.log).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('beforeTerminated hook fires', () => {
    vi.useFakeTimers();
    console.log = vi.fn();
    const func = vi.fn();

    class TestMiddleware extends Middleware {
      beforeTerminated(log: adze) {
        func();
        expect(log).toBeDefined();
      }
    }
    setup({
      format: 'standard',
      timestampFormatter: () => '2024-08-17T12:01:01-04:00',
      middleware: [new TestMiddleware()],
    });

    adze.ns('foo', 'bar').log('Test log.');
    expect(console.log).toHaveBeenCalledWith('[2024-08-17T12:01:01-04:00] LOG: foo/bar Test log. ');
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('afterTerminated hook fires', () => {
    vi.useFakeTimers();
    console.log = vi.fn();
    const func = vi.fn();

    class TestMiddleware extends Middleware {
      afterTerminated(log: adze) {
        func();
        expect(log.data?.message).toStrictEqual([
          '[2024-08-17T12:01:01-04:00] LOG: foo/bar Test log. ',
        ]);
        expect(log).toBeDefined();
      }
    }
    setup({
      format: 'standard',
      timestampFormatter: () => '2024-08-17T12:01:01-04:00',
      middleware: [new TestMiddleware()],
    });

    adze.ns('foo', 'bar').log('Test log.');
    expect(console.log).toHaveBeenCalledWith('[2024-08-17T12:01:01-04:00] LOG: foo/bar Test log. ');
    expect(func).toHaveBeenCalledTimes(1);
  });
});
