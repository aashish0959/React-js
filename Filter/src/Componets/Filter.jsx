import React, { useState } from "react";

export default function Filter() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const arr = [
    {
      name: "Margherita",
      subject: "Pizza",
      image: "./download.jpeg",
      variety: "Margherita",
      price: "$10",
    },
    {
      name: "Pepperoni",
      subject: "Pizza",
      image: "./download (1).jpeg",
      variety: "Pepperoni",
      price: "$12",
    },
    {
      name: "Classic Cheese Pizza",
      subject: "Pizza",
      image: "./download (2).jpeg",
      variety: "Classic Cheese Pizza",
      price: "$11",
    },
    {
      name: "Masala Dhosa",
      subject: "Dhosa",
      image: "./download (3).jpeg",
      variety: "Masala Dhosa",
      price: "$8",
    },
    {
      name: "Rava Dhosa",
      subject: "Dhosa",
      image: "./download (4).jpeg",
      variety: "Rava Dhosa",
      price: "$7",
    },
    {
      name: "Onion Dhosa",
      subject: "Dhosa",
      image: "./download (5).jpeg",
      variety: "Onion Dhosa",
      price: "$6",
    },
    {
      name: "Butter Chicken",
      subject: "Punjabi Food",
      image: "./download (6).jpeg",
      variety: "Butter Chicken",
      price: "$15",
    },
    {
      name: "Palak Paneer",
      subject: "Punjabi Food",
      image: "./download (7).jpeg",
      variety: "Palak Paneer",
      price: "$14",
    },
    {
      name: "Chole Bhature",
      subject: "Punjabi Food",
      image: "./download (8).jpeg",
      variety: "Chole Bhature",
      price: "$13",
    },
    {
      name: "Fried Rice",
      subject: "Chinese",
      image: "./download (9).jpeg",
      variety: "Fried Rice",
      price: "$10",
    },
    {
      name: "Spring Rolls",
      subject: "Chinese",
      image: "./download (10).jpeg",
      variety: "Spring Rolls",
      price: "$8",
    },
    {
      name: "Kung Pao Chicken",
      subject: "Chinese",
      image: "./download (11).jpeg",
      variety: "Kung Pao Chicken",
      price: "$12",
    },
  ];

  // Filter based on name and subject
  const data = arr.filter(
    (item) =>
      (subject ? item.subject === subject : true) &&
      (name ? item.name.toLowerCase().includes(name.toLowerCase()) : true)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Filter</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "200px" }}
      />

      <select onChange={(e) => setSubject(e.target.value)} style={{ marginBottom: "20px", padding: "10px" }}>
        <option value="">All Subjects</option>
        <option value="Pizza">Pizza</option>
        <option value="Dhosa">Dhosa</option>
        <option value="Punjabi Food">Punjabi Food</option>
        <option value="Chinese">Chinese</option>
      </select>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "350px" }}>
        {data.length > 0 ? (
          data.map((e, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
              {e.image && (
                <img
                  src={e.image}
                  alt={e.variety}
                  style={{ width: "150px", height: "150px", borderRadius: "5px" }}
                />
              )}
              <h3>Variety: {e.variety}</h3>
              <p>Price: {e.price}</p>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}
