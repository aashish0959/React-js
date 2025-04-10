import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mb-4">
            <img
              src="logo2.png" // Replace with your logo URL
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Regal Import Export Logo"
            />
            <h3 style={{ color: "#697080" }}>YANCY EXIM PVT.LTD.</h3>

            <samp style={{ color: "#ff8c00" }}>
              EXPORTING EXCELLENCE, IMPORTING TRUST
            </samp>

            <p>
              We help you with trading by delivering the right products at the
              best competitive price worldwide.
            </p>
            <div className="social-icons d-flex gap-3">
              <a href="#" className="text-dark">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mb-4">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
            <h5 className="fw-bold">Products</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  Coffee
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Tea
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Spices
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Rice
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Fruits
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Vegetables
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="col-md-3 col-lg-4 col-xl-4 mb-4">
            <h5 className="fw-bold">Find Us on Map</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.644943609815!2d72.5713625!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f2d13d9b17%3A0x57a8997751f09a0d!2sAhmedabad!5e0!3m2!1sen!2sin!4v1617973401145!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>
            &copy; 2025. All Rights Reserved by Regal Import Export | Designed
            by Sevina Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
