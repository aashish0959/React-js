import React, { useEffect, useState } from "react";
import { Table, Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function TaskManager() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("student")) || [];
    setRecord(data);
  }, []);

  const handleAdd = () => {
    let user = { id: Date.now(), name, email, number, status: "Pending" }; 
    let oldRecord = JSON.parse(localStorage.getItem("student")) || [];

    if (editIndex !== null) {
      let updatedRecord = oldRecord.map((item, index) =>
        item.id === editIndex ? { ...item, name, email, number } : item
      );
      localStorage.setItem("student", JSON.stringify(updatedRecord));
      setEditIndex(null);
      setRecord(updatedRecord);
    } else {
      oldRecord.push(user);
      setRecord(oldRecord);
      localStorage.setItem("student", JSON.stringify(oldRecord));
    }

    setName("");
    setEmail("");
    setNumber("");
  };

  const handleDelete = (id) => {
    let deleteData = record.filter((item) => item.id !== id);
    setRecord(deleteData);
    localStorage.setItem("student", JSON.stringify(deleteData));
  };

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.id === id);
    setName(singleData.name);
    setEmail(singleData.email);
    setNumber(singleData.number);
    setEditIndex(id);
  };

  const handlePending = (id) => {
    let updatedRecord = record.map((item) =>
      item.id === id
        ? {
            ...item,
            status: item.status === "Pending" ? "Complete" : "Pending",
          }
        : item
    );
    setRecord(updatedRecord);
    localStorage.setItem("student", JSON.stringify(updatedRecord));
  };

  return (
    <>
      <div className="container w-50">
        <Form>
          <FormGroup>
            <Label for="nameInput">Name</Label>
            <Input
              id="nameInput"
              type="text"
              value={name}
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="emailInput">Email</Label>
            <Input
              id="emailInput"
              value={email}
              placeholder="Enter your Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="numberInput">Number</Label>
            <Input
              id="numberInput"
              value={number}
              placeholder="Enter your Number"
              type="number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </FormGroup>
          <Button onClick={handleAdd}>
            {editIndex !== null ? "Update Data" : "Add Data"}
          </Button>
        </Form>
      </div>

      <div className="container w-90">
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone-Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {record.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>{item.status}</td>
                <td>
                  <Button
                    color="success"
                    style={{ color: "black",marginLeft:"10PX" }}
                    
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    style={{ color: "black",marginLeft:"10PX" }}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    color={item.status === "Pending" ? "info" : "success"}
                    onClick={() => handlePending(item.id)}
                    style={{ color: "black",marginLeft:"10PX" }}>
                    {item.status === "Pending"
                      ? "Mark as Complete"
                      : "Mark as Pending"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
