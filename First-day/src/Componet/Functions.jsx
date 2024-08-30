import React, { useState } from 'react';

function Functions() {
  const [count, setCount] = useState(0);
  const add = () =>{
    setCount(count + 1);
  };
  return (
    <center>
      <h1>Functions</h1>
        <h1>{count}</h1>
        <button onClick={add} style={{ margin: '10px', padding: '10px 20px', fontSize: '20px' }}>
          Add
        </button>
      </center>
  )
}

export default Functions