import { useCounterStore } from './store/counterStore';

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>YASML CORE EXAMPLE</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement} style={{ marginLeft: '1rem' }}>-1</button>
    </div>
  );
}

export default App;