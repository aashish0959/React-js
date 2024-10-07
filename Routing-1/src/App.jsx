
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './component/Contact'
import Home from './component/Home'
import About from './component/About'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About/:id" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
