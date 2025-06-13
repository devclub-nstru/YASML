let currentEffect = null;

export function createLoggedSignal(key, initialValue) {
  let value = initialValue;
  const subscribers = new Set();

  function get() {
    console.log(`GET ${key} →`, value);
    if (currentEffect) {
      subscribers.add(currentEffect);
    }
    return value;
  }

  function set(newValue) {
    if (newValue !== value) {
      console.log(`SET ${key} →`, newValue);
      value = newValue;
      subscribers.forEach((fn) => fn());
    }
  }

  return { get, set };
}

export function getCurrentEffect() {
  return currentEffect;
}

export function setCurrentEffect(effectFn) {
  currentEffect = effectFn;
}
