import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { LevelConfig, setup, teardown } from '../../../src';
import { applyChalkStyles } from '../../../src/functions';
import {
  getAlertConfig,
  getDebugConfig,
  getErrorConfig,
  getFailConfig,
  getInfoConfig,
  getLogConfig,
  getSuccessConfig,
  getVerboseConfig,
  getWarnConfig,
} from '../../../src/constants';

/**
 * @vitest-environment node
 */

describe('terminators with pretty format in node stdout', () => {
  afterEach(() => {
    teardown();
  });

  test('prints a log with level of alert', () => {
    console.error = vi.fn();
    const chalkStyles = getAlertConfig().terminalStyle;
    adze.alert('This is an alert log.');
    expect(console.error).toHaveBeenCalledWith(
      applyChalkStyles(' Alert    ', chalkStyles),
      'This is an alert log.'
    );
  });

  test('prints a log with level of error', () => {
    console.error = vi.fn();
    const chalkStyles = getErrorConfig().terminalStyle;
    adze.error('This is an error log.');
    expect(console.error).toHaveBeenCalledWith(
      applyChalkStyles(' Error    ', chalkStyles),
      'This is an error log.'
    );
  });

  test('prints a log with level of warn', () => {
    console.warn = vi.fn();
    const chalkStyles = getWarnConfig().terminalStyle;
    adze.warn('This is a warn log.');
    expect(console.warn).toHaveBeenCalledWith(
      applyChalkStyles(' Warn     ', chalkStyles),
      'This is a warn log.'
    );
  });

  test('prints a log with level of info', () => {
    console.info = vi.fn();
    const chalkStyles = getInfoConfig().terminalStyle;
    adze.info('This is an info log.');
    expect(console.info).toHaveBeenCalledWith(
      applyChalkStyles(' Info     ', chalkStyles),
      'This is an info log.'
    );
  });

  test('prints a log with level of fail', () => {
    console.info = vi.fn();
    const chalkStyles = getFailConfig().terminalStyle;
    adze.fail('This is a fail log.');
    expect(console.info).toHaveBeenCalledWith(
      applyChalkStyles(' Fail     ', chalkStyles),
      'This is a fail log.'
    );
  });

  test('prints a log with level of success', () => {
    console.info = vi.fn();
    const chalkStyles = getSuccessConfig().terminalStyle;
    adze.success('This is a success log.');
    expect(console.info).toHaveBeenCalledWith(
      applyChalkStyles(' Success  ', chalkStyles),
      'This is a success log.'
    );
  });

  test('prints a log with level of log', () => {
    console.log = vi.fn();
    const chalkStyles = getLogConfig().terminalStyle;
    adze.log('This is a log log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', chalkStyles),
      'This is a log log.'
    );
  });

  test('prints a log with level of debug', () => {
    console.debug = vi.fn();
    setup({ activeLevel: 'debug' });
    const chalkStyles = getDebugConfig().terminalStyle;
    adze.debug('This is a debug log.');
    expect(console.debug).toHaveBeenCalledWith(
      applyChalkStyles(' Debug    ', chalkStyles),
      'This is a debug log.'
    );
  });

  test('prints a log with level of verbose', () => {
    console.debug = vi.fn();
    setup({ activeLevel: 'verbose' });
    const chalkStyles = getVerboseConfig().terminalStyle;
    adze.verbose('This is a verbose log.');
    expect(console.debug).toHaveBeenCalledWith(
      applyChalkStyles(' Verbose  ', chalkStyles),
      'This is a verbose log.'
    );
  });

  test('prints a custom log', () => {
    console.log = vi.fn();
    const leetLevel: LevelConfig = {
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
      applyChalkStyles(' LeetLevel ', leetLevel.terminalStyle),
      'This is a custom log.'
    );
  });
});

describe('terminators with emoji', () => {
  afterEach(() => {
    teardown();
  });

  test('prints a log with level of alert with an emoji', () => {
    console.error = vi.fn();
    const chalkStyles = getAlertConfig().terminalStyle;
    adze.withEmoji.alert('This is an alert log.');
    expect(console.error).toHaveBeenCalledWith(
      applyChalkStyles('🚨 Alert     ', chalkStyles),
      'This is an alert log.'
    );
  });

  test('prints a log with level of error with an emoji', () => {
    console.error = vi.fn();
    const chalkStyles = getErrorConfig().terminalStyle;
    adze.withEmoji.error('This is an error log.');
    expect(console.error).toHaveBeenCalledWith(
      applyChalkStyles('🔥 Error     ', chalkStyles),
      'This is an error log.'
    );
  });

  test('prints a log with level of warn with an emoji', () => {
    console.warn = vi.fn();
    const chalkStyles = getWarnConfig().terminalStyle;
    adze.withEmoji.warn('This is a warn log.');
    expect(console.warn).toHaveBeenCalledWith(
      applyChalkStyles('🔔 Warn      ', chalkStyles),
      'This is a warn log.'
    );
  });

  test('prints a log with level of info with an emoji', () => {
    console.info = vi.fn();
    const chalkStyles = getInfoConfig().terminalStyle;
    adze.withEmoji.info('This is an info log.');
    expect(console.info).toHaveBeenCalledWith(
      applyChalkStyles('ℹ️ Info      ', chalkStyles),
      'This is an info log.'
    );
  });

  test('prints a log with level of fail with an emoji', () => {
    console.info = vi.fn();
    const chalkStyles = getFailConfig().terminalStyle;
    adze.withEmoji.fail('This is a fail log.');
    expect(console.info).toHaveBeenCalledWith(
      applyChalkStyles('❌ Fail      ', chalkStyles),
      'This is a fail log.'
    );
  });

  test('prints a log with level of success with an emoji', () => {
    console.info = vi.fn();
    const chalkStyles = getSuccessConfig().terminalStyle;
    adze.withEmoji.success('This is a success log.');
    expect(console.info).toHaveBeenCalledWith(
      applyChalkStyles('🎉 Success   ', chalkStyles),
      'This is a success log.'
    );
  });

  test('prints a log with level of log with an emoji', () => {
    console.log = vi.fn();
    const chalkStyles = getLogConfig().terminalStyle;
    adze.withEmoji.log('This is a log log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles('🪵 Log       ', chalkStyles),
      'This is a log log.'
    );
  });

  test('prints a log with level of debug with an emoji', () => {
    console.debug = vi.fn();
    setup({ activeLevel: 'debug' });
    const chalkStyles = getDebugConfig().terminalStyle;
    adze.withEmoji.debug('This is a debug log.');
    expect(console.debug).toHaveBeenCalledWith(
      applyChalkStyles('🐞 Debug     ', chalkStyles),
      'This is a debug log.'
    );
  });

  test('prints a log with level of verbose with an emoji', () => {
    console.debug = vi.fn();
    setup({ activeLevel: 'verbose' });
    const chalkStyles = getVerboseConfig().terminalStyle;
    adze.withEmoji.verbose('This is a verbose log.');
    expect(console.debug).toHaveBeenCalledWith(
      applyChalkStyles('💬 Verbose   ', chalkStyles),
      'This is a verbose log.'
    );
  });

  test('prints a custom log with an emoji', () => {
    console.log = vi.fn();
    const leetLevel: LevelConfig = {
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
      applyChalkStyles('👾 LeetLevel ', leetLevel.terminalStyle),
      'This is a custom log.'
    );
  });
});
