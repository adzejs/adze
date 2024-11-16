import * as _picocolors from 'picocolors';

//@ts-expect-error - This is workaround for not having picocolors exported as esm module.
export const picocolors = (_picocolors.default ?? _picocolors) as typeof _picocolors;
