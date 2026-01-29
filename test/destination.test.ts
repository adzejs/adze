import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { setup, teardown } from '../src';
import Log from '../src/log';

/**
 * @vitest-environment node
 */

describe('Destination Callback', () => {
  afterEach(() => {
    delete globalThis.$ADZE_ENV;
    teardown();
  });

  test('destination callback is called in addition to console', () => {
    const destinationFn = vi.fn();
    console.log = vi.fn();

    setup({
      destination: destinationFn,
    });

    adze.log('Test message');

    // Both destination callback and console should be called
    expect(destinationFn).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalled();
  });

  test('destination callback receives correct parameters', () => {
    const destinationFn =
      vi.fn<Parameters<(log: Log, terminator: string, args: unknown[]) => void>>();

    setup({
      destination: destinationFn,
    });

    adze.log('Test message', 'with args');

    expect(destinationFn).toHaveBeenCalledTimes(1);
    const call = destinationFn.mock.calls[0];
    const log = call[0] as Log;
    const terminator = call[1] as string;
    const args = call[2] as unknown[];

    // Check that log is a Log instance with data
    expect(log).toBeDefined();
    expect(log.data).toBeDefined();

    // Check terminator
    expect(terminator).toBe('log');

    // Check args
    expect(args).toEqual(['Test message', 'with args']);
  });

  test('destination callback works with different log levels', () => {
    const destinationFn = vi.fn();
    console.error = vi.fn();
    console.warn = vi.fn();
    console.info = vi.fn();

    setup({
      destination: destinationFn,
    });

    adze.error('Error message');
    adze.warn('Warning message');
    adze.info('Info message');

    // Destination should be called 3 times
    expect(destinationFn).toHaveBeenCalledTimes(3);

    // Console methods should also be called
    expect(console.error).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalled();
    expect(console.info).toHaveBeenCalled();

    // Check terminators
    expect(destinationFn.mock.calls[0][1]).toBe('error');
    expect(destinationFn.mock.calls[1][1]).toBe('warn');
    expect(destinationFn.mock.calls[2][1]).toBe('info');
  });

  test('destination callback can access formatted log data', () => {
    const destinationFn =
      vi.fn<Parameters<(log: Log, terminator: string, args: unknown[]) => void>>();

    setup({
      destination: destinationFn,
    });

    adze.namespace('test-namespace').log('Test message');

    expect(destinationFn).toHaveBeenCalledTimes(1);
    const call = destinationFn.mock.calls[0];
    const log = call[0] as Log;

    // Check log data has namespace
    expect(log).toBeDefined();
    expect(log.data).toBeDefined();
    expect(log.data?.namespace).toEqual(['test-namespace']);
  });

  test('destination callback respects silent configuration', () => {
    const destinationFn = vi.fn();

    setup({
      destination: destinationFn,
      silent: true,
    });

    adze.log('This should not call destination');

    // Destination should not be called when silent is true
    expect(destinationFn).not.toHaveBeenCalled();
  });

  test('console is used when no destination callback is provided', () => {
    console.log = vi.fn();

    setup();

    adze.log('Test message');

    // Console should be called when no destination is provided
    expect(console.log).toHaveBeenCalled();
  });

  test('destination callback works with different active levels', () => {
    const destinationFn = vi.fn();

    // First test with log level filtering
    setup({
      destination: destinationFn,
      activeLevel: 'error',
    });

    adze.log('Should not print'); // Below active level - won't call destination
    adze.error('Should print'); // At active level - will call destination

    // Only error should call destination (log level filtering happens before destination)
    expect(destinationFn).toHaveBeenCalledTimes(1);
    expect(destinationFn.mock.calls[0][1]).toBe('error');
  });

  test('local configuration can override global destination', () => {
    const globalDestination = vi.fn();
    const localDestination = vi.fn();
    console.log = vi.fn();

    // Set global destination
    const store = setup({
      destination: globalDestination,
    });

    // Use global destination
    adze.log('Uses global destination');

    // Update global configuration to use local destination
    store.configuration.destination = localDestination;
    adze.log('Uses updated destination');

    expect(globalDestination).toHaveBeenCalledTimes(1);
    expect(localDestination).toHaveBeenCalledTimes(1);
    // Console should also be called
    expect(console.log).toHaveBeenCalledTimes(2);
  });

  test('destination callback can write to custom output stream', () => {
    const customLogs: string[] = [];
    const destinationFn = (log: Log) => {
      if (log.data?.message) {
        customLogs.push(log.data.message.join(' '));
      }
    };

    setup({
      destination: destinationFn,
    });

    adze.log('First message');
    adze.warn('Second message');
    adze.error('Third message');

    expect(customLogs).toHaveLength(3);
    expect(customLogs[0]).toContain('First message');
    expect(customLogs[1]).toContain('Second message');
    expect(customLogs[2]).toContain('Third message');
  });

  test('destination callback works with modifiers like namespace and label', () => {
    const destinationFn =
      vi.fn<Parameters<(log: Log, terminator: string, args: unknown[]) => void>>();

    setup({
      destination: destinationFn,
    });

    adze.namespace('app', 'module').label('user-action').log('Action performed');

    expect(destinationFn).toHaveBeenCalledTimes(1);
    const call = destinationFn.mock.calls[0];
    const log = call[0] as Log;

    expect(log.data).toBeDefined();
    expect(log.data?.namespace).toEqual(['app', 'module']);
    expect(log.data?.label).toBeDefined();
  });

  test('destination callback is not called in test environment', () => {
    const destinationFn = vi.fn();
    globalThis.$ADZE_ENV = 'test';

    setup({
      destination: destinationFn,
    });

    adze.log('Should not call destination in test env');

    expect(destinationFn).not.toHaveBeenCalled();
  });
});
