// TopBar.jsx
import { Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="bg-[#0c1f39] text-white text-sm py-2 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section: Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4 text-orange-500" />
            <span>+91 98765 43210</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1">
            <Mail className="h-4 w-4 text-orange-500" />
            <span>info@mkmvexim.com</span>
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center space-x-3 mt-2 sm:mt-0">
          <a href="#" className="hover:text-orange-500 transition-colors">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <FaLinkedinIn className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
