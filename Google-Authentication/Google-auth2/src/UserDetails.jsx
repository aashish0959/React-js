import React from "react";
import { useLocation } from "react-router-dom";

export default function UserDetails() {
  const location = useLocation();
  const { email, name } = location.state || {};

  return (
    <div className="user1">
      <div className="user2">
        <h1>Welcome</h1>
        <h1 id="h1">{name || "User"}!</h1>
        <p>Email: {email || "No email provided"}</p>
      </div>
    </div>
  );
}
