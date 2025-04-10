import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAward, FaUsers, FaPaintBrush, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <FaAward size={40} color="#f5a623" />,
      title: "Trusted Quality",
      desc: "We provide the best and trusted quality products to guide you during the during our clients.",
    },
    {
      icon: <FaUsers size={40} color="#f5a623" />,
      title: "Expert Team Member",
      desc: "We have expert team members, and they will help to guide you during the exporting process.",
    },
    {
      icon: <FaPaintBrush size={40} color="#f5a623" />,
      title: "No Artificial Colors Added",
      desc: "Our spices are 100% pure. We don't add color, so it gives a garnishing touch to your food.",
    },
    {
      icon: <FaHeadset size={40} color="#f5a623" />,
      title: "24X7 Supports",
      desc: "We are sincerely dedicated to our they will to customers. We are here to help you 24X7.",
    },
  ];

  return (
    <div className="why-bg">
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Why You Choose Us</h2>
        <p className="text-center mx-auto mb-5 w-75">
          Our main goal is to provide high-quality Indian spices to our clients.
          India is one of the largest manufacturers of spices and exporters
          globally. We provide top quality, 100% pure, and freshly grounded
          flavorings.
        </p>

        <Row>
          <Col md={8}>
            <Row>
              {features.map((item, i) => (
                <Col md={6} className="mb-4" key={i} data-aos="zoom-in">
                  <div className="feature-card">
                    <div className="icon mb-2">{item.icon}</div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col
            md={4}
            className="text-center d-none d-md-block"
            data-aos="zoom-in"
          >
            <br />
            <img
              src="https://regalimportexport.com/wp-content/uploads/2022/07/Untitled-design-68-1.jpg"
              alt="spices"
              className="img-fluid rounded-circle spice-img"
            />
          </Col>
        </Row>
      </Container>
      <style>{`
  .why-bg {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .why-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://regalimportexport.com/wp-content/uploads/2022/07/Untitled-design-68-1.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(12px);
    z-index: -1;
    opacity: 0.4;
  }

  .feature-card {
    padding: 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    border: 1px solid #f5a623;
  }

  .spice-img {
    border: none;
    outline: none;
    box-shadow: none;
  }
`}</style>
    </div>
  );
}
