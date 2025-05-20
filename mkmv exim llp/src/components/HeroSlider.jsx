import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Slider data with images and text
const sliderData = [
  {
    id: 1,
    title: "Global Import & Export Solutions",
    description: "Your trusted partner for international trade and logistics services",
    bgImage: "/public/c7.jpg",
    buttonText: "Our Services",
    buttonLink: "#services"
  },
  {
    id: 2,
    title: "International Shipping Excellence",
    description: "Seamless shipping solutions with worldwide coverage",
    bgImage: "/public/l1.jpg",
    buttonText: "Learn More",
    buttonLink: "#about"
  },
  {
    id: 3,
    title: "Trade Consultancy & Support",
    description: "Expert guidance for your global business expansion",
    bgImage: "/public/m1.jpg",
    buttonText: "Contact Us",
    buttonLink: "#contact"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    setCurrentSlide(prev => 
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    setCurrentSlide(prev => 
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="h-full">
        {sliderData.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-20 zoom-animate' : 'opacity-0 z-10'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="text-center text-white px-4 max-w-4xl mx-auto transition-transform duration-700 ease-in-out transform translate-y-0 scale-100">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <a 
                href={slide.buttonLink} 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-500 w-8' 
                : 'bg-white hover:bg-orange-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay with company logo in corner */}
      <div className="absolute top-6 left-6 z-30 flex items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center">
          {/* Add logo or content if needed */}
        </div>
      </div>
    </div>
  );
}
