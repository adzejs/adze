import { Env } from '../env';
import { Defaults } from '../_contracts';

export const defaults: Defaults = {
  logLevel: 8,
  useEmoji: false,
  captureStacktrace: false,
  terminalColorFidelity: 1,
  unstyled: false,
  baseStyle:
    'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;',
  customLevels: {},
  machineReadable: false,
  meta: {},
  logLevels: {
    alert: {
      level: 0,
      style: `padding-right: ${
        Env.isChrome() ? '29' : '26'
      }px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;`,
      terminal: ['white', 'bold', 'bgRed'],
      method: 'error',
      emoji: '🚨',
    },
    error: {
      level: 1,
      style: `padding-right: ${
        Env.isChrome() ? '29' : '26'
      }px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
      terminal: ['bgRed', 'white'],
      method: 'error',
      emoji: '🔥',
    },
    warn: {
      level: 2,
      style: `background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ${
        Env.isChrome() ? '34' : '44'
      }px;`,
      terminal: ['bgYellow', 'gray'],
      method: 'warn',
      emoji: '🔔',
    },
    info: {
      level: 3,
      style: `padding-right: ${
        Env.isSafari() ? '49' : '44'
      }px; background: linear-gradient(to right, #fff, #b2d7ff); color: #465464; border-color: #96b5d7;`,
      terminal: ['bgBlue', 'white'],
      method: 'info',
      emoji: '📬',
    },
    fail: {
      level: 4,
      style: `padding-right: ${
        Env.isChrome() ? '43' : '44'
      }px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
      terminal: ['bgRed', 'white'],
      method: 'info',
      emoji: '❌',
    },
    success: {
      level: 5,
      style:
        'padding-right: 26px; background: linear-gradient(to right, #fff, #ceedc9); color: #4e594d; border-color: #b7d1b3;',
      terminal: ['bgGreen', 'gray'],
      method: 'info',
      emoji: '🎉',
    },
    log: {
      level: 6,
      style: `padding-right: 50px; background: linear-gradient(to right, #fff, #d9dce0); color: #333435; border-color: #bfc1c5;`,
      terminal: ['bgGray', 'white'],
      method: 'log',
      emoji: '📌',
    },
    debug: {
      level: 7,
      style:
        'padding-right: 38px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;',
      terminal: ['bgBlack', 'white'],
      method: 'debug',
      emoji: '🐞',
    },
    verbose: {
      level: 8,
      style:
        'padding-right: 26px; border-color: 1px solid #d9dce0; color: #999999; border-color: #cbc9c9;',
      terminal: ['italic', 'white'],
      method: 'debug',
      emoji: '💤',
    },
  },
  filters: {
    hideAll: false,
  },
};
