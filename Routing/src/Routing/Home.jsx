import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/About">About</Link>   
      <Link to="/Contact">Contact</Link> 
    </>
  );
}
