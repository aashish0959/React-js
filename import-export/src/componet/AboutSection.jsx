import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutSection() {
  return (
    <Container
      className="about py-5"
      style={{ border: "none", boxShadow: "none" }}
    >
      <Row className="align-items-center">
        {/* Text Section */}
        <Col md={6}>
          <h5 className="fw-semibold">Welcome to</h5>
          <h2 className="fw-bold" style={{ color: "#f9a825" }}>
            Regal Import Exports
          </h2>
          <p className="mt-3 text-muted">
            We at Regal are the leading exporters of Indian spices, dry fruits,
            oil seeds, herbs & grains. We are happy to be continuing to be part
            of India’s traditional export of spices. We know the international
            spice industry’s standards, and we can meet those standards. We have
            more than two decades in the export-import business, and our main
            expertise is in spices. Our company has been more focused on
            providing the best quality product to clients at competitive prices.
          </p>
          <p className="text-muted">
            We are a certified export company, and we supply chilies, black
            pepper, turmeric, cardamom, grains, oil seeds, rice, coconut, tea &
            more. We are situated in Gujarat and Rajasthan, the spice capital of
            India.
          </p>
        </Col>

        {/* Image Section */}
        <Col md={6} className="text-center">
          <div className="hover-img-container">
            <img
              src="https://regalimportexport.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-22-at-12.00.21-PM.jpeg"
              alt="Container"
              className="hover-img img-fluid"
              style={{ maxHeight: "400px", border: "none" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
