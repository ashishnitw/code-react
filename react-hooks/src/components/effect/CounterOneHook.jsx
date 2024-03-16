import { useEffect, useState } from "react";

export default function CounterOneHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Inside useEffect - Updating doc title');
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>
        Click here
      </button>
      <h3>Clicked {count} times</h3>
    </>
  );
}
