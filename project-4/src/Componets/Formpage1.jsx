import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneNumberErr, setPhoneNumberErr] = useState("");
  const [companyErr, setCompanyErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameErr("Name is required");
    } else {
      setNameErr("");
      alert("Your Product Form Submited")
    }

    if (!email) {
      setEmailErr("Email is required");
    }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailErr("Enter a valid email");
    }
     else {
      setEmailErr("");
      alert("Your Product Form Submited")
    }

    if (!phoneNumber) {
      setPhoneNumberErr("Phone number is required");
    } else {
      setPhoneNumberErr("");
      alert("Your Product Form Submited")
    }

    if (!company) {
      setCompanyErr("Company is required");
    } else {
      setCompanyErr("");
      alert("Your Product Form Submited")
    }
  };

  return (
    <div className="a1">
    <div className="container" style={{ width: "50%", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Product Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <span style={{ color: "red", fontSize: "12px" }}>{nameErr}</span>

        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <span style={{ color: "red", fontSize: "12px" }}>{emailErr}</span>

        <input
          type="text"
          placeholder="Enter Your Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <span style={{ color: "red", fontSize: "12px" }}>{phoneNumberErr}</span>

        <input
          type="text"
          placeholder="Enter Your Company"
          onChange={(e) => setCompany(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <span style={{ color: "red", fontSize: "12px" }}>{companyErr}</span>

        <select onChange={(e) => setCategory(e.target.value)} style={{ padding: "10px", fontSize: "16px" }}>
          <option value="">Select Category</option>
          <option value="Electric">Electric</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Tv">TV</option>
          <option value="Tiles">Tiles</option>
        </select>

        {category === "Electric" && (
          <>
            <input type="text" placeholder="Enter Brand" style={{ padding: "10px", fontSize: "16px" }} />
            <input type="text" placeholder="Enter Model" style={{ padding: "10px", fontSize: "16px" }} />
            <input type="text" placeholder="Enter RAM, ROM" style={{ padding: "10px", fontSize: "16px" }} />
          </>
        )}

        {category === "Clothing" && (
          <>
            <input type="text" placeholder="Enter T-shirt Size" style={{ padding: "10px", fontSize: "16px" }} />
            <input type="text" placeholder="Enter Dress Style" style={{ padding: "10px", fontSize: "16px" }} />
            <input type="text" placeholder="Enter Tops Type" style={{ padding: "10px", fontSize: "16px" }} />
          </>
        )}

        {category === "Books" && (
          <>
            <input type="text" placeholder="Enter Book Name" style={{ padding: "10px", fontSize: "16px" }} />
            <input type="text" placeholder="Enter Subject" style={{ padding: "10px", fontSize: "16px" }} />
          </>
        )}

        {category === "Tv" && (
          <>
            <input type="text" placeholder="Enter Brand" style={{ padding: "10px", fontSize: "16px" }} />
            <input type="text" placeholder="Enter Screen Type (LCD, LED)" style={{ padding: "10px", fontSize: "16px" }} />
          </>
        )}

        {category === "Tiles" && (
          <>
            <input type="text" placeholder="Enter Tile Type (Ceramic, Marble)" style={{ padding: "10px", fontSize: "16px" }} />
            <input type="text" placeholder="Enter Size (in sq. ft)" style={{ padding: "10px", fontSize: "16px" }} />
          </>
        )}

        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
