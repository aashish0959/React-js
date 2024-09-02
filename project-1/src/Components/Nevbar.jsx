import React from 'react';

export default function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-light  px-3">
          <a className="navbar-brand" href="#">
            <img src="https://demo.pocotheme.com/2/image/catalog/maza/svg/logo3.svg" alt="Poco Mega Store Logo" className="logo"/>
          </a>
          <div className="search-bar mx-auto d-flex">
            <select className="form-select" aria-label="All Categories" style={{borderRadius: '20px 0 0 20px', borderRight: 'none'}}>
              <option selected>All Categories</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
            <input className="form-control" type="search" placeholder="Search For Products" aria-label="Search" style={{borderRadius: '0', borderRight: 'none'}}/>
            <button 
              className="btn btn-warning" 
              type="button" 
              style={{borderRadius: '0 20px 20px 0'}}
            >
              SEARCH
            </button>
          </div>
          <div className="navbar-icons d-flex">
            <a href="#" className="icon mx-3">
            <i class="fa-regular fa-heart"></i>
            </a>
            <a href="#" className="icon mx-3">
              <i class="fa-brands fa-codepen"></i>
            </a>
            <a href="#" className="icon mx-3 position-relative">
            <i class="fa-solid fa-cart-shopping"></i>
           
             
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
