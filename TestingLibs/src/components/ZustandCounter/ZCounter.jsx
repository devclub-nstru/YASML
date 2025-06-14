// Counter.jsx
import React from 'react';
import { useCustomStore, store } from './CustomStore';

const Counter = () => {
  const count = useCustomStore((state) => state.count);

  const increment = () => {
    store.setState((prev) => ({ count: prev.count + 1 }));
  };

  const decrement = () => {
    store.setState((prev) => ({ count: prev.count - 1 }));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>Zustand-style Custom Counter</h2>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
