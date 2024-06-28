import { Log } from './log';

export default class adze {
  public static alert(...args: unknown[]): void {
    return new Log().alert(...args);
  }

  public static error(...args: unknown[]): void {
    return new Log().error(...args);
  }

  public static warn(...args: unknown[]): void {
    return new Log().warn(...args);
  }

  public static info(...args: unknown[]): void {
    return new Log().info(...args);
  }

  public static fail(...args: unknown[]): void {
    return new Log().fail(...args);
  }

  public static success(...args: unknown[]): void {
    return new Log().success(...args);
  }

  public static log(...args: unknown[]): void {
    return new Log().log(...args);
  }

  public static debug(...args: unknown[]): void {
    return new Log().debug(...args);
  }

  public static verbose(...args: unknown[]): void {
    return new Log().verbose(...args);
  }
}
