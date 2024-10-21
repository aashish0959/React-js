import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ApiWithFetch() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    
      let response = await axios.get("http://localhost:5000/posts");
      console.log(response.data);
      setRecord(response.data);

  };

  const addData = async () => {

    let response = await axios.post("http://localhost:5000/posts", {
      id: "5",
      title: "another title",
      views: "asfd"
    });
    console.log(response.data);
    setRecord([...record, response.data]);
   
  };



  return (
    <div>
      <h1>ApiWithFetch</h1>
      <button onClick={addData}>Add Data</button>
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
                <button>Edit</button>
              </li>
            </ul>
          );
        })}
    </div>
  );
}
