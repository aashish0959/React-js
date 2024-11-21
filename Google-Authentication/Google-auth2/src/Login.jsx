import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();  // Define navigate using useNavigate hook

  const handellogin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;  // Extracting user from result
        console.log(user);
        
        // Navigating to the /user route with the email and name
        navigate("/user", { state: { email: user.email, name: user.displayName } });
      })
    
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-heading">Login</h1>
          <button className="login-button" onClick={handellogin}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
