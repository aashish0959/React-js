import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ApiWithFetch() {
  const [record, setRecord] = useState([]);
  const [editMode, setEditMode] = useState(false); 
  const [selectedId, setSelectedId] = useState(null); 
  const [formData, setFormData] = useState({ id: "", title: "", views: "" });

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let response = await axios.get("http://localhost:5000/posts");
    setRecord(response.data);
  };


  const addData = async () => {
    let response = await axios.post("http://localhost:5000/posts", {
      id: String(record.length+1), 
      title: "New Title",
      views: "123"
    });
    setRecord([...record, response.data]);
  };


  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5000/posts/${id}`);
    setRecord(record.filter((e) => e.id !== id));
    console.log(id);
    
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const editData = (item) => {
    setEditMode(true);
    setFormData(item); 
    setSelectedId(item.id);
  };

  const updateData = async () => {
    let response = await axios.put(`http://localhost:5000/posts/${selectedId}`, formData);
    setRecord(record.map((item) => (item.id === selectedId ? response.data : item)));
    setEditMode(false); 
    setFormData({ id: "", title: "", views: "" }); 
  };

  return (
    <div>
      <h1>ApiWithFetch</h1>
      <button onClick={addData}>Add Data</button>

      {editMode && (
        <div>
          <h2>Edit Data</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>ID:</label>
            <input type="text" name="id" value={formData.id} onChange={handleInputChange} disabled />

            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} />

            <label>Views:</label>
            <input type="text" name="views" value={formData.views} onChange={handleInputChange} />

            <button onClick={updateData}>Update</button>
          </form>
        </div>
      )}

    
      {record &&
        record.map((e, i) => {
          return (
            <ul key={i}>
              <li>{e.id}</li>
              <li>{e.title}</li>
              <li>{e.views}</li>
              <li>
                <button onClick={() => deleteData(e.id)}>Delete</button>
              </li>
              <li>
                <button onClick={() => editData(e)}>Edit</button>
              </li>
            </ul>
          );
        })}
    </div>
  );
}
