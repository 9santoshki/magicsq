import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo'; // Import the Logo component

const Header: React.FC = () => {
  return (
    <header className="bg-gray-200 text-black py-4 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
        <Logo className="w-12 h-12 mr-3 object-contain" />
        <span className="text-xl font-semibold tracking-wide">Magic Square</span>
        </Link>

        <nav>
          <ul className="flex gap-0 text-lg list-none items-center"> {/* Increased gap */}
            <li>
              <Link
                to="/"
                className="px-5 py-2 hover:bg-gray-400 rounded-md transition duration-200 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-5 py-2 hover:bg-gray-400 rounded-md transition duration-200 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-5 py-2 hover:bg-gray-400 rounded-md transition duration-200 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
