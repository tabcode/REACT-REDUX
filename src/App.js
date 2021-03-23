import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented, incrementedByAmount } from './redux/counter';

function App() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Counter: {count}</h1>
      <hr />
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
      <button onClick={() => dispatch(incrementedByAmount(25))}>Incremented By 25</button>
    </>
  );
}

export default App;
