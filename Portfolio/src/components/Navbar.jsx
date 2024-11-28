import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState); 
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <img
            src="/logo2.png"
            alt="Aashish Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-semibold text-gray-200">Aashish</span>
        </div>

        <button
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex flex-col lg:flex-row items-center lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projects"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Skills"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition"
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <a
            href="#contact"
            className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg shadow-md hover:bg-yellow-300 transition-all duration-300 mt-4 lg:mt-0"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
