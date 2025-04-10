import React, { useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    title: "Black Pepper",
    description: "Best Quality Indian Black Pepper Seeds, In Wide Ranges.",
    img: "https://regalimportexport.com/wp-content/uploads/2022/07/Untitled-design-56-1.jpg",
  },
  {
    id: 2,
    title: "Cardamom",
    description: "Best Quality Indian Cardamom, In Wide Ranges.",
    img: "https://regalimportexport.com/wp-content/uploads/2022/07/Untitled-design-58-1.jpg",
  },
  {
    id: 3,
    title: "Red Chilly",
    description: "Trade Quality Red Chilly At Lowest Rates.",
    img: "https://regalimportexport.com/wp-content/uploads/2022/07/Untitled-design-60-1.jpg",
  },
  {
    id: 4,
    title: "Cardamom",
    description: "Best Quality Indian Cardamom, In Wide Ranges.",
    img: "https://regalimportexport.com/wp-content/uploads/2022/07/Untitled-design-61-1.jpg",
  },
  {
    id: 5,
    title: "Red Chilly",
    description: "Trade Quality Red Chilly At Lowest Rates.",
    img: "https://regalimportexport.com/wp-content/uploads/2023/08/turmeric.jpg",
  },
];

export default function ProductCard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <center>
        {" "}
        <h2
          className="text-center product-title mb-5"
          style={{ color: "#697080" }}
        >
          OUR RANGE OF PRODUCTS
        </h2>
      </center>
      <div className="product-section py-5 px-3 bg-white">
        <Row className="g-4">
          {products.map((product) => (
            <Col md={6} lg={4} key={product.id} data-aos="zoom-in">
              <div className="custom-card-wrapper">
                <Card className="product-card h-100 text-center border-1">
                  <div className="image-wrapper">
                    <Card.Img
                      variant="top"
                      src={product.img}
                      alt={product.title}
                      className="product-image"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="product-name">
                      {product.title}
                    </Card.Title>
                    <Card.Text className="product-desc">
                      {product.description}
                    </Card.Text>
                    <Button className="btn-custom mt-2">CLICK HERE</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {/* Custom CSS */}
        <style>{`
        .custom-card-wrapper {

          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .custom-card-wrapper:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          transform: translateY(-5px);
        }

        .image-wrapper {
          width: 100%;
          height: 230px;
          overflow: hidden;
          border-radius: 12px;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .custom-card-wrapper:hover .product-image {
          transform: scale(1.05);
        }
      `}</style>
      </div>
    </>
  );
}
