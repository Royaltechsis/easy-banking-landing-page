import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-white flex w-full">
        <div className="container px-4 flex w-full">
          <div className="flex items-center justify-between h-16 w-full p-3">
            {/* Logo Section */}
            <div className="flex-shrink-0 logo flex items-center justify-center">
              <a href="#" className="text-xl font-bold text-gray-800">
                <Logo />
              </a>
            </div>

            {/* Desktop Links Section */}
            <div className="hidden md:flex md:space-x-8 nav-links">
              {["Home", "About", "Contact", "Blogs", "Careers"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 text-sm hover:text-blue-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex">
              <a
                href="login.php"
                className="px-4 py-2 rounded text-sm bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                Request Invite
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-30">
              <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className="text-gray-700 focus:outline-none focus:text-blue-600"
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
            </div>

            {/* Mobile Menu */}
            <div
              className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 shadow-lg transform ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-full'
              } transition-transform duration-300 ease-in-out flex flex-col space-y-1 p-4 z-50`}
            >
              {["Home", "About", "Investment", "Testimonial", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 text-lg hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  {link}
                </a>
              ))}
              <a
                href="#"
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded text-lg hover:bg-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Sign In
              </a>
              <a 
                href="#" 
                className="text-gray-700 text-lg hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;