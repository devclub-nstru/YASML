export type StateCreator<T> = (
    set: (partial: Partial<T> | ((state: T) => Partial<T>), replace?: boolean) => void,
    get: () => T
  ) => T;
  
  export interface Store<T> {
    getState: () => T;
    setState: (
      partial: Partial<T> | ((state: T) => Partial<T>),
      replace?: boolean
    ) => void;
    subscribe: (listener: () => void) => () => void;
  }
  
  export function createStore<T>(createState: StateCreator<T>): Store<T> {
    let state: T;
    const listeners = new Set<() => void>();
  
    const setState: Store<T>['setState'] = (partial, replace = false) => {
      const nextState =
        typeof partial === 'function' ? partial(state) : partial;
      if (nextState === state) return;
  
      state = replace ? (nextState as T) : { ...state, ...nextState };
      listeners.forEach((listener) => listener());
    };
  
    const getState = () => state;
  
    const subscribe = (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
  
    state = createState(setState, getState);
  
    return { setState, getState, subscribe };
  }
  