import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/Logo.png";

const Navbar = ({ token,setToken }) => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // detect current route

  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/"); // back to home after logout
  };

  return (
    <nav className="bg-gray-800 p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-3xl" />
          <h1 className="text-white text-2xl font-bold">SR-Enterprises</h1>
        </div>

        <div className="sm:hidden" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
        </div>
      </div>

      <div
        className={`flex flex-col sm:flex-row sm:space-x-6 items-center sm:items-center sm:justify-end ${isMobile ? 'block' : 'hidden sm:flex'
          }`}
      >
        {/* Home Link */}
        {isHomePage ? (
          <ScrollLink to="Home" smooth={true} duration={500} className="text-white hover:text-gray-400 py-2 text-lg">
            Home
          </ScrollLink>
        ) : (
          <RouterLink to="/" className="text-white hover:text-gray-400 py-2 text-lg">
            Home
          </RouterLink>
        )}

        {/* Product Link */}
        {isHomePage ? (
          <ScrollLink to="Product" smooth={true} duration={500} className="text-white hover:text-gray-400 py-2 text-lg">
            Product
          </ScrollLink>
        ) : (
          <RouterLink to="/" className="text-white hover:text-gray-400 py-2 text-lg">
            Product
          </RouterLink>
        )}

        {/* About Us Link */}
        {isHomePage ? (
          <ScrollLink to="AboutUs" smooth={true} duration={500} className="text-white hover:text-gray-400 py-2 text-lg">
            About Us
          </ScrollLink>
        ) : (
          <RouterLink to="/" className="text-white hover:text-gray-400 py-2 text-lg">
            About Us
          </RouterLink>
        )}

        {/* Contact just scrolls */}
        {isHomePage ? (
          <ScrollLink to="Contact" smooth={true} duration={500} className="text-white hover:text-gray-400 py-2 text-lg">
            Contact
          </ScrollLink>
        ) : (
          <RouterLink to="/" className="text-white hover:text-gray-400 py-2 text-lg">
            Contact
          </RouterLink>
        )}

        {/* Inquiry is always a new page */}
        <RouterLink to="/inquiry" className="text-white hover:text-gray-400 py-2 text-lg">
          Inquiry
        </RouterLink>
        {token ? (
          <>
          <RouterLink to="/admin/inquiry" className="text-white hover:text-gray-400 py-2 text-lg">
            dashboard
          </RouterLink>
          <button
            onClick={handleLogout}
            className="text-white hover:text-red-400 py-2 text-lg"
          >
            Logout
          </button>
          </>
        ) : (
          <RouterLink to="/login" className="text-white hover:text-gray-400 py-2 text-lg">
            login
          </RouterLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
