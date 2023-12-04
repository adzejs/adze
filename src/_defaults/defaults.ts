import { Configuration, Defaults } from '../_contracts';
import { isChrome, isSafari } from '../util/env';

export function applyConfigDefaults(userCfg?: Configuration | null): Defaults {
  const defaultFilters = {
    hideAll: userCfg?.filters?.hideAll ?? false,
  };

  return {
    renderLeader: userCfg?.renderLeader ?? true,
    renderArgCount: userCfg?.renderArgCount ?? true,
    logLevel: userCfg?.logLevel ?? 8,
    useEmoji: userCfg?.useEmoji ?? false,
    captureStacktrace: userCfg?.captureStacktrace ?? false,
    terminalColorFidelity: userCfg?.terminalColorFidelity ?? 1,
    unstyled: userCfg?.unstyled ?? false,
    baseStyle:
      userCfg?.baseStyle ??
      'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;',
    customLevels: userCfg?.customLevels ?? {},
    machineReadable: userCfg?.machineReadable ?? false,
    meta: userCfg?.meta ?? {},
    logLevels: {
      alert: {
        level: userCfg?.logLevels?.alert?.level ?? 0,
        style:
          userCfg?.logLevels?.alert?.style ??
          `padding-right: ${
            isChrome() ? '29' : '26'
          }px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;`,
        terminal: userCfg?.logLevels?.alert?.terminal ?? ['white', 'bold', 'bgRed'],
        method: userCfg?.logLevels?.alert?.method ?? 'error',
        emoji: userCfg?.logLevels?.alert?.emoji ?? '🚨',
      },
      error: {
        level: userCfg?.logLevels?.error?.level ?? 1,
        style:
          userCfg?.logLevels?.error?.style ??
          `padding-right: ${
            isChrome() ? '29' : '26'
          }px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
        terminal: userCfg?.logLevels?.error?.terminal ?? ['bgRed', 'white'],
        method: userCfg?.logLevels?.error?.method ?? 'error',
        emoji: userCfg?.logLevels?.error?.emoji ?? '🔥',
      },
      warn: {
        level: userCfg?.logLevels?.warn?.level ?? 2,
        style:
          userCfg?.logLevels?.warn?.style ??
          `background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ${
            isChrome() ? '34' : '44'
          }px;`,
        terminal: userCfg?.logLevels?.warn?.terminal ?? ['bgYellow', 'gray'],
        method: userCfg?.logLevels?.warn?.method ?? 'warn',
        emoji: userCfg?.logLevels?.warn?.emoji ?? '🔔',
      },
      info: {
        level: userCfg?.logLevels?.info?.level ?? 3,
        style:
          userCfg?.logLevels?.info?.style ??
          `padding-right: ${
            isSafari() ? '49' : '44'
          }px; background: linear-gradient(to right, #fff, #b2d7ff); color: #465464; border-color: #96b5d7;`,
        terminal: userCfg?.logLevels?.info?.terminal ?? ['bgBlue', 'white'],
        method: userCfg?.logLevels?.info?.method ?? 'info',
        emoji: userCfg?.logLevels?.info?.emoji ?? '📬',
      },
      fail: {
        level: userCfg?.logLevels?.fail?.level ?? 4,
        style:
          userCfg?.logLevels?.fail?.style ??
          `padding-right: ${
            isChrome() ? '43' : '44'
          }px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;`,
        terminal: userCfg?.logLevels?.fail?.terminal ?? ['bgRed', 'white'],
        method: userCfg?.logLevels?.fail?.method ?? 'info',
        emoji: userCfg?.logLevels?.fail?.emoji ?? '❌',
      },
      success: {
        level: userCfg?.logLevels?.success?.level ?? 5,
        style:
          userCfg?.logLevels?.success?.style ??
          'padding-right: 26px; background: linear-gradient(to right, #fff, #ceedc9); color: #4e594d; border-color: #b7d1b3;',
        terminal: userCfg?.logLevels?.success?.terminal ?? ['bgGreen', 'gray'],
        method: userCfg?.logLevels?.success?.method ?? 'info',
        emoji: userCfg?.logLevels?.success?.emoji ?? '🎉',
      },
      log: {
        level: userCfg?.logLevels?.log?.level ?? 6,
        style:
          userCfg?.logLevels?.log?.style ??
          `padding-right: 50px; background: linear-gradient(to right, #fff, #d9dce0); color: #333435; border-color: #bfc1c5;`,
        terminal: userCfg?.logLevels?.log?.terminal ?? ['bgGray', 'white'],
        method: userCfg?.logLevels?.log?.method ?? 'log',
        emoji: userCfg?.logLevels?.log?.emoji ?? '📌',
      },
      debug: {
        level: userCfg?.logLevels?.debug?.level ?? 7,
        style:
          userCfg?.logLevels?.debug?.style ??
          'padding-right: 38px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;',
        terminal: userCfg?.logLevels?.debug?.terminal ?? ['bgBlack', 'white'],
        method: userCfg?.logLevels?.debug?.method ?? 'debug',
        emoji: userCfg?.logLevels?.debug?.emoji ?? '🐞',
      },
      verbose: {
        level: userCfg?.logLevels?.verbose?.level ?? 8,
        style:
          userCfg?.logLevels?.verbose?.style ??
          'padding-right: 26px; border-color: 1px solid #d9dce0; color: #999999; border-color: #cbc9c9;',
        terminal: userCfg?.logLevels?.verbose?.terminal ?? ['italic', 'white'],
        method: userCfg?.logLevels?.verbose?.method ?? 'debug',
        emoji: userCfg?.logLevels?.verbose?.emoji ?? '💤',
      },
    },
    filters: userCfg?.filters ? { ...defaultFilters, ...userCfg.filters } : defaultFilters,
  };
}
