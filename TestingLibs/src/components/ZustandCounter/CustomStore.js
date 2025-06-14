import { useSyncExternalStore } from 'react';

let state = {
  count: 0
};

let listeners = new Set();

const getState = () => state;

const setState = (partial) => {
  const nextState = typeof partial === 'function' ? partial(state) : partial;
  if (nextState !== state) {
    state = { ...state, ...nextState };
    listeners.forEach((listener) => listener());
  }
};

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useCustomStore = (selector) => {
  return useSyncExternalStore(subscribe, () => selector(state));
};

export const store = {
  getState,
  setState,
  subscribe
};
