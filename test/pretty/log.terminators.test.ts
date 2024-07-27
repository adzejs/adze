import { describe, expect, test, vi } from 'vitest';
import adze from '../../src';

describe('standard Log terminators', () => {
  console.error = vi.fn();
  console.warn = vi.fn();
  console.info = vi.fn();
  console.log = vi.fn();
  console.debug = vi.fn();

  test('prints a log with level of alert', () => {
    adze.alert('This is an alert log.');
    expect(console.error).toHaveBeenCalledWith(
      '%c Alert',
      'padding-right: 26px; font-size: 12px; border-radius: 4px; background: linear-gradient(to right, #fc8585, #fc2323); color: #fff; border-color: #b70101;',
      'This is an alert log.'
    );
  });
});
