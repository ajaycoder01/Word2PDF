import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 font-extrabold text-2xl tracking-tight">
            Word2PDF
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <a href="#home" className="hover:text-gray-200 transition">Home</a>
            <a href="#about" className="hover:text-gray-200 transition">About</a>
            <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 rounded-md hover:bg-white/20 transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-4 pt-2 pb-4 space-y-2 rounded-b-md shadow-lg">
          <a href="#home" className="block px-3 py-2 rounded-md hover:bg-blue-400 transition">Home</a>
          <a href="#about" className="block px-3 py-2 rounded-md hover:bg-blue-400 transition">About</a>
          <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-blue-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
