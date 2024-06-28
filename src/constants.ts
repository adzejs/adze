import { Configuration, Format, LevelConfig } from './_types';
import { isChrome, isSafari } from './functions';

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
 * Methods that accept at least one argument as the first argument.
 */
export const commonMethods = ['error', 'warn', 'info', 'log', 'debug'] as const;

/**
 * Console methods that have alternative behaviors.
 */
export const specialMethods = [
  'dir',
  'dirxml',
  'table',
  'trace',
  'clear',
  'group',
  'groupCollapsed',
  'groupEnd',
] as const;

/**
 * All valid native browser methods utilized by Adze.
 */
export const methods = [...commonMethods, ...specialMethods] as const;

/**
 * All valid log formats. These determine the style that is emitted.
 */
export const formats = ['pretty', 'prettyEmoji', 'json', 'common', 'default'] as const;

export const defaultConfiguration: Configuration = {
  activeLevel: 'log',
  cache: false,
  dump: false,
  format: 'pretty',
  meta: {},
  middleware: [],
  showTimestamp: true,
  silent: false,
  withEmoji: false,
};

/**
 * Default log configuration for alert logs.
 */
export function getAlertConfig(overrides: Partial<LevelConfig> = {}): LevelConfig {
  return {
    level: 'alert',
    style: `padding-right: ${
      isChrome() ? '32' : '26'
    }px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;`,
    terminalStyle: ['white', 'bold', 'bgRed'],
    method: 'error',
    emoji: '🚨',
    ...overrides,
  };
}

/**
 * Default log configuration for error logs.
 */
export function getErrorConfig(overrides: Partial<LevelConfig> = {}): LevelConfig {
  return {
    level: 'error',
    style: `padding-right: ${
      isChrome() ? '32' : '26'
    }px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
    terminalStyle: ['white', 'bgRed'],
    method: 'error',
    emoji: '🔥',
    ...overrides,
  };
}

/**
 * Default log configuration for warn logs.
 */
export function getWarnConfig(overrides: Partial<LevelConfig> = {}): LevelConfig {
  return {
    level: 'warn',
    style: `font-size: 12px; border-radius: 4px;  background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ${
      isChrome() ? '38' : '44'
    }px;`,
    terminalStyle: ['gray', 'bgYellow'],
    method: 'warn',
    emoji: '🔔',
    ...overrides,
  };
}

/**
 * Default log configuration for info logs.
 */
export function getInfoConfig(overrides: Partial<LevelConfig> = {}): LevelConfig {
  return {
    level: 'info',
    style: `padding-right: ${
      isSafari() ? '49' : '52'
    }px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #d8ebff, #b2d7ff); color: #465464; border-color: #96b5d7;`,
    terminalStyle: ['white', 'bgBlue'],
    method: 'info',
    emoji: '📬',
    ...overrides,
  };
}

/**
 * Default log configuration for fail logs.
 */
export function getFailConfig(overrides: Partial<LevelConfig> = {}): LevelConfig {
  return {
    level: 'fail',
    style: `padding-right: ${
      isChrome() ? '52' : '44'
    }px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #ffe8e8, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
    terminalStyle: ['white', 'bgRed'],
    method: 'info',
    emoji: '❌',
    ...overrides,
  };
}

/**
 * Default log configuration for success logs.
 */
export function getSuccessConfig(overrides: Partial<LevelConfig> = {}): LevelConfig {
  return {
    level: 'success',
    style:
      'font-size: 12px; border-radius: 4px; padding-right: 30px; background: linear-gradient(to right, #e6f6e4, #ceedc9); color: #4e594d; border-color: #b7d1b3;',
    terminalStyle: ['gray', 'bgGreen'],
    method: 'info',
    emoji: '🎉',
    ...overrides,
  };
}

/**
 * Default log configuration for log logs.
 */
export function getLogConfig(overrides: Partial<LevelConfig> = {}): LevelConfig {
  return {
    level: 'log',
    style: `font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;`,
    terminalStyle: ['white', 'bgGray'],
    method: 'log',
    emoji: '📌',
    ...overrides,
  };
}

/**
 * Default log configuration for debug logs.
 */
export function getDebugConfig(overrides: Partial<LevelConfig> = {}): LevelConfig {
  return {
    level: 'debug',
    style:
      'font-size: 12px; padding-right: 44px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;',
    terminalStyle: ['white', 'bgBlack'],
    method: 'debug',
    emoji: '🐞',
    ...overrides,
  };
}

/**
 * Default log configuration for verbose logs.
 */
export function getVerboseConfig(overrides: Partial<LevelConfig> = {}): LevelConfig {
  return {
    level: 'verbose',
    style: 'font-size: 12px; padding-right: 31px; color: #999999;',
    terminalStyle: ['white', 'italic'],
    method: 'debug',
    emoji: '💤',
    ...overrides,
  };
}
