import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function ApiWithFetch() {
  const [record, setRecord] = useState();
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    let response = await axios.get("http://localhost:5000/posts");
    console.log(response.data);
    setRecord(response.data);
  };
  return 
  <div>
    <h1>ApiWithFetch</h1>

    </div>;
}
