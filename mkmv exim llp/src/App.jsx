import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./components/Services";
import ProductPage from "./components/Products";
import About from "./pages/About";
import Contact from "./components/Contact";
import ServiceDetail from "./components/serviceData";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} />

          <Route path="/services" element={<Services />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
