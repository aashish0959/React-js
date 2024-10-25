import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMoney } from "../redux/BudgetSlice";
import { addProduct } from "../redux/ProductSlice";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductName, setProductName] = useState("");

  const dispatch = useDispatch();

  const viewBudget = useSelector((state) => state.budget);
  const viewProduct = useSelector((state) => state.product);

  const handleBudget = () => {
    dispatch(addMoney(amount));
    setAmount("");
  };

  const handleProduct = () => {
    dispatch(
      addProduct({
        id: viewProduct.items.length + 1,
        ProductPrice,
        ProductName,
      })
    );
    setProductPrice("");
    setProductName("");
  };

  // Inline styles for medical design
  const styles = {
    container: {
      backgroundColor: "#2c3e50", // Dark background for sleek look
      padding: "40px",
      fontFamily: "'Roboto', sans-serif",
      color: "#ecf0f1", // Light text for contrast
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    },
    header: {
      color: "#ecf0f1", // White color for the header
      textAlign: "center",
      marginBottom: "40px",
      fontSize: "36px",
      fontWeight: "bold",
    },
    inputSection: {
      marginBottom: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid #8e44ad", // Purple border for separation
      borderRadius: "10px",
      padding: "25px",
      backgroundColor: "#34495e", // Dark card background for input areas
    },
    input: {
      padding: "15px",
      margin: "10px",
      width: "260px",
      borderRadius: "8px",
      border: "1px solid #bdc3c7", // Light grey border for inputs
      fontSize: "15px",
      backgroundColor: "#2c3e50", // Matching the dark theme of the container
      color: "#ecf0f1", // White text inside input fields
    },
    button: {
      padding: "15px 30px",
      backgroundColor: "#8e44ad", // Bright purple button
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
      marginTop: "20px",
      boxShadow: "0 3px 7px rgba(0, 0, 0, 0.1)", // Soft button shadow
    },
    budgetDisplay: {
      fontSize: "28px",
      color: "#27ae60", // Bright green for the budget display
      textAlign: "center",
      margin: "20px 0",
      fontWeight: "bold",
    },
    productSection: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "40px",
    },
    productRow: {
      backgroundColor: "#34495e", // Dark rows for the product table
      padding: "15px",
      textAlign: "left",
      borderBottom: "1px solid #8e44ad", // Purple border for rows
    },
    productCell: {
      padding: "15px",
      textAlign: "center",
      fontSize: "15px",
      color: "#ecf0f1", // White text for product table
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Medical Budget Tracker</h1>

      {/* Budget Section */}
      <div style={styles.inputSection}>
        {viewBudget && (
          <h2 style={styles.budgetDisplay}>Budget: ${viewBudget.budgetMoney}</h2>
        )}
        <input
          type="text"
          value={amount}
          placeholder="Enter Budget Amount"
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleBudget} style={styles.button}>
          Add Budget
        </button>
        <span style={{ color: "#34495e", marginTop: "15px" }}>
          Items in Inventory: {viewProduct.items.length}
        </span>
      </div>

      {/* Product Section */}
      <div style={styles.inputSection}>
        <input
          type="number"
          value={ProductPrice}
          placeholder="Enter Product Price"
          onChange={(e) => setProductPrice(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          value={ProductName}
          placeholder="Enter Product Name"
          onChange={(e) => setProductName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleProduct} style={styles.button}>
          Add Product
        </button>
      </div>

      {/* Product List */}
      {viewProduct.items.length > 0 && (
        <table style={styles.productSection}>
          <thead>
            <tr>
              <th style={styles.productCell}>ID</th>
              <th style={styles.productCell}>Name</th>
              <th style={styles.productCell}>Price</th>
            </tr>
          </thead>
          <tbody>
            {viewProduct.items.map((item) => (
              <tr key={item.id} style={styles.productRow}>
                <td style={styles.productCell}>{item.id}</td>
                <td style={styles.productCell}>{item.ProductName}</td>
                <td style={styles.productCell}>${item.ProductPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
