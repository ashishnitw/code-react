import { useState } from "react";

export default function Items() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 1000) + 1
    }]);
  }

  return (
    <>
      <button onClick={addItem}>Add new Item</button>
      <ul>{
      items.map(item => <li key={item.id}>{item.value}</li>)
      }</ul>
    </>
    
  );
}