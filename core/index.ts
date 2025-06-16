import { createStore, type StateCreator } from './createStore';
import { createHook } from './createHook';

export function create<T>(createState: StateCreator<T>, name?: string) {
  const store = createStore(createState, name);
  return createHook(store);
}
