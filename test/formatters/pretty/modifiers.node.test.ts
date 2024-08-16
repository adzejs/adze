import { JSDOM } from 'jsdom';
import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { setup, TableData, teardown } from '../../../src';
import { applyChalkStyles } from '../../../src/functions';
import { getLogConfig } from '../../../src/constants';

/**
 * @vitest-environment node
 */

describe('modifiers with pretty format in node', () => {
  afterEach(() => {
    teardown();
  });

  test('prints a log with a timer', () => {
    const spy = vi.spyOn(process, 'hrtime');
    spy.mockReturnValue([0, 0]);
    console.log = vi.fn();

    adze.label('timer').time.log('Test timer.');
    adze.label('timer').timeEnd.log('Test timer.');

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      '[timer] ',
      'Test timer.'
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      '[timer] (Time elapsed: 0s 0ms)',
      'Test timer.'
    );
  });

  test('prints a log with a timer since page load', () => {
    const spy = vi.spyOn(process, 'hrtime');
    spy.mockReturnValue([0, 0]);
    console.log = vi.fn();

    adze.label('timer').timeNow.log('Test timer.');

    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
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
        applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
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
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
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
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
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
    const dom = new JSDOM('', {
      url: 'https://example.com/',
    });
    const div = dom.window.document.createElement('div');
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
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      'Grouping logs.'
    );
  });

  test('prints a groupCollapsed log', () => {
    console.groupCollapsed = vi.fn();
    adze.groupCollapsed.log('Grouping logs.');
    expect(console.groupCollapsed).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      'Grouping logs.'
    );
  });

  test('prints a groupCollapsed log', () => {
    console.groupCollapsed = vi.fn();
    adze.groupCollapsed.log('Grouping logs.');
    expect(console.groupCollapsed).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      'Grouping logs.'
    );
  });

  test('calls groupEnd when modifier applied', () => {
    console.group = vi.fn();
    console.groupEnd = vi.fn();
    adze.group.log('Grouping logs.');
    adze.groupEnd.log();
    expect(console.group).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      'Grouping logs.'
    );
    expect(console.groupEnd).toHaveBeenCalled();
  });

  test('prints the label name in the log', () => {
    console.log = vi.fn();
    adze.label('test').log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      '[test] ',
      'Test log.'
    );
  });

  test('prints the namespace in the log', () => {
    console.log = vi.fn();
    adze.namespace('foo', 'bar').log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      '#foo #bar ',
      'Test log.'
    );
  });

  test('prints the namespace in the log with ns alias', () => {
    console.log = vi.fn();
    adze.ns('foo', 'bar').log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      '#foo #bar ',
      'Test log.'
    );
  });

  test('the if modifier prints the log if it passes the condition', () => {
    console.log = vi.fn();
    adze.if(2 === 2).log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      'Expression passed:',
      'Test log.'
    );
  });

  test('the if modifier prints the log with an emoji if it passes the condition', () => {
    console.log = vi.fn();
    adze.withEmoji.if(2 === 2).log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles('🪵 Log       ', getLogConfig().terminalStyle),
      '✅ Expression passed:',
      'Test log.'
    );
  });

  test('the assert modifier prints the log if it failes the condition', () => {
    console.log = vi.fn();
    // @ts-ignore
    adze.assert(2 === 3).log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      'Assertion failed:',
      'Test log.'
    );
  });

  test('the assert modifier prints the log with an emoji if it failes the condition', () => {
    console.log = vi.fn();
    // @ts-ignore
    adze.withEmoji.assert(2 === 3).log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles('🪵 Log       ', getLogConfig().terminalStyle),
      '❌ Assertion failed:',
      'Test log.'
    );
  });

  test('the timestamp modifier prints the log with a timestamp', () => {
    console.log = vi.fn();
    setup({
      timestampFormatter: () => '2024-08-03T16:37:11-04:00',
    });
    // @ts-ignore
    adze.timestamp.log('Test log.');
    expect(console.log).toHaveBeenCalledWith(
      applyChalkStyles(' Log      ', getLogConfig().terminalStyle),
      '2024-08-03T16:37:11-04:00 ',
      'Test log.'
    );
  });

  test('the trace modifier prints the log with the stacktrace', () => {
    console.log = vi.fn();
    const store = setup();
    store.addListener('log', (log) => {
      if (log.data) {
        expect(log.data.message[0]).toBe(
          applyChalkStyles(' Log      ', getLogConfig().terminalStyle)
        );
        expect(log.data.message[1]).toBe('Test log.');
        expect(log.data.stacktrace).toBeTruthy();
      } else {
        throw new Error('The log did not contain data.');
      }
    });
    adze.trace.log('Test log.');
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
