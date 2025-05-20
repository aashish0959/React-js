import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import owner1 from '../assets/mkmv2.png';
import owner2 from '../assets/mkmv2.png';
import owner3 from '../assets/mkmv2.png';

const ownersData = [
  {
    name: 'Mr. Rajesh Kumar',
    image: owner1,
    role: 'Founder & Director',
    description: 'With over 20 years of experience in international trading and business operations.',
  },
  {
    name: 'Ms. Nency Patel',
    image: owner2,
    role: 'Co-Founder',
    description: 'Known for her leadership in marketing strategies and global partnerships.',
  },
  {
    name: 'Mr. Yash Raiyani',
    image: owner3,
    role: 'Operations Head',
    description: 'Focused on supply chain, logistics, and product development.',
  },
];

const Owners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
    appendDots: dots => (
      <div className="mt-6">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-orange-500 opacity-40 hover:opacity-100 transition-all duration-300"></div>
    ),
  };

  return (
    <div id="owners" className="w-full py-20 bg-gradient-to-b from-slate-100 to-white">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-14">Owners</h2>

      <div className="w-full max-w-4xl mx-auto px-6">
        <Slider {...settings}>
          {ownersData.map((owner, index) => (
            <div key={index} className="flex flex-col items-center text-center px-2">
              <div
                className="bg-white p-8 rounded-3xl shadow-xl w-full transform transition-all duration-500 hover:scale-[1.04] hover:shadow-orange-200 hover:shadow-2xl relative overflow-hidden"
                style={{ minHeight: '420px' }}
              >
                {/* Glow effect behind image */}
                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-44 h-44 bg-orange-500 blur-3xl opacity-30 z-0"></div>

                <img
                  src={owner.image}
                  alt={owner.name}
                  className="w-36 h-36 mx-auto object-cover rounded-full border-4 border-orange-500 relative z-10 shadow-md"
                />

                <h3 className="text-2xl font-bold mt-6 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                  {owner.name}
                </h3>
                <h4 className="text-orange-500 font-semibold mt-1 mb-3">{owner.role}</h4>
                <p className="text-slate-600 text-base leading-relaxed">{owner.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Owners;
