import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function About() {
  let prams = useParams()
    return (
        <div>
            <h1>about</h1>
            <p>{prams.id}</p>
            <Link to={"/"}>home</Link>
            <Link to={"/Contact"}>contact</Link>
        </div>
    )
}
