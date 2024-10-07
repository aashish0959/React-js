import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Update({ data, setdata }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  let navigate = useNavigate();

  let handleFind = () => {
    let datafind = data.find((e) => e.id == id);
    if (datafind) {
      setName(datafind.name);
      setAge(datafind.age);
    } else {
      alert("User not found!");
    }
  };

  let handleSubmit = () => {
    let updateData = data.map((e) =>
      e.id == Number(id) ? { ...e, name: name, age: age } : e
    );
    setdata(updateData);
    navigate('/');
  };

  return (
    <div className="update-container">
      <h1>Update User</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Enter User ID to Update:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter user ID"
          required
        />
        <button onClick={handleFind}>Find User</button>
        <br />

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter new name"
          required
        />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter new age"
          required
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
