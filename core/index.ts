import { createStore, type StateCreator } from './createStore';
import { createHook } from './createHook';

export function create<T>(createState: StateCreator<T>) {
  const store = createStore(createState);
  return createHook(store);
}