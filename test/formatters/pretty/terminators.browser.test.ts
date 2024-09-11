import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { LevelConfiguration, setup, teardown } from '../../../src';

/**
 * @vitest-environment jsdom
 */

describe('terminators with pretty format in the browser', () => {
  afterEach(() => {
    teardown();
  });

  test('prints a log with level of alert', () => {
    console.error = vi.fn();
    adze.alert('This is an alert log.');
    expect(console.error).toHaveBeenCalledWith(
      '%c Alert',
      'padding-right: 24px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;',
      'This is an alert log.'
    );
  });

  test('prints a log with level of error', () => {
    console.error = vi.fn();
    adze.error('This is an error log.');
    expect(console.error).toHaveBeenCalledWith(
      '%c Error',
      'padding-right: 24px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;',
      'This is an error log.'
    );
  });

  test('prints a log with level of warn', () => {
    console.warn = vi.fn();
    adze.warn('This is a warn log.');
    expect(console.warn).toHaveBeenCalledWith(
      '%c Warn',
      'font-size: 12px; border-radius: 4px;  background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: 30px;',
      'This is a warn log.'
    );
  });

  test('prints a log with level of info', () => {
    console.info = vi.fn();
    adze.info('This is an info log.');
    expect(console.info).toHaveBeenCalledWith(
      '%c Info',
      'padding-right: 44px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #d8ebff, #b2d7ff); color: #465464; border-color: #96b5d7;',
      'This is an info log.'
    );
  });

  test('prints a log with level of fail', () => {
    console.info = vi.fn();
    adze.fail('This is a fail log.');
    expect(console.info).toHaveBeenCalledWith(
      '%c Fail',
      'padding-right: 44px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #ffe8e8, #ffd1d1); color: #a4000f; border-color: #e3bbbb;',
      'This is a fail log.'
    );
  });

  test('prints a log with level of success', () => {
    console.info = vi.fn();
    adze.success('This is a success log.');
    expect(console.info).toHaveBeenCalledWith(
      '%c Success',
      'font-size: 12px; border-radius: 4px; padding-right: 22px; background: linear-gradient(to right, #e6f6e4, #ceedc9); color: #4e594d; border-color: #b7d1b3;',
      'This is a success log.'
    );
  });

  test('prints a log with level of log', () => {
    console.log = vi.fn();

    adze.log('This is a log log.');
    expect(console.log).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      'This is a log log.'
    );
  });

  test('prints a log with level of debug', () => {
    console.debug = vi.fn();
    setup({ activeLevel: 'debug' });
    adze.debug('This is a debug log.');
    expect(console.debug).toHaveBeenCalledWith(
      '%c Debug',
      'font-size: 12px; padding-right: 36px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;',
      'This is a debug log.'
    );
  });

  test('prints a log with level of verbose', () => {
    console.debug = vi.fn();
    setup({ activeLevel: 'verbose' });
    adze.verbose('This is a verbose log.');
    expect(console.debug).toHaveBeenCalledWith(
      '%c Verbose',
      'font-size: 12px; padding-right: 22px; color: #999999;',
      'This is a verbose log.'
    );
  });

  test('prints a custom log', () => {
    console.log = vi.fn();
    const leetLevel: LevelConfiguration = {
      levelName: 'leetLevel',
      level: 1337,
      method: 'log',
      style:
        'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
      terminalStyle: ['white', 'bgMagenta'],
      emoji: '👾',
    };

    setup({ activeLevel: 1337, levels: { leetLevel } });
    adze.custom('leetLevel', 'This is a custom log.');
    expect(console.log).toHaveBeenCalledWith(
      '%c LeetLevel',
      'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
      'This is a custom log.'
    );
  });
});

describe('terminators with emoji', () => {
  afterEach(() => {
    teardown();
  });

  test('prints an emoji log with level of alert', () => {
    console.error = vi.fn();
    adze.withEmoji.alert('This is an alert log.');
    expect(console.error).toHaveBeenCalledWith(
      '%c🚨 %c Alert',
      'font-size: 12px;',
      'padding-right: 24px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;',
      'This is an alert log.'
    );
  });

  test('prints an emoji log with level of error', () => {
    console.error = vi.fn();
    adze.withEmoji.error('This is an error log.');
    expect(console.error).toHaveBeenCalledWith(
      '%c🔥 %c Error',
      'font-size: 12px;',
      'padding-right: 24px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;',
      'This is an error log.'
    );
  });

  test('prints an emoji log with level of warn', () => {
    console.warn = vi.fn();
    adze.withEmoji.warn('This is a warn log.');
    expect(console.warn).toHaveBeenCalledWith(
      '%c🔔 %c Warn',
      'font-size: 12px;',
      'font-size: 12px; border-radius: 4px;  background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: 30px;',
      'This is a warn log.'
    );
  });

  test('prints an emoji log with level of info', () => {
    console.info = vi.fn();
    adze.withEmoji.info('This is an info log.');
    expect(console.info).toHaveBeenCalledWith(
      '%cℹ️ %c Info',
      'font-size: 12px;',
      'padding-right: 44px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #d8ebff, #b2d7ff); color: #465464; border-color: #96b5d7;',
      'This is an info log.'
    );
  });

  test('prints an emoji log with level of fail', () => {
    console.info = vi.fn();
    adze.withEmoji.fail('This is a fail log.');
    expect(console.info).toHaveBeenCalledWith(
      '%c❌ %c Fail',
      'font-size: 12px;',
      'padding-right: 44px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #ffe8e8, #ffd1d1); color: #a4000f; border-color: #e3bbbb;',
      'This is a fail log.'
    );
  });

  test('prints an emoji log with level of success', () => {
    console.info = vi.fn();
    adze.withEmoji.success('This is a success log.');
    expect(console.info).toHaveBeenCalledWith(
      '%c🎉 %c Success',
      'font-size: 12px;',
      'font-size: 12px; border-radius: 4px; padding-right: 22px; background: linear-gradient(to right, #e6f6e4, #ceedc9); color: #4e594d; border-color: #b7d1b3;',
      'This is a success log.'
    );
  });

  test('prints an emoji log with level of log', () => {
    console.log = vi.fn();
    adze.withEmoji.log('This is a log log.');
    expect(console.log).toHaveBeenCalledWith(
      '%c🪵 %c Log',
      'font-size: 12px;',
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      'This is a log log.'
    );
  });

  test('prints an emoji log with level of debug', () => {
    console.debug = vi.fn();
    setup({ activeLevel: 'debug' });
    adze.withEmoji.debug('This is a debug log.');
    expect(console.debug).toHaveBeenCalledWith(
      '%c🐞 %c Debug',
      'font-size: 12px;',
      'font-size: 12px; padding-right: 36px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;',
      'This is a debug log.'
    );
  });

  test('prints an emoji log with level of verbose', () => {
    console.debug = vi.fn();
    setup({ activeLevel: 'verbose' });
    adze.withEmoji.verbose('This is a verbose log.');
    expect(console.debug).toHaveBeenCalledWith(
      '%c💬 %c Verbose',
      'font-size: 12px;',
      'font-size: 12px; padding-right: 22px; color: #999999;',
      'This is a verbose log.'
    );
  });

  test('prints an emoji custom log', () => {
    console.log = vi.fn();
    const leetLevel: LevelConfiguration = {
      levelName: 'leetLevel',
      level: 1337,
      method: 'log',
      style:
        'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
      terminalStyle: ['white', 'bgMagenta'],
      emoji: '👾',
    };

    setup({ activeLevel: 1337, levels: { leetLevel } });
    adze.withEmoji.custom('leetLevel', 'This is a custom log.');
    expect(console.log).toHaveBeenCalledWith(
      '%c👾 %c LeetLevel',
      'font-size: 12px;',
      'font-size: 12px; border-radius: 4px; padding-right: 10px; background: linear-gradient(to right, #ffcafc, #ff02f2); color: #fff; border-color: #e3bbbb;',
      'This is a custom log.'
    );
  });
});
