import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/mkmv2.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Product", path: "/product" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    {
      name: "Resources",
      hasDropdown: true,
      dropdownItems: [
        { name: "Documentation", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Trade Resources", href: "#" },
      ],
    },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md transition-all duration-300 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 w-12">
              <img src={logo} alt="Logo" className="h-full w-full object-contain rounded-full" />
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-slate-800">MKMV</h1>
              <p className="text-xs text-slate-600">EXIM LLP</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((item, idx) =>
                item.hasDropdown ? (
                  <div className="relative group" key={idx}>
                    <button className="text-gray-800 hover:text-white hover:bg-orange-500 px-4 py-2 rounded-full text-sm font-medium flex items-center transition-all duration-300">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-52 rounded-xl shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                      <div className="py-2">
                        {item.dropdownItems.map((dropItem, dropIdx) => (
                          <a
                            key={dropIdx}
                            href={dropItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-orange-500 rounded-lg transition"
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-slate-800 text-slate-200"
                        : "text-gray-800 hover:text-white hover:bg-orange-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-orange-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {navLinks.map((item, idx) =>
              item.hasDropdown ? (
                <div className="relative" key={idx}>
                  <button
                    className="w-full flex justify-between items-center px-4 py-2 text-base font-medium text-gray-800 hover:text-white hover:bg-orange-500 rounded-full transition"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("mobile-resources")?.classList.toggle("hidden");
                    }}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div id="mobile-resources" className="hidden pl-4 py-2">
                    {item.dropdownItems.map((dropItem, dropIdx) => (
                      <a
                        key={dropIdx}
                        href={dropItem.href}
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-orange-500 rounded-lg transition"
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.path}
                  className={`block px-4 py-2 text-base font-medium rounded-full transition ${
                    location.pathname === item.path
                      ? "bg-slate-800 text-slate-200"
                      : "text-gray-800 hover:text-white hover:bg-orange-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
