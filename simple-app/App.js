import { useState } from "react";

export default function App() {

  const [advice, setAdvice] = useState();

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
  }

  return (
    <>
      <p>Hello World</p>
      <button onClick={getAdvice}>Get Advice</button>
      <p>{advice}</p>
    </>
  );
}