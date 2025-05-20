import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Information */}
          <div>
            <div className="flex items-center mb-6">
              <div className="flex flex-col items-center">
                <div className="text-orange-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19L12 12L20 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12L12 5L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-white border-2 border-white rounded-full h-10 w-10 flex items-center justify-center">
                  <div className="h-4 w-4 border-2 border-white rounded-sm transform rotate-45"></div>
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-white">MKMV</h1>
                <p className="text-xs text-slate-400">EXIM LLP</p>
              </div>
            </div>

            <p className="text-slate-400 mb-6">
              Your trusted partner for global import and export solutions with a commitment to excellence and customer satisfaction.
            </p>

            {/* ✅ Social Media Icons with Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 mt-2 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a href="#resources" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Trade Resources
                </a>
              </li>
              <li>
                <a href="#terms" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 mt-2 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#sea" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">›</span> Sea Freight</a></li>
              <li><a href="#air" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">›</span> Air Freight</a></li>
              <li><a href="#logistics" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">›</span> Global Logistics</a></li>
              <li><a href="#docs" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">›</span> Documentation</a></li>
              <li><a href="#consultancy" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">›</span> Trade Consultancy</a></li>
              <li><a href="#market" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">›</span> Market Analysis</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 mt-2 -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  123 Business Park, Suite 201<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <a href="tel:+918888888888" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                  +91 888 888 8888
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@mkmvexim.com" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                  info@mkmvexim.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 pt-8 pb-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h4 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h4>
              <p className="text-slate-400">
                Stay updated with the latest news and offers in the import/export industry.
              </p>
            </div>
            <div className="lg:w-1/2">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-grow px-4 py-3 rounded-l-md focus:outline-none bg-slate-800 text-slate-200 border-2 border-slate-700 focus:border-orange-500"
                />
                <button 
                  type="submit" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} MKMV EXIM LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
