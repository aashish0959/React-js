import React from 'react'

export default function Heros() {
  return (
    <>
     <section id="hero" className="hero section dark-background">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>Better Solutions For Your Business</h1>
                <p>
                  We are team of talented designers making websites with
                  Bootstrap
                </p>
                <div className="d-flex">
                  <a href="#about" className="btn-get-started">
                    Get Started
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle"></i>
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img
                  src="./hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
    </>


  )
}