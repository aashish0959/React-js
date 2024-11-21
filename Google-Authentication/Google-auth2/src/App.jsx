import React from "react";
// import Login from './Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import UserDetails from "./UserDetails";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
