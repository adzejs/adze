import { Configuration, LevelConfiguration } from './_types';
import CommonFormatter from './formatters/common';
import JsonFormatter from './formatters/json';
import PrettyFormatter from './formatters/pretty';
import StandardFormatter from './formatters/standard/standard';
import { isFirefox } from './functions';

/**
 * All valid log terminators. These are the terminators that can be called to end a log chain.
 */
export const terminators = [
  'alert',
  'error',
  'warn',
  'info',
  'fail',
  'success',
  'log',
  'debug',
  'verbose',
  'custom',
  'clear',
  'clr',
  'close',
  'thread',
] as const;

/**
 * All valid default log levels.
 */
export const levels = [
  'alert',
  'error',
  'warn',
  'info',
  'fail',
  'success',
  'log',
  'debug',
  'verbose',
] as const;

/**
 * Console methods that have alternative behaviors and take arguments and can be printed with a styled leader.
 */
export const specialMethodsWithArgsAndLeader = ['group', 'groupCollapsed'] as const;

/**
 * Console methods that have alternative behaviors and take arguments.
 */
export const specialMethodsWithArgs = [
  'dir',
  'dirxml',
  'table',
  ...specialMethodsWithArgsAndLeader,
] as const;

/**
 * Methods that accept at least one argument as the first argument.
 */
export const methodsWithArgs = [
  'error',
  'warn',
  'info',
  'log',
  'debug',
  ...specialMethodsWithArgs,
] as const;

/**
 * Console methods that have alternative behaviors and do not take arguments.
 */
export const specialMethodsWithoutArgs = ['clear', 'groupEnd'] as const;

/**
 * All uncommon standard methods.
 */
export const specialMethods = [...specialMethodsWithArgs, ...specialMethodsWithoutArgs] as const;

/**
 * All valid native browser methods utilized by Adze.
 */
export const methods = [...methodsWithArgs, ...specialMethodsWithoutArgs] as const;

/**
 * All valid log modifier names.
 */
export const modifiers = [
  'assert',
  'count',
  'countClear',
  'countReset',
  'closeThread',
  'dir',
  'dirxml',
  'dump',
  'format',
  'group',
  'groupCollapsed',
  'groupEnd',
  'if',
  'label',
  'meta',
  'namespace',
  'silent',
  'table',
  'time',
  'timeEnd',
  'timeNow',
  'timestamp',
  'trace',
  'withEmoji',
] as const;

/**
 * All valid log formats. These determine the style that is emitted.
 */
export const formats = ['pretty', 'prettyEmoji', 'json', 'standard', 'common', 'default'] as const;

export const defaultConfiguration: Configuration = {
  activeLevel: 'log',
  autoSerialize: true,
  cache: false,
  cacheSize: 300,
  dump: false,
  format: 'pretty',
  meta: {},
  middleware: [],
  showTimestamp: false,
  silent: false,
  withEmoji: false,
  levels: {
    alert: getAlertConfig(),
    error: getErrorConfig(),
    warn: getWarnConfig(),
    info: getInfoConfig(),
    fail: getFailConfig(),
    success: getSuccessConfig(),
    log: getLogConfig(),
    debug: getDebugConfig(),
    verbose: getVerboseConfig(),
  },
  formatters: {
    default: PrettyFormatter,
    pretty: PrettyFormatter,
    standard: StandardFormatter,
    common: CommonFormatter,
    json: JsonFormatter,
  },
};

/**
 * Default log configuration for alert logs.
 */
export function getAlertConfig(overrides: Partial<LevelConfiguration> = {}): LevelConfiguration {
  return {
    levelName: 'alert',
    level: 0,
    style: `padding-right: 24px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;`,
    terminalStyle: ['white', 'bold', 'bgRed'],
    method: 'error',
    emoji: '🚨',
    ...overrides,
  };
}

/**
 * Default log configuration for error logs.
 */
export function getErrorConfig(overrides: Partial<LevelConfiguration> = {}): LevelConfiguration {
  return {
    levelName: 'error',
    level: 1,
    style: `padding-right: 24px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
    terminalStyle: ['white', 'bgRed'],
    method: 'error',
    emoji: '🔥',
    ...overrides,
  };
}

/**
 * Default log configuration for warn logs.
 */
export function getWarnConfig(overrides: Partial<LevelConfiguration> = {}): LevelConfiguration {
  return {
    levelName: 'warn',
    level: 2,
    style: `font-size: 12px; border-radius: 4px;  background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ${isFirefox() ? '44px' : '30px'};`,
    terminalStyle: ['white', 'bgYellow'],
    method: 'warn',
    emoji: '🔔',
    ...overrides,
  };
}

/**
 * Default log configuration for info logs.
 */
export function getInfoConfig(overrides: Partial<LevelConfiguration> = {}): LevelConfiguration {
  return {
    levelName: 'info',
    level: 3,
    style: `padding-right: 44px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #d8ebff, #b2d7ff); color: #465464; border-color: #96b5d7;`,
    terminalStyle: ['white', 'bgBlue'],
    method: 'info',
    emoji: 'ℹ️',
    ...overrides,
  };
}

/**
 * Default log configuration for fail logs.
 */
export function getFailConfig(overrides: Partial<LevelConfiguration> = {}): LevelConfiguration {
  return {
    levelName: 'fail',
    level: 4,
    style: `padding-right: 44px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #ffe8e8, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
    terminalStyle: ['white', 'bgRed'],
    method: 'info',
    emoji: '❌',
    ...overrides,
  };
}

/**
 * Default log configuration for success logs.
 */
export function getSuccessConfig(overrides: Partial<LevelConfiguration> = {}): LevelConfiguration {
  return {
    levelName: 'success',
    level: 5,
    style:
      'font-size: 12px; border-radius: 4px; padding-right: 22px; background: linear-gradient(to right, #e6f6e4, #ceedc9); color: #4e594d; border-color: #b7d1b3;',
    terminalStyle: ['white', 'bgGreen'],
    method: 'info',
    emoji: '🎉',
    ...overrides,
  };
}

/**
 * Default log configuration for log logs.
 */
export function getLogConfig(overrides: Partial<LevelConfiguration> = {}): LevelConfiguration {
  return {
    levelName: 'log',
    level: 6,
    style:
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
    terminalStyle: ['white', 'bgBlackBright'],
    method: 'log',
    emoji: '🪵',
    ...overrides,
  };
}

/**
 * Default log configuration for debug logs.
 */
export function getDebugConfig(overrides: Partial<LevelConfiguration> = {}): LevelConfiguration {
  return {
    levelName: 'debug',
    level: 7,
    style:
      'font-size: 12px; padding-right: 36px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;',
    terminalStyle: ['white', 'bgBlack'],
    method: 'debug',
    emoji: '🐞',
    ...overrides,
  };
}

/**
 * Default log configuration for verbose logs.
 */
export function getVerboseConfig(overrides: Partial<LevelConfiguration> = {}): LevelConfiguration {
  return {
    levelName: 'verbose',
    level: 8,
    style: 'font-size: 12px; padding-right: 22px; color: #999999;',
    terminalStyle: ['black', 'italic'],
    method: 'debug',
    emoji: '💬',
    ...overrides,
  };
}
