// Services.jsx

import { Ship, Plane, Globe, FileText, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom'; // ← For routing

export default function Services() {
  const services = [
    {
      id: 1,
      slug: "sea-freight",
      title: "Sea Freight",
      description: "Complete sea freight solutions with reliable shipping routes across major ports worldwide.",
      icon: Ship,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      slug: "air-freight",
      title: "Air Freight",
      description: "Expedited air freight services for time-sensitive cargo and international deliveries.",
      icon: Plane,
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    },
    {
      id: 3,
      slug: "global-logistics",
      title: "Global Logistics",
      description: "End-to-end logistics management with tracking and real-time updates for your shipments.",
      icon: Globe,
      color: "text-slate-800",
      bgColor: "bg-slate-100"
    },
    {
      id: 4,
      slug: "documentation",
      title: "Documentation",
      description: "Expert assistance with customs clearance and international trade documentation.",
      icon: FileText,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      id: 5,
      slug: "trade-consultancy",
      title: "Trade Consultancy",
      description: "Strategic consultation for businesses looking to expand into international markets.",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      id: 6,
      slug: "market-analysis",
      title: "Market Analysis",
      description: "Comprehensive market analysis and insights for informed trading decisions.",
      icon: TrendingUp,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          MKMV EXIM LLP offers comprehensive import and export solutions to businesses worldwide. 
          Our expert team ensures seamless international trade operations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="p-6">
              <div className={`${service.bgColor} ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
              <Link 
                to={`/service/${service.slug}`} // ← Navigates to details page
                className="text-orange-500 font-medium hover:text-orange-600 transition-all duration-300 flex items-center group"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
