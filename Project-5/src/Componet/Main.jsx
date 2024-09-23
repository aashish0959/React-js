import React from "react";
import "./styel.css";
import Headers from "./Headers";
import Heros from "./Heros";
import Clientss from "./Clientss";
import Abouts from "./Abouts";
import Whyus from "./Whyus";
import Skillss from "./Skillss";
import Servicess from "./Servicess";
import Calls from "./Calls";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Main() {
  return (
    <>
      <Headers />
      <Heros />
      {/* <Clientss /> */}
      <Abouts />
      <Whyus />
      <Skillss />
      <Servicess />
      <Calls />
      <Portfolio />
      <Team />
      <Pricing />
      <Testimonials />
      <Faqs />
        <Contact />
      <Footer />

    </>
  );
}
