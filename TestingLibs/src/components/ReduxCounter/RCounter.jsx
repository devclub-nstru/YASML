// components/ReduxCounter/ReduxCounter.jsx
import React, { useEffect, useState } from 'react';
import { store } from './TestRedux';

const ReduxCounter = () => {
  const [count, setCount] = useState(store.getState().value);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const stopListening = store.subscribe(() => {
      setCount(store.getState().value);
    });

    return () => stopListening();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Manual Redux Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => store.dispatch({ type: 'RESET' })}>Reset</button>

      <br /><br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />
      <button onClick={() =>
        store.dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: amount })
      }>
        Add {amount}
      </button>
    </div>
  );
};

export default ReduxCounter;
