import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [hobby, setHobby] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(data => {
        setDoc(doc(db, "users", data.user.uid), { name, email, city, hobby });
      });
    navigate("/dashboard");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <p className="signup-title">Sign Up</p>
      <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} className="signup-input" />
      <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} className="signup-input" />
      <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} className="signup-input" />
      <input type="text" placeholder="Enter your birthdate" onChange={(e) => setCity(e.target.value)} className="signup-input" />
      <input type="text" placeholder="Enter your city" onChange={(e) => setHobby(e.target.value)} className="signup-input" />
      <button onClick={handleSubmit} className="signup-button">Submit</button>
      <p onClick={handleSignIn} className="signin-link">Login</p>
    </div>
  );
}