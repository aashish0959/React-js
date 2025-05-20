import React from 'react'
import Services from '../components/Services'
import About from './About'
import ProductPage from '../components/Products'
import HeroSlider from '../components/HeroSlider'
import Contact from '../components/Contact'
import Owners from '../components/Owners'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div>
    
        <HeroSlider />
        <About />
        <ProductPage />
     <Services />
     
     
     <Contact />
     <Owners />
     <Footer    />

    </div>
  )
}
