import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [record, setRecord] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

 
  const fetchData = async () => {
    try {
      const allData = await getDocs(collection(db, "Todos"));
      const newData = allData.docs
        .map((data) => ({ docId: data.id, ...data.data() }))
        .filter((item) => item.uid === user.uid);
      setRecord(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const handleTask = async () => {
    const obj = { uid: user.uid, task, priority };

    if (index === null) {
     
      try {
        await addDoc(collection(db, "Todos"), obj);
        fetchData(); 
      } catch (error) {
        console.error("Error adding task:", error);
      }
    } else {

      try {
        await updateDoc(doc(db, "Todos", index), obj);
        fetchData(); 
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }


    setTask("");
    setPriority("");
    setIndex(null);
  };


  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Todos", id));
      fetchData(); 
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };


  const handleEdit = (id) => {
    const singleData = record.find((item) => item.docId === id);
    setTask(singleData.task);
    setPriority(singleData.priority);
    setIndex(id);
  };

  return (
    <center>
      <h1>Todo Manager App</h1>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleTask}>{index === null ? "Add Task" : "Update Task"}</button>
      <br />
      <br />
      <table width={"100%"} border={2}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {record.map((item, i) => (
            <tr key={i}>
              <td>{item.task}</td>
              <td>{item.priority}</td>
              <td>
                <button id="bt-2" onClick={() => handleEdit(item.docId)}>
                  Edit
                </button>
                <button id="bt-3" onClick={() => handleDelete(item.docId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
}
