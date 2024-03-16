import { useReducer } from "react";

// Initial State
const initialState = 0;

// Reducer function. Accepts current state and action. Returns new state.
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function CounterReducer() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  )

}