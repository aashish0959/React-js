import React from "react";
import Nav from "./componet/Nav";
import Footer from "./componet/footer";

import ProductCard from "./componet/ProductCard";
import WhyChooseUs from "./componet/WhyChooseUs";
import OurLicenses from "./componet/OurLicenses";

import AboutSection from "./componet/AboutSection";
import HeroSection from "./componet/HeroSection";
import SpiceHero from "./componet/SpiceHero";

export default function App() {
  return (
    <>
      <Nav />
      <HeroSection />

      <AboutSection />

      <ProductCard />
      <OurLicenses />
      <WhyChooseUs />

      <SpiceHero />
      <Footer />
    </>
  );
}
