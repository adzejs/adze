import adze, { LogData } from '../..';
// import jetpack from 'fs-jetpack';
import * as Rotator from 'file-stream-rotator';
import FileStreamRotator from 'file-stream-rotator/lib/FileStreamRotator';
import { FileStreamRotatorOptions } from 'file-stream-rotator/src/types';
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
export class AdzeFileTransport implements Middleware {
  private logStream: FileStreamRotator;

  constructor(options: AdzeFileTransportOptions = {}) {
    const { directory, compressOnRotate, ..._opts } = options;
    const opts = { ...defaultOpts, ..._opts };
    const stream = Rotator.getStream({
      filename: `${directory}/log-%DATE%`,
      ...opts,
    }) as unknown;
    this.logStream = stream as FileStreamRotator;
  }

  public afterTerminated({ data }: adze) {
    if (data && data.message.length > 0) {
      this.writeLog(data);
    }
  }

  private writeLog(data: LogData) {
    this.logStream.write(data.message.join(''));
  }
}
