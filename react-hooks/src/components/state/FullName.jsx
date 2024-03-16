import { useState } from "react";

export default function FullName() {
  const [name, setName] = useState({ first: '', last: '' });

  return (
    <>
      <form>
        
        <h3>First Name: {name.first}</h3>
        <h3>Last Name: {name.last}</h3>
        
        {/* Wrong way to update a state of object type */}
        <input type="text" value={name.first} onChange={e => setName({ first: e.target.value })}></input>
        <input type="text" value={name.last} onChange={e => setName({ last: e.target.value })}></input>
        
        <h3>{JSON.stringify(name)}</h3>
        
        {/* RIGHT WAY */}
        <input type="text" value={name.first} onChange={e => setName({ ...name, first: e.target.value })}></input>
        <input type="text" value={name.last} onChange={e => setName({ ...name, last: e.target.value })}></input>

      </form>
    </>
  );
}