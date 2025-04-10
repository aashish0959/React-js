import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const handleContactClick = () => {
    setShowContactPopup(!showContactPopup);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="logo2.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Regal Import Export Logo"
              />
              <h5 style={{ color: "#697080", margin: 0 }}>
                YANCY EXIM PVT.LTD.
              </h5>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link-custom1 fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom1 fw-bold">
                About Us
              </Nav.Link>
              <NavDropdown
                title={
                  <span className="nav-link-custom fw-bold">Products</span>
                }
                id="basic-nav-dropdown"
                show={showDropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavDropdown.Item href="#coffee">Coffee</NavDropdown.Item>
                <NavDropdown.Item href="#tea">Tea</NavDropdown.Item>
                <NavDropdown.Item href="#spices">Spices</NavDropdown.Item>
                <NavDropdown.Item href="#rice">Rice</NavDropdown.Item>
                <NavDropdown.Item href="#fruits">Fruits</NavDropdown.Item>
                <NavDropdown.Item href="#vegetables">
                  Vegetables
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#biodegradable">
                  Bio Degradable Tableware
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="#certification"
                className="nav-link-custom1 fw-bold"
              >
                Certification
              </Nav.Link>
              <Nav.Link
                onClick={handleContactClick}
                className="nav-link-custom1 fw-bold"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Popup */}
      {showContactPopup && (
        <div className="contact-popup">
          <div className="popup-inner">
            <h4>Meet Our Directors</h4>
            <div className="director-info">
              <div>
                <img src="IMG2.png" alt="YASH RAIYANI" />
                <p>
                  <strong>Yash Raiyani</strong>
                  <br />
                  📞 9265171535
                </p>
              </div>
              <div>
                <img src="IMG1.png" alt="NENCY PATEL" />
                <p>
                  <strong>Nency Patel</strong>
                  <br />
                  📞 9023972809
                </p>
              </div>
            </div>
            <button className="close-btn" onClick={handleContactClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
