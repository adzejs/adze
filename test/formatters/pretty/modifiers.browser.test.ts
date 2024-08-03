import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { LevelConfig, setup, TableData, teardown } from '../../../src';
import { globalContext } from '../../../src/functions';

describe('modifiers with pretty format in the browser', () => {
  afterEach(() => {
    teardown();
  });

  test('prints a log with a timer', () => {
    vi.useFakeTimers();
    console.log = vi.fn();

    adze.label('timer').time.log('Test timer.');
    adze.label('timer').timeEnd.log('Test timer.');

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[timer] ',
      'Test timer.'
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[timer] (Time elapsed: 0s 0ms)',
      'Test timer.'
    );
  });

  test('prints a log with a timer since page load', () => {
    vi.useFakeTimers();
    console.log = vi.fn();

    adze.label('timer').timeNow.log('Test timer.');

    expect(console.log).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[timer] (Time elapsed: 0s 0ms)',
      'Test timer.'
    );
  });

  test('counts logs that share the same label', () => {
    console.log = vi.fn();
    const amount = 5;

    for (let i = 1; i <= amount; i++) {
      adze.label('counter').count.log('Counting log.');
    }

    for (let i = 1; i <= amount; i++) {
      expect(console.log).toHaveBeenNthCalledWith(
        i,
        '%c Log',
        'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
        `[counter] (Count: ${i}) `,
        'Counting log.'
      );
    }
  });

  test('clears the counter for logs that are counted with the same label', () => {
    console.log = vi.fn();
    const amount = 5;

    for (let i = 1; i <= amount; i++) {
      adze.label('counter').count.log('Counting log.');
    }
    adze.label('counter').countClear.log('Clearing count.');
    expect(console.log).toHaveBeenNthCalledWith(
      6,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[counter] ',
      'Clearing count.'
    );
  });

  test('resets the counter for logs that are counted with the same label', () => {
    console.log = vi.fn();
    const amount = 5;

    for (let i = 1; i <= amount; i++) {
      adze.label('counter').count.log('Counting log.');
    }
    adze.label('counter').countReset.log('Resetting count.');
    expect(console.log).toHaveBeenNthCalledWith(
      6,
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[counter] (Count: 0) ',
      'Resetting count.'
    );
  });

  test('prints a dir log', () => {
    console.dir = vi.fn();
    adze.dir.log({ foo: 'bar' });
    expect(console.dir).toHaveBeenCalledWith({ foo: 'bar' });
  });

  test('prints a dirxml log', () => {
    console.dirxml = vi.fn();
    const div = document.createElement('div');
    adze.dirxml.log(div);
    expect(console.dirxml).toHaveBeenCalledWith(div);
  });

  test('prints a table log', () => {
    console.table = vi.fn();
    const tableData: TableData = [
      { name: 'John Doe', id: '123' },
      { name: 'Jane Doe', id: '456' },
    ];
    adze.table.log(tableData);
    expect(console.table).toHaveBeenCalledWith(tableData);
  });

  test('prints a group log', () => {
    console.group = vi.fn();
    adze.group.log('Grouping logs.');
    expect(console.group).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      'Grouping logs.'
    );
  });

  test('prints a groupCollapsed log', () => {
    console.groupCollapsed = vi.fn();
    adze.groupCollapsed.log('Grouping logs.');
    expect(console.groupCollapsed).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      'Grouping logs.'
    );
  });

  test('prints a groupCollapsed log', () => {
    console.groupCollapsed = vi.fn();
    adze.groupCollapsed.log('Grouping logs.');
    expect(console.groupCollapsed).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      'Grouping logs.'
    );
  });

  test('calls groupEnd when modifier applied', () => {
    console.group = vi.fn();
    console.groupEnd = vi.fn();
    adze.group.log('Grouping logs.');
    adze.groupEnd.log();
    expect(console.group).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      'Grouping logs.'
    );
    expect(console.groupEnd).toHaveBeenCalled();
  });

  test('prints the label name in the log', () => {
    console.log = vi.fn();
    adze.label('test').log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[test] ',
      'Test log.'
    );
  });

  test('prints the namespace in the log', () => {
    console.log = vi.fn();
    const store = setup();
    store.addListener('*', (log) => {});
    adze.label('test').meta({ blerp: 'derp' }).log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      '%c Log',
      'font-size: 12px; border-radius: 4px; padding-right: 60px; background: linear-gradient(to right, #ecedef, #d9dce0); color: #333435; border-color: #bfc1c5;',
      '[test] ',
      'Test log.'
    );
  });
});
