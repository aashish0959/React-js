import { CheckCircle } from 'lucide-react';


export default function About() {
  const features = [
    "Global presence with partners in over 50 countries",
    "Experienced team with deep industry knowledge",
    "Personalized service tailored to your business needs",
    "Innovative solutions for complex logistics challenges",
    "Transparent operations with real-time tracking",
    "Commitment to sustainability in global trade"
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="lg:flex lg:items-center lg:justify-between gap-16">
          
          {/* Left Column - About Content */}
          <div className="lg:w-1/2 lg:pr-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              About MKMV EXIM LLP
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-8"></div>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Founded with a vision to simplify international trade, MKMV EXIM LLP has grown to become a trusted partner for businesses worldwide looking to expand their global footprint.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              Our team of experts brings decades of experience in international logistics, customs regulations, and trade finance. We combine this expertise with cutting-edge technology to deliver seamless import and export solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-300"
                >
                  <CheckCircle 
                    className="flex-shrink-0 mt-1 h-6 w-6 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" 
                  />
                  <p className="text-slate-800 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Connect With Us
              </a>
            </div>
          </div>

          {/* Right Column - Stats and Image */}
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img 
                src="/api/placeholder/600/400" 
                alt="MKMV EXIM Operations" 
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20 flex items-center px-8">
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-6 tracking-wide">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { value: "500+", label: "Clients Worldwide" },
                      { value: "50+", label: "Countries Served" },
                      { value: "15+", label: "Years Experience" },
                      { value: "10k+", label: "Shipments Handled" },
                    ].map(({value, label}, i) => (
                      <div key={i} className="bg-white/25 backdrop-blur-md rounded-lg p-5 text-white text-center">
                        <div className="text-4xl font-extrabold text-orange-400 mb-1">{value}</div>
                        <div className="text-sm font-medium">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gradient-to-r from-orange-400 to-orange-500 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-2xl font-bold mb-4 tracking-wide">Our Mission</h4>
              <p className="text-lg leading-relaxed">
                To empower businesses of all sizes with reliable, efficient, and cost-effective international trade solutions, enabling global growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
