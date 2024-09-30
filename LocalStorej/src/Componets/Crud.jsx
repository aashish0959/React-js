import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Crud() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [record, setRecord] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("student")) || [];
    setRecord(data);
  }, []);

  const handleAdd = () => {
    let user = { id: Date.now(), name, subject, city };
    let oldRecord = JSON.parse(localStorage.getItem("student")) || [];
    oldRecord.push(user);
    setRecord(oldRecord);
    localStorage.setItem("student", JSON.stringify(oldRecord));

    setName("");
    setSubject("");
    setCity("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleAdd}>Add Data</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {record.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
