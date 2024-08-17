import adze, { LogData } from '../..';
import type FileStreamRotator from 'file-stream-rotator/lib/FileStreamRotator';
import type { FileStreamRotatorOptions } from 'file-stream-rotator/src/types';
import { Middleware, TargetEnvironment } from '../../middleware';

/**
 * Options for the AdzeFileRotator middleware.
 */
export interface AdzeFileTransportOptions
  extends Omit<Partial<FileStreamRotatorOptions>, 'filename'> {
  directory?: string;
  frequency?: 'daily';
  date_format?: string;
  size?: string;
  max_logs?: string;
  audit_file?: string;
  extension?: string;
  create_symlink?: boolean;
  symlink_name?: string;
  compressOnRotate?: boolean;
}

/**
 * Default options for the AdzeFileRotator middleware.
 */
const defaultOpts: AdzeFileTransportOptions = {
  directory: './logs',
  frequency: 'daily',
  date_format: 'YYYY-MM-DD',
  size: '1M',
  max_logs: '10d',
  audit_file: './logs/audit.json',
  extension: '.log',
  create_symlink: false,
  symlink_name: 'current.log',
  audit_hash_type: 'md5',
};

/**
 * Wraps the file-stream-rotator package to provide middleware for writing rotating log files.
 */
export class AdzeFileTransport extends Middleware {
  protected targetEnvironment: TargetEnvironment = 'node';

  private directory: string = './logs';

  private compressOnRotate: boolean = false;

  private options: AdzeFileTransportOptions;

  private logStream?: FileStreamRotator;

  constructor(options: AdzeFileTransportOptions = {}) {
    super();
    const { directory, compressOnRotate, ..._opts } = options;
    this.directory = directory ?? this.directory;
    this.compressOnRotate = compressOnRotate ?? this.compressOnRotate;
    this.options = { ...defaultOpts, ..._opts };
  }

  protected async loadBrowserDependencies(): Promise<void> {}

  protected async loadNodeDependencies(): Promise<void> {
    const lib = await import('file-stream-rotator');
    const stream = lib.getStream({
      filename: `${this.directory}/log-%DATE%`,
      ...this.options,
    }) as unknown;
    this.logStream = stream as FileStreamRotator;
  }

  /**
   * Target the afterTerminated hook to write terminated logs to the file stream.
   */
  public afterTerminated({ data }: adze) {
    if (this.environment === 'node') {
      if (data && data.message.length > 0) {
        this.writeLog(data);
      }
    }
  }

  /**
   * Write a log to the log file stream.
   */
  private writeLog(data: LogData) {
    if (this.logStream) {
      this.logStream.write(data.message.join('') + '\n');
    }
  }
}
