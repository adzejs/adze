import { Log } from '../_contracts';

export function all(_: Log, bundle: Log[] = []) {
  bundle.forEach(log => {
    const render = log.render;
    if (render) {
      const [ method, args ] = render;
      console[method](...args);
    }
  });
}