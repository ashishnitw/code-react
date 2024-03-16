import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementBy4() {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1); // This is wrong way of using state
    }
  }

  function incrementBy5() {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1); // useState with previoud state
    }
  }

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      <button onClick={() => incrementBy4()}>Increment by 4</button>
      <button onClick={() => incrementBy5()}>Increment by 5</button>
    </>
  );
}