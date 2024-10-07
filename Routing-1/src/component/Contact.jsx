import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate();
  const home1 = () => {
    navigate('/', { state: { name1: 'AAshish',name: 'Jadav' } })
  }

  return (
    <div>
      <h1>contact</h1>
      <button onClick={home1}>home</button>
      <Link to={"/About"}>About</Link>
    </div>
  )
}
