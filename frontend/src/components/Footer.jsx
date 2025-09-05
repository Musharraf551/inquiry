import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Using FontAwesome icons

const Footer = () => {
  return (
    <footer className="Footer bg-black text-white py-8" id='Footer'>
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Footer Logo */}
        <div className="footer-logo mb-6 sm:mb-0">
          <h2 className="text-2xl font-bold">SR-Enterprise</h2> {/* Replace with your enterprise's name or logo */}
        </div>

        {/* Footer Links */}
        <div className="footer-links mb-6 sm:mb-0">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          
            <li><a href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:text-orange-400">Terms of Use</a></li>
            <li><a href="/terms-of-use" className="hover:text-orange-400">GST no:- 10AKEPM1467D2ZP</a></li>
          </ul>
        </div>

        {/* Footer Social Media Icons */}
        <div className="footer-social-media">
          <ul className="flex gap-4">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} SR-Enterprise. All rights reserved.</p>
        <p className="footer-contact">Contact us: <a href="mailto:support@enterprisename.com" className="hover:text-orange-400">support@sr-enterprise.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;


