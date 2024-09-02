import React, { useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  const handleIconClick = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div 
        className="d-flex justify-content-center align-items-center"
        style={{ position: 'relative' }} 
      >
        <img style={{ width: "100%" }} src="hero.webp" alt="Hero" />
        <i style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '24px', color: '#fff',cursor: 'pointer' }} className="fa-solid fa-xmark"onClick={handleIconClick}  ></i>
      </div>
    )
  );
}
