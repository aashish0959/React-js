import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeroSection() {
  return (
    <>
      <style>
        {`::selection {
            background-color: #f9a825;
            color: #000;
        }`}
      </style>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage:
            "url('https://regalimportexport.com/wp-content/uploads/2022/07/Untitled-design-52.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        />
        <Container
          className="text-white text-center px-3"
          style={{ zIndex: 2 }}
        >
          <h1
            className="fw-bold text-center"
            style={{
              fontFamily: "'Poppins', sans-serif",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
              fontSize: "clamp(2rem, 6vw, 4.8rem)", // responsive font
              lineHeight: 1.2,
            }}
          >
            GET ALL INDIAN SPICES, OIL{" "}
            <span
              className="d-block"
              style={{ fontSize: "clamp(1.8rem, 5vw, 4.5rem)" }}
            >
              SEEDS & HERBS HERE.
            </span>
          </h1>

          <hr
            style={{
              width: "120px",
              margin: "20px auto",
              borderTop: "3px solid rgb(255, 157, 0)",
            }}
          />

          <p
            className="lead mx-auto"
            style={{
              fontFamily: "'Poppins', sans-serif",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              maxWidth: "700px",
            }}
          >
            We are exporters of Indian spices, and we provide top quality.
          </p>

          <Button
            variant="light"
            size="lg"
            className="mt-4"
            style={{
              fontWeight: "bold",
              transition: "all 0.4s ease",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              border: "2px solid #f9a825",
              padding: "0.7rem 2rem",
              fontSize: "1.1rem",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08)";
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
              e.target.style.backgroundColor = "#f9a825";
              e.target.style.color = "white";
              e.target.style.border = "2px solid transparent";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
              e.target.style.border = "2px solid #f9a825";
            }}
          >
            LEARN MORE
          </Button>
        </Container>
      </div>
    </>
  );
}
