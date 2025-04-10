import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurLicenses() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const licenses = [
    {
      src: "https://regalimportexport.com/wp-content/uploads/2023/08/1.png",
      alt: "APEDA",
    },
    {
      src: "https://regalimportexport.com/wp-content/uploads/2023/08/2.png",
      alt: "FIEO",
    },
    {
      src: "https://regalimportexport.com/wp-content/uploads/2023/08/3.png",
      alt: "FSSAI",
    },
    {
      src: "https://regalimportexport.com/wp-content/uploads/2023/08/4.png",
      alt: "Coffee Board",
    },
  ];

  return (
    <Container
      className="text-center py-5 license-container"
      data-aos="zoom-in"
    >
      <h2 className="fw-bold mb-4">Our Licenses</h2>
      <Row className="justify-content-center">
        {licenses.map((license, i) => (
          <Col xs={6} md={3} key={i} className="license-col">
            <div className="license-card">
              <img
                src={license.src}
                alt={license.alt}
                className="img-fluid license-img"
              />
            </div>
          </Col>
        ))}
      </Row>

      {/* Remove all borders */}
      <style>{`
        .license-container,
        .license-col,
        .license-card,
        .license-img {
          border: none !important;
          outline: none !important;
        }
      `}</style>
    </Container>
  );
}
