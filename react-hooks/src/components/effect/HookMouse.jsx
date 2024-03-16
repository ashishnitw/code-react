import { useEffect, useState } from "react";

export default function HookMouse(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log('Mouse Event');
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log('MouseHook useEffect called')
    window.addEventListener('mousemove', logMousePosition);

    // Return cleanup function - same as componentWillUnmount()
    return () => {
      console.log('Component unmounting code');
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, []);

  return (
    <>
    <h3>Hooks X - {x} Y - {y}</h3>
    </>
  );
}