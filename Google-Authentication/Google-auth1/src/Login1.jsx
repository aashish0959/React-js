import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebaseConfig'

export default function Login1() {
  const handellogin = async () => {
    await signInWithPopup(auth,provider).then((user) => {
      console.log(user)
    })
     
  }
  return (
    <div className="login-container">
    <div className="login-card">
      <h1 className="login-heading">Login</h1>
      <button className="login-button" onClick={handellogin}>
        Sign in with Google
      </button>
    </div>
  </div>
  )
}
