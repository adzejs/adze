import { afterEach, describe, expect, test, vi } from 'vitest';
import adze, { Middleware, setup, teardown } from '../src';

/**
 * @vitest-environment jsdom
 */

describe('middleware', () => {
  afterEach(() => {
    teardown();
  });

  test('fires the loadBrowserDependencies method for loading dependencies when in a browser environment', () => {
    console.log = vi.fn();
    const funcBrowser = vi.fn();
    const funcServer = vi.fn();

    class TestMiddleware extends Middleware {
      protected async loadBrowserDependencies(): Promise<void> {
        funcBrowser();
        await Promise.resolve();
      }
      protected async loadServerDependencies(): Promise<void> {
        funcServer();
        await Promise.resolve();
      }
    }
    setup({
      middleware: [new TestMiddleware()],
    });

    adze.log('Test log.');
    expect(console.log).toHaveBeenCalled();
    expect(funcServer).not.toHaveBeenCalled();
    expect(funcBrowser).toHaveBeenCalledTimes(1);
  });

  test("doesn't fire loadBrowserDependencies when running in a server when the target environment is browser", async () => {
    console.log = vi.fn();
    const funcBrowser = vi.fn();
    const funcServer = vi.fn();

    class TestMiddleware extends Middleware {
      constructor() {
        super('server');
      }

      protected async loadBrowserDependencies(): Promise<void> {
        funcBrowser();
        await Promise.resolve();
      }
      protected async loadServerDependencies(): Promise<void> {
        funcServer();
        await Promise.resolve();
      }
    }
    const testMiddleware = new TestMiddleware();
    await testMiddleware.load();
    setup({
      middleware: [testMiddleware],
    });

    adze.log('Test log.');
    expect(console.log).toHaveBeenCalled();
    expect(funcServer).not.toHaveBeenCalled();
    expect(funcBrowser).not.toHaveBeenCalled();
  });
});
