import { useCounterStore } from './store/counterStore';

export default function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>YASML</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}
