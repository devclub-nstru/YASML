export type StateCreator<T> = (
  set: (
    partial: Partial<T> | ((state: T) => Partial<T>),
    replace?: boolean,
    action?: string
  ) => void,
  get: () => T
) => T;

export interface Store<T> {
  getState: () => T;
  setState: (
    partial: Partial<T> | ((state: T) => Partial<T>),
    replace?: boolean,
    action?: string
  ) => void;
  subscribe: (listener: () => void) => () => void;
}

export function createStore<T>(
  createState: StateCreator<T>,
  name?: string
): Store<T> {
  let state: T;
  const listeners = new Set<() => void>();

  const devtools =
    typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__?.connect?.({ name });

  const set: Store<T>['setState'] = (
    partial,
    replace = false,
    action = 'anonymous'
  ) => {
    const nextState =
      typeof partial === 'function' ? partial(state) : partial;
    if (nextState === state) return;

    state = replace ? (nextState as T) : { ...state, ...nextState };

    devtools?.send(action, state);
    listeners.forEach((listener) => listener());
  };

  const get = () => state;

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  state = createState(set, get);
  devtools?.init(state);

  return { setState: set, getState: get, subscribe };
}
