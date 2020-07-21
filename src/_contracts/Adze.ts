import { Configuration, Log } from '.';

export type Adze = (user_cfg?: Configuration) => Log;

export type LogFactory = () => Log;