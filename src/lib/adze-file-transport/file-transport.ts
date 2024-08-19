import adze, { LogData } from '../..';
import type FileStreamRotator from 'file-stream-rotator/lib/FileStreamRotator';
import type { FileStreamRotatorOptions } from 'file-stream-rotator/src/types';
import { Middleware } from '../../middleware';

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
  /**
   * The directory path where log files will be written.
   */
  private directory: string = './logs';

  /**
   * Whether or not to compress log files when they are rotated.
   */
  private compressOnRotate: boolean = false;

  /**
   * Options for the file stream.
   */
  private options: AdzeFileTransportOptions;

  /**
   * The createGzip function from the zlib package.
   */
  private createGzip?: typeof import('node:zlib').createGzip;

  /**
   * The createReadStream function from the fs package.
   */
  private createReadStream?: typeof import('node:fs').createReadStream;

  /**
   * The createWriteStream function from the fs package.
   */
  private createWriteStream?: typeof import('node:fs').createWriteStream;

  /**
   * The file stream rotator instance.
   */
  private logStream?: FileStreamRotator;

  constructor(options: AdzeFileTransportOptions = {}) {
    super('node');
    const { directory, compressOnRotate, ..._opts } = options;
    this.directory = directory ?? this.directory;
    this.compressOnRotate = compressOnRotate ?? this.compressOnRotate;
    this.options = { ...defaultOpts, ..._opts };
  }

  protected async loadBrowserDependencies(): Promise<void> {}

  protected async loadNodeDependencies(): Promise<void> {
    // const zlib = await import('node:zlib');
    // const fs = await import('node:fs');
    const rotateLib = await import('file-stream-rotator');
    const stream = rotateLib.getStream({
      filename: `${this.directory}/log-%DATE%`,
      ...this.options,
    }) as unknown;
    // const { createGzip } = zlib;
    // const { createReadStream, createWriteStream } = fs;
    // this.createGzip = createGzip;
    // this.createReadStream = createReadStream;
    // this.createWriteStream = createWriteStream;
    this.logStream = stream as FileStreamRotator;

    // // If the compressOnRotate option is enabled, we will listen for the rotated event.
    // if (this.compressOnRotate) {
    //   console.log("I'm listening for the rotate event!");
    //   this.logStream.on('rotate', (oldFile: string, newFile: string) => {
    //     console.log('FIRING!');
    //     this.compressFile(`${this.directory}/${oldFile}`);
    //   });
    // }
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

  private compressFile(filePath: string) {
    if (!this.createGzip || !this.createReadStream || !this.createWriteStream) {
      console.error(
        new Error(
          'Error: Could not compress file. Dependencies for compressing the files are not loaded. Please make sure the load() method has been called and awaited.'
        )
      );
      return;
    }
    const stream = this.createReadStream(filePath);
    stream
      .pipe(this.createGzip())
      .pipe(this.createWriteStream(`${filePath}.gz`))
      .on('finish', () => console.log(`Successfully compressed the file at ${filePath}`));
  }
}
