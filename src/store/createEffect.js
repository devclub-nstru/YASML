import { setCurrentEffect } from "./createSignal.js";

export function createEffect(fn) {
  function wrappedEffect() {
    setCurrentEffect(wrappedEffect);
    fn();
    setCurrentEffect(null);
  }
  wrappedEffect();
}
