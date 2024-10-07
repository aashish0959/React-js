import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Delete({ data, setdata }) {
  const [id, setId] = useState('');
  let navigate = useNavigate();

  let handleDelete = () => {
    let delData = data.filter((e) => e.id != id);
    setdata(delData);
    navigate('/');
  };

  return (
    <div className="delete-container">
      <h1>Delete User</h1>
      <form onSubmit={handleDelete}>
        <label>Enter User ID to Delete:</label>
        <input 
          type="number" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          placeholder="Enter user ID" 
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
