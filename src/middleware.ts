import { ModifierName } from '.';
import { isBrowser, ModifierData } from '.';
import Log from './log';

export type TargetEnvironment = 'node' | 'browser' | 'both';

export interface Middleware {
  /**
   * Hook that is called during construction of a log instance.
   */
  constructed?(log: Log): void;
  /**
   * Hook that is called just before a modifier is applied to a log instance.
   */
  beforeModifierApplied?(log: Log, name: ModifierName, data: ModifierData): void;
  /**
   * Hook that is called just after a modifier is applied to a log instance.
   */
  afterModifierApplied?(log: Log, name: ModifierName, data: ModifierData): void;
  /**
   * Hook that is called just before a formatter is applied to a log instance to format a message.
   */
  beforeFormatApplied?(log: Log, format: string, message: unknown[]): void;
  /**
   * Hook that is called just after a formatter is applied to a log instance to format a message.
   */
  afterFormatApplied?(log: Log, format: string, message: unknown[]): void;
  /**
   * Hook that is called just before a log instance message is printed to the browser or console.
   */
  beforePrint?(log: Log): void;
  /**
   * Hook that is called just before a log is terminated.
   */
  beforeTerminated?(log: Log, terminator: string, args: unknown[]): void;
  /**
   * Hook that is called just when a log instance has completed termination.
   */
  afterTerminated?(log: Log, terminator: string, args: unknown[]): void;
}

/**
 * Middleware abstract class that can be extended to create custom middleware.
 */
export abstract class Middleware {
  /**
   * The target environment for this middleware.
   *
   * This instructs the middleware to only load dependencies for the specified environment.
   */
  protected targetEnvironment: TargetEnvironment = 'both';

  /**
   * The environment that the middleware is running in.
   */
  protected readonly environment = isBrowser() ? 'browser' : 'node';

  /**
   * Array of asynchronous dependency loaders.
   */
  private dependencyLoaders: Promise<void>[] = [];

  constructor() {
    if (!isBrowser() && (this.targetEnvironment === 'node' || this.targetEnvironment === 'both')) {
      this.dependencyLoaders.push(this.loadNodeDependencies());
    }
    if (
      isBrowser() &&
      (this.targetEnvironment === 'browser' || this.targetEnvironment === 'both')
    ) {
      this.dependencyLoaders.push(this.loadBrowserDependencies());
    }
  }
  /**
   * Load the dependencies for this middleware.
   */
  public async load() {
    await Promise.all(this.dependencyLoaders);
  }
  /**
   * Load dependencies for the node environment.
   */
  protected async loadNodeDependencies() {}
  /**
   * Load dependencies for the browser environment.
   */
  protected async loadBrowserDependencies() {}
}
