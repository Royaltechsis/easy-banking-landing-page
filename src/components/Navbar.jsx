import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

function Navbar() {
  // Use useEffect to add Event Listener after the component mounts
  useEffect(() => {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
      // Toggle the transform class for sliding effect from top
      const toggleMenu = () => {
        mobileMenu.classList.toggle("-translate-y-full");
        mobileMenu.classList.toggle("translate-y-0");
      };

      menuButton.addEventListener("click", toggleMenu);

      // Cleanup the event listener when the component unmounts
      return () => {
        menuButton.removeEventListener("click", toggleMenu);
      };
    }
  }, []); // Empty dependency array means this runs once after mount

  return (
    <>
      <nav className="bg-white flex w-full">
        <div className="container px-4 flex w-full">
          <div className="flex items-center justify-between h-16 w-full p-3">
            {/* logo section */}
            <div className="flex-shrink-0 logo flex items-center justify-center">
              <a href="#" className="ml-[-10px] text-xl font-bold text-gray-800">
                <Logo />
              </a>
            </div>

            {/* links section */}
            <div className="hidden md:flex md:space-x-8 nav-links">
              <a href="#" className="text-gray-700" style={{ fontSize: "15px" }}>
                Home
              </a>
              <a href="#" className="text-gray-700" style={{ fontSize: "15px" }}>
                About
              </a>
              <a href="#" className="text-gray-700" style={{ fontSize: "15px" }}>
                Contact
              </a>
              <a href="#" className="text-gray-700" style={{ fontSize: "15px" }}>
                Blogs
              </a>
              <a href="#" className="text-gray-700" style={{ fontSize: "15px" }}>
                Careers
              </a>
            </div>

            {/* mobile menu buttons */}
            <div className="hidden md:flex md:space-x-4">
              <a
                href="login.php"
                className="header-cta cta px-4 py-2 rounded text-sm"
              >
                Request Invite
              </a>
            </div>

            {/* mobile menu button */}
            <div className="md:hidden z-10">
              <button
                id="menu-button"
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

            {/* mobile menu */}
            <div
              id="mobile-menu"
              className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 shadow-lg transform -translate-y-full transition-transform duration-300 ease-in-out flex flex-col space-y-1 p-4 z-50"
            >
              <a href="#" className="text-gray-700">
                Home
              </a>
              <a href="#" className="text-gray-700">
                About
              </a>
              <a href="#" className="text-gray-700">
                Investment
              </a>
              <a href="#" className="text-gray-700">
                Testimonial
              </a>
              <a href="#" className="text-gray-700">
                Contact
              </a>
              <a href="#" className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
                Sign In
              </a>
              <a href="#" className="register">
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
