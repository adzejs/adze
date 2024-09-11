import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { Configuration, setup, teardown } from '../src';
import { defaultConfiguration } from '../src/constants';
import { normalizeLevelSelector } from '../src/functions';

describe('log filtering', () => {
  afterEach(() => {
    teardown();
  });

  test('level filter value normalized from array of log level names to level number values', () => {
    const values = normalizeLevelSelector(defaultConfiguration.levels, ['log', 'info', 'alert']);
    expect(values).toStrictEqual([6, 3, 0]);
  });

  test('level filter of a single number value is normalized to an array of that value', () => {
    const values = normalizeLevelSelector(defaultConfiguration.levels, 6);
    expect(values).toStrictEqual([6]);
  });

  test('level filter of a single level name value is normalized to an array of that value', () => {
    const values = normalizeLevelSelector(defaultConfiguration.levels, 'log');
    expect(values).toStrictEqual([6]);
  });

  test('level range of numbers is normalized to level number values', () => {
    const cfg: Configuration = {
      ...defaultConfiguration,
      levels: {
        ...defaultConfiguration.levels,
        leet: {
          levelName: 'leet',
          level: 1337,
          style: 'color: #fff; background: #000;',
          terminalStyle: ['white', 'bgBlack'],
          method: 'log',
          emoji: '🤓',
        },
      },
    };
    const values = normalizeLevelSelector(cfg.levels, [3, '-', 1337]);
    expect(values).toStrictEqual([3, 4, 5, 6, 7, 8, 1337]);
  });

  test('level range of level names is normalized to level number values', () => {
    const cfg: Configuration = {
      ...defaultConfiguration,
      levels: {
        ...defaultConfiguration.levels,
        leet: {
          levelName: 'leet',
          level: 1337,
          style: 'color: #fff; background: #000;',
          terminalStyle: ['white', 'bgBlack'],
          method: 'log',
          emoji: '🤓',
        },
      },
    };
    const values = normalizeLevelSelector(cfg.levels, ['info', '-', 'leet']);
    expect(values).toStrictEqual([3, 4, 5, 6, 7, 8, 1337]);
  });

  test('level range of * normalizes to all level number values', () => {
    const cfg: Configuration = {
      ...defaultConfiguration,
      levels: {
        ...defaultConfiguration.levels,
        leet: {
          levelName: 'leet',
          level: 1337,
          style: 'color: #fff; background: #000;',
          terminalStyle: ['white', 'bgBlack'],
          method: 'log',
          emoji: '🤓',
        },
      },
    };
    const values = normalizeLevelSelector(cfg.levels, '*');
    expect(values).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 1337]);
  });

  test('when excluded filter configured it excludes logs with provided namespaces', () => {
    console.log = vi.fn();

    setup({
      filters: {
        namespaces: {
          type: 'exclude',
          values: ['foo', 'baz'],
        },
      },
    });

    adze.ns('foo').log('Excluded');
    adze.ns('bar').log('Included');
    adze.ns('baz').log('Excluded');
    adze.ns('foo', 'bar').log('Excluded');
    adze.ns('bar', 'baz').log('Excluded');
    adze.log('Excluded');

    const logLeader = '%c Log';
    const logStyle =
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;';

    expect(console.log).toHaveBeenNthCalledWith(1, logLeader, logStyle, '#bar ', 'Included');
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  test('when include filter configured it excludes logs with provided namespaces', () => {
    console.log = vi.fn();

    setup({
      filters: {
        namespaces: {
          type: 'include',
          values: ['foo', 'baz'],
        },
      },
    });

    adze.ns('foo').log('Included');
    adze.ns('bar').log('Excluded');
    adze.ns('baz').log('Included');
    adze.ns('foo', 'bar').log('Included');
    adze.ns('bar', 'baz').log('Included');

    const logLeader = '%c Log';
    const logStyle =
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;';

    expect(console.log).toHaveBeenNthCalledWith(1, logLeader, logStyle, '#foo ', 'Included');
    expect(console.log).toHaveBeenNthCalledWith(2, logLeader, logStyle, '#baz ', 'Included');
    expect(console.log).toHaveBeenNthCalledWith(3, logLeader, logStyle, '#foo #bar ', 'Included');
    expect(console.log).toHaveBeenNthCalledWith(4, logLeader, logStyle, '#bar #baz ', 'Included');
    expect(console.log).toHaveBeenCalledTimes(4);
  });

  test('when excluded filter configured it excludes logs with provided labels', () => {
    console.log = vi.fn();

    setup({
      filters: {
        labels: {
          type: 'exclude',
          values: ['foo', 'baz'],
        },
      },
    });

    adze.label('foo').log('Excluded');
    adze.label('bar').log('Included');
    adze.label('baz').log('Excluded');
    adze.log('Excluded');

    const logLeader = '%c Log';
    const logStyle =
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;';

    expect(console.log).toHaveBeenNthCalledWith(1, logLeader, logStyle, '[bar] ', 'Included');
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  test('when include filter configured it excludes logs with provided labels', () => {
    console.log = vi.fn();

    setup({
      filters: {
        labels: {
          type: 'include',
          values: ['foo', 'baz'],
        },
      },
    });

    adze.label('foo').log('Included');
    adze.label('bar').log('Excluded');
    adze.label('baz').log('Included');
    adze.log('Excluded');

    const logLeader = '%c Log';
    const logStyle =
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;';

    expect(console.log).toHaveBeenNthCalledWith(1, logLeader, logStyle, '[foo] ', 'Included');
    expect(console.log).toHaveBeenNthCalledWith(2, logLeader, logStyle, '[baz] ', 'Included');
    expect(console.log).toHaveBeenCalledTimes(2);
  });

  test('when excluded filter configured it excludes logs with provided levels', () => {
    console.error = vi.fn();
    console.info = vi.fn();
    console.log = vi.fn();

    setup({
      filters: {
        levels: {
          type: 'exclude',
          values: ['log', 'alert'],
        },
      },
    });

    adze.log('Excluded');
    adze.info('Included');
    adze.alert('Excluded');
    adze.log('Excluded');

    const logLeader = '%c Info';
    const logStyle =
      'padding-right: 44px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #d8ebff, #b2d7ff); color: #465464; border-color: #96b5d7;';

    expect(console.info).toHaveBeenNthCalledWith(1, logLeader, logStyle, 'Included');
    expect(console.error).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
    expect(console.info).toHaveBeenCalledTimes(1);
  });

  test('when include filter configured it excludes logs with provided levels', () => {
    console.error = vi.fn();
    console.info = vi.fn();
    console.log = vi.fn();

    setup({
      filters: {
        levels: {
          type: 'include',
          values: ['log', 'alert'],
        },
      },
    });

    adze.log('Included');
    adze.info('Excluded');
    adze.alert('Included');
    adze.log('Included');

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 51px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      'Included'
    );
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.error).toHaveBeenNthCalledWith(
      1,
      '%c Alert',
      'padding-right: 24px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;',
      'Included'
    );
    expect(console.info).not.toHaveBeenCalled();
  });
});
