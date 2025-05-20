import { useParams } from 'react-router-dom';
import { useState } from 'react';

const serviceData = {
  "documentation": {
    title: "Documentation",
    content: "We assist you with all types of export-import documentation, including customs clearance, Bill of Lading, Certificate of Origin, and more.",
    images: [
      "/images/m4.jpg",
      "/images/m5.jpg",
      "/images/doc3.jpg",
      "/images/doc4.jpg",
      "/images/doc5.jpg",
      "/images/doc6.jpg"
    ]
  },
  // Other services
  "sea-freight": {
    title: "Sea Freight",
    content: "Our sea freight services ensure your goods are shipped securely via major sea routes globally.",
    images: []
  },
  "air-freight": {
    title: "Air Freight",
    content: "Air freight solutions for urgent cargo – fast, safe, and efficient.",
    images: []
  },
  "global-logistics": {
    title: "Global Logistics",
    content: "Full logistics handling: warehousing, packaging, tracking and delivery.",
    images: []
  },
  "trade-consultancy": {
    title: "Trade Consultancy",
    content: "Consult our experts for trade expansion strategies and export-import legalities.",
    images: []
  },
  "market-analysis": {
    title: "Market Analysis",
    content: "We offer valuable trade insights and trends to help you make informed decisions.",
    images: []
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData[slug];
  const [selectedImage, setSelectedImage] = useState(null);

  if (!service) {
    return <div className="text-center py-20 text-red-600 text-xl">Service not found!</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{service.title}</h1>
      <p className="text-lg text-slate-600 leading-relaxed mb-10">{service.content}</p>

      {/* Show images */}
      {service.images && service.images.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {service.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Documentation ${index + 1}`}
                className="w-full h-95 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Modal with blur and 50vh size */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="relative w-[70vh] h-[80vh]">
                {/* Close button */}
                <button
                  className="absolute -top-4 -right-4 bg-white text-black text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center shadow hover:scale-110 transition"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
                <img
                  src={selectedImage}
                  alt="Full View"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
