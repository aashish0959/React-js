import React from "react";

export default function SpiceHero() {
  return (
    <div className="spice-hero">
      <style>
        {`
          .spice-hero {
            position: relative;
            background-image: url("https://regalimportexport.com/wp-content/uploads/2022/07/Untitled-design-40-1.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 35vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            overflow: hidden;
            padding: 0 1rem;
          }

          .spice-hero::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(3px);
            z-index: 1;
          }

          .spice-hero .hero-text {
            position: relative;
            z-index: 2;
            max-width: 900px;
            margin: 0 auto;
          }

          .spice-hero h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .spice-hero p {
            font-size: 1rem;
            line-height: 1.5;
          }

          @media (max-width: 768px) {
            .spice-hero {
              height: auto;
              padding: 2rem 1rem;
            }

            .spice-hero h1 {
              font-size: 1.5rem;
            }

            .spice-hero p {
              font-size: 0.95rem;
            }
          }

          @media (max-width: 480px) {
            .spice-hero h1 {
              font-size: 1.25rem;
            }

            .spice-hero p {
              font-size: 0.85rem;
            }
          }
        `}
      </style>

      <div className="hero-text">
        <h1>YOU WILL GET THE BEST QUALITY INDIAN SPICES.</h1>
        <p>
          We Export High quality– Spices, Cereals, Coconut, Coffee Beans, Tea,
          Rice, & Pulses to suppliers and more in Bulk Quantity at Best Prices.
          We are always committed to exporting safe and clean, sustainable
          products.
        </p>
      </div>
    </div>
  );
}
