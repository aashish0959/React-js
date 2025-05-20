import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCertification } from "react-icons/bi";

const products = [
  {
    name: "Wheat",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Wheat_close-up.JPG",
  },
  {
    name: "Mung Bean",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mung_beans.JPG",
  },
  {
    name: "Indian Blackberry",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Jamun_fruit.jpg",
  },
  {
    name: "Tomato",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
  },
  {
    name: "Cucumber",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Cucumis_sativus_-%E8%8C%84%E7%93%9C.jpg",
  },
  {
    name: "Carrot",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Carrot_JD_1.jpg",
  },
  {
    name: "Onion",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Onion_on_White.JPG",
  },
  {
    name: "Lemon",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Lemon.jpg",
  },
  {
    name: "Beetroot",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Beetrootj.jpg",
  },
  {
    name: "Radish",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Daikon-Japanese-radish.jpg",
  },
  {
    name: "Capsicum",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Green_capsicum.jpg",
  },
];

export default function ProductPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Produce</h2>
        <div className="h-1 w-12 bg-orange-500 mx-auto mt-2 mb-8 rounded"></div>

        <Slider {...settings}>
          {products.map((product, idx) => (
            <div key={idx} className="px-2">
              <div className="group bg-white rounded-2xl shadow-lg transition-transform duration-300">
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <span className="text-sm text-orange-600 border border-orange-400 rounded-full px-2 py-1">
                    Fresh
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
