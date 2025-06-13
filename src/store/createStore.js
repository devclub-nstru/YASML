import { createLoggedSignal } from "./createSignal.js";

export function createStore(definition) {
  const store = {};

  for (const key in definition) {
    store[key] = createLoggedSignal(key, definition[key]);
  }

  return store;
}
