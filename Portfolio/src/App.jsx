import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Loading from "./components/Loading"; // Import the Loading Component

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay for loading
  }, []);

  return (
    <div>
      {loading ? (
        // Show Loading Page
        <Loading />
      ) : (
        // Main App Content
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
