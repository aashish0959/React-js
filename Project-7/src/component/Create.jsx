import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Create({ data, setdata }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    setdata([...data, { id: data.length + 1, name: name, age: age }]);
    navigate('/');
  };

  return (
    <div className="create-container">
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter name" 
          required 
        />
        <label>Age:</label>
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="Enter age" 
          required 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
