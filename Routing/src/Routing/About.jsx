import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate("/");  
  };

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link> 
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to={'/Contact'}>Contact</Link> 
        </li>
        <button onClick={handleBtn}>Go to Home</button>
      </ul>
    </div>
  </div>
</nav>
 
      
    
     
    </>
  );
}
