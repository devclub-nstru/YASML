import React, { useEffect, useState } from 'react';
import { store } from './components/TestRedux';

function App() {
  const [count, setCount] = useState(store.getState().value);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const current = store.getState();
      setCount(current.value);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Manual Redux Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
}

export default App;