import { useSyncExternalStore } from 'react';
import type { Store } from './createStore';

export function createHook<T>(store: Store<T>) {
  return function useStore<SelectorOutput = T>(
    selector: (state: T) => SelectorOutput = (s => s as unknown as SelectorOutput)
  ): SelectorOutput {
    return useSyncExternalStore(
      store.subscribe,
      () => selector(store.getState())
    );
  };
}
