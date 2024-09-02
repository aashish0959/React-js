import React from 'react'

export default function TwoNevbar() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">
                  <i className="fa-solid fa-bars"></i> Shop by Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 text-danger mx-2" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 mx-2" href="#">Special <span className="badge bg-danger">Hot</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 mx-2" href="#">Blog</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fs-5 mx-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mega Menu
                </a>
                <ul className="dropdown-menu fs-5 mx-2" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fs-5 mx-2" href="#" id="addonsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  AddOns <span className="badge bg-warning fs-6 mx-2">Featured</span>
                </a>
                <ul className="dropdown-menu fs-5 mx-2" aria-labelledby="addonsDropdown">
                  <li><a className="dropdown-item" href="#">AddOn 1</a></li>
                  <li><a className="dropdown-item" href="#">AddOn 2</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fs-5 mx-2" href="#" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person"></i> My account
                </a>
                <ul className="dropdown-menu fs-5 mx-2" aria-labelledby="accountDropdown">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
