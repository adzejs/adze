export interface LogFunctions {
  [name: string]: LogFunction;
}

export type LogFunction = (...args: any[]) => void;