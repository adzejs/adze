import {
  Log, Configuration,
  TerminatingMethodKeys,
} from '../_contracts';

export function all(ctxt: Log, bundle: Log[] = []) {
  bundle.forEach(log => {
    const render = ctxt.render;
    if (render) {
      const [ method, args ] = render;
      console[method](...args);
    }
  });
}