import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function CrudEditDelet() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("student")) || [];
    setRecord(data);
  }, []);

  const handleAdd = () => {
    let user = { id: Date.now(), name, subject, city };
    let oldRecord = JSON.parse(localStorage.getItem("student")) || [];

    if (editIndex) {
      let singleData = record.find((item) => item.id == editIndex);
      singleData.id = editIndex;
      singleData.name = name;
      singleData.subject = subject;
      singleData.city = city;
      localStorage.setItem("student", JSON.stringify(record));
      setEditIndex(null);
    } else {
      oldRecord.push(user);
      setRecord(oldRecord);
      localStorage.setItem("student", JSON.stringify(oldRecord));
    }

    setName("");
    setSubject("");
    setCity("");
  };

  const handleDelete = (id) => {
    let deleteData = record.filter((item) => item.id != id);
    setRecord(deleteData);
    localStorage.setItem("student", JSON.stringify(deleteData));
  };
  const handleEdit = (id) => {
    let singleData = record.find((item) => item.id == id);
    setName(singleData.name);
    setSubject(singleData.subject);
    setCity(singleData.city);
    setEditIndex(id);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleAdd}>
        {editIndex ? "Update Data" : "Add Data"}
      </button>

      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {record.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.subject}</th>
              <th>{item.city}</th>
              <td onClick={() => handleEdit(item.id)}>Edit</td>
              <td onClick={() => handleDelete(item.id)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
