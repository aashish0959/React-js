import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routing/Home';
import About from './Routing/About';
import Contact from './Routing/Contact';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
