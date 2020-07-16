import { Log, LogFunctions, LogLevelDefinition } from './_contracts';


type LogLevelTuple = [string, LogLevelDefinition];



/**
 * The entry function to create a Adze log. Generates an object representing the state of the log and to allow chaining.
 */
// export function adze():Log {
//   // generate log levels.
//   const standard_levels = env.$shed?.cfg.log_levels ?? defaults.log_levels; // Fulcrum is already merged with defaults.
//   const custom_levels = env.$shed?.cfg?.custom_levels ?? {};
//   const levels = { ...generateLevels(standard_levels), ...generateLevels(custom_levels) };

//   // Create a log object.
//   return {...base_log, ...levels};
// }



export function adze() {
  
}



