import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SquareActivity } from 'lucide-react';

const Navbar = ({ scrollToSection, showcaseRef, servicesRef, howItWorksRef, aboutRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 ">
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
          <span className="text-2xl">☰</span>
        </button>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center space-x-6`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
            <li>
              <button className="text-gray-700 hover:text-orange-500" onClick={() => scrollToSection(showcaseRef)}>
                Home
              </button>
            </li>
            <li>
              <button className="text-gray-700 hover:text-orange-500" onClick={() => scrollToSection(servicesRef)}>
                Services
              </button>
            </li>
            <li>
              <button className="text-gray-700 hover:text-orange-500" onClick={() => scrollToSection(howItWorksRef)}>
                How it Works
              </button>
            </li>
            <li>
              <button className="text-gray-700 hover:text-orange-500" onClick={() => scrollToSection(aboutRef)}>
                About
              </button>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="flex items-center space-x-2 mt-4 lg:mt-0">
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
    </nav>
  );
};

export default Navbar;
