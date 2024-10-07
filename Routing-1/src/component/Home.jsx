import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {
  let data = 'mfgikdejfgioej'
  let location = useLocation()

  return (
      <div>
          <h1>home</h1>
          
          <h1>{location.state?.name1}</h1>
          <h1>{location.state?.name}</h1>
          
          <Link to={`/About/${data}`}>about</Link>
          <Link to={"/Contact"}>contact</Link>
      </div>
  )
}
