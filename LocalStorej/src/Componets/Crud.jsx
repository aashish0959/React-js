import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'; 

export default function Crud() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [record, setRecord] = useState([]); 

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("Student")) || [];
    setRecord(storedData); 
  }, []); 

  const handleAdd = () => {
    let user = { id: Date.now(), name, subject, city };
    const updatedRecord = [...record, user];
    setRecord(updatedRecord);
    localStorage.setItem("Student", JSON.stringify(updatedRecord));
  };

  return (
    <>
      <h1>CRUD with local storage</h1>

      <input type="text" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Enter your Subject" onChange={(e) => setSubject(e.target.value)} />
      <input type="text" placeholder="Enter your City" onChange={(e) => setCity(e.target.value)} />

      <button onClick={handleAdd}>Add Data</button>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {record && record.length > 0 ? (
            record.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.subject}</td>
                <td>{e.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

