import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SquareActivity, Menu, X } from "lucide-react";

const Navbar = ({
  scrollToSection,
  showcaseRef,
  servicesRef,
  howItWorksRef,
  aboutRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleNavClick = (ref) => {
    if (ref && scrollToSection) {
      scrollToSection(ref);
    } else {
      navigate("/");
    }
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <SquareActivity className="text-orange-500" />
          <Link to="/" className="text-2xl font-bold ml-2">
            <h1>
              <span className="text-orange-500">VISIONARY</span>
              <span className="text-black"> Health</span>
            </h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-orange-500" />
          ) : (
            <Menu className="w-6 h-6 text-orange-500" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => handleNavClick(showcaseRef)}
                className="text-gray-700 hover:text-orange-500"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick(servicesRef)}
                className="text-gray-700 hover:text-orange-500"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick(howItWorksRef)}
                className="text-gray-700 hover:text-orange-500"
              >
                How it works
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick(aboutRef)}
                className="text-gray-700 hover:text-orange-500"
              >
                About
              </button>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="flex items-center space-x-2 ml-4">
            <input
              className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="search"
              placeholder="Search"
            />
            <button
              className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-800"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            <li>
              <button
                onClick={() => handleNavClick(showcaseRef)}
                className="text-gray-700 hover:text-orange-500 w-full text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick(servicesRef)}
                className="text-gray-700 hover:text-orange-500 w-full text-left"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick(howItWorksRef)}
                className="text-gray-700 hover:text-orange-500 w-full text-left"
              >
                How it works
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick(aboutRef)}
                className="text-gray-700 hover:text-orange-500 w-full text-left"
              >
                About
              </button>
            </li>
          </ul>

          {/* Mobile Search Bar */}
          <form className="flex flex-col space-y-2 mt-4">
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="search"
              placeholder="Search"
            />
            <button
              className="bg-orange-500 text-white py-2 rounded hover:bg-orange-800"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
