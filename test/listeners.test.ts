import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { setup, teardown } from '../src';

describe('log filtering', () => {
  afterEach(() => {
    teardown();
  });

  test('listener fires when a log matches the associated level filter', () => {
    console.log = vi.fn();
    const store = setup();
    store.addListener('*', (log) => {
      expect(log.data?.levelName).toBe('log');
      expect(log.data?.level).toBe(6);
    });
    adze.log('Testing');
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  test('listener fires for multiple levels when a log matches the associated level filter', () => {
    console.error = vi.fn();
    console.warn = vi.fn();
    console.info = vi.fn();
    console.log = vi.fn();
    console.debug = vi.fn();

    const listener = vi.fn();
    const store = setup();
    store.addListener([2, 4, 6], listener);
    adze.alert('Testing');
    adze.error('Testing');
    adze.warn('Testing');
    adze.info('Testing');
    adze.fail('Testing');
    adze.success('Testing');
    adze.log('Testing');
    adze.debug('Testing');
    adze.verbose('Testing');
    expect(listener).toHaveBeenCalledTimes(3);
  });

  test('listener fires for a single level when passed a level filter array with a single item', () => {
    console.error = vi.fn();
    console.warn = vi.fn();
    console.info = vi.fn();
    console.log = vi.fn();
    console.debug = vi.fn();

    const listener = vi.fn();
    const store = setup();
    store.addListener([1], listener);
    adze.alert('Testing');
    adze.error('Testing');
    adze.warn('Testing');
    adze.info('Testing');
    adze.fail('Testing');
    adze.success('Testing');
    adze.log('Testing');
    adze.debug('Testing');
    adze.verbose('Testing');
    expect(listener).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledTimes(2); // 2 times because "alert" also uses error
  });

  test('listener does not fire when a log does not match the associated level filter', () => {
    console.log = vi.fn();
    const listener = vi.fn();
    const store = setup();
    store.addListener('info', listener);
    adze.log('Testing');
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(listener).not.toHaveBeenCalled();
  });

  test('listener does not fire after being removed', () => {
    console.log = vi.fn();
    console.debug = vi.fn();
    const listener = vi.fn();
    const store = setup({ activeLevel: 8 });
    const listenerId = store.addListener([6, 7], listener);
    adze.log('Testing');
    adze.debug('Testing');
    store.removeListener(listenerId);
    adze.log('Testing again.');
    adze.debug('Testing again.');
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.debug).toHaveBeenCalledTimes(2);
    expect(listener).toHaveBeenCalledTimes(2);
  });
});
