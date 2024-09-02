import React from 'react';
import Nevbar from './Nevbar';
import Background from './Backgrund';

export default function Footer() {
  return (
    <>
      <footer className="footer mt-auto py-3" style={{ backgroundColor: '#EEEEEE' }}>
        <div className="container">
          <div className="row">
            <Nevbar  />
            <div className="col-md-3">
              <h5 className="fs-3">About Us</h5>
              <p className="fs-5 mt-4">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="fs-3">My Account</h5>
              <ul className="fs-5 mt-4 mx-2">
                <li><a href="#">My Order</a></li>
                <li><a href="#">Return</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Tracking</a></li>
                <li><a href="#">Wishlist</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fs-3">Quick Links</h5>
              <ul className="fs-5 mt-4 mx-2">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Brands</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fs-3">Get in Touch</h5>
              <ul>
                <li><address className="fs-5 mt-4 mx-2">692 London Road, London, NW36 7JA</address></li>
                <li><a href="tel:123456789" className="fs-6 mt-4 mx-2">Call us: 123456789</a></li>
                <li><a href="mailto:demo@demo.com" className="fs-6 mt-4 mx-2">Email: demo@demo.com</a></li>
                <li><a href="tel:124357" className="fs-6 mt-4 mx-2">Fax: 124357</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
