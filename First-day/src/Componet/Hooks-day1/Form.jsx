import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [subjectErr, setSubjectErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameErr("Name is required");
    } else {
      setNameErr("");
    }

    if (!subject) {
      setSubjectErr("Subject is required");
    } else {
      setSubjectErr("");
    }

    if (!email) {
      setEmailErr("Email is required");
    } else {
      setEmailErr("");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <span>{nameErr}</span>

          <input
            type="text"
            placeholder="Enter Your Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
          <span>{subjectErr}</span>

          <input
            type="text"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>{emailErr}</span>
          <br />

          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Electric">Electric</option>
            <option value="Clothing">Clothing</option>
          </select>

          {category === "Electric" && (
            <input type="text" placeholder="Enter Warranty" />
          )}

          {category === "Clothing" && (
            <input type="text" placeholder="Enter Return Period" />
          )}

          <br />
          <button type="submit" style={{ margin: "20px 0" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
