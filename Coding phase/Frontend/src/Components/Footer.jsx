import React, { useEffect } from 'react';
import { FaTelegramPlane, FaMobileAlt, FaLinkedin, FaInstagram, FaFacebook, FaBell } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const aosDelay = "300";  
  return (
    <footer 
      data-aos="fade-right"
      data-aos-delay={aosDelay}
      className="py-5 bg-gray-100"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="mb-3">
          <h5 className="text-lg font-semibold mb-2">Important Links</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Chats</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Newsletter</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
          </ul>
        </div>

        <div className="mb-3">
          <h5 className="text-lg font-semibold mb-2">Category</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Women</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Men</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Electronics</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Accessories</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Computer and Office</a></li>
          </ul>
        </div>

        <div className="mb-3">
          <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800 flex items-center"><FaTelegramPlane className="mr-2" /> Manit, Bhopal</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800 flex items-center"><FaMobileAlt className="mr-2" /> 9123456789</a></li>
          </ul>
          <ul className="flex space-x-4 mt-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram /></a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800"><FaFacebook /></a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800"><FaLinkedin /></a></li>
          </ul>
        </div>

        <div className="mb-3">
          <form>
            <h5 className="text-lg font-semibold mb-2">Subscribe to our page.</h5>
            <p className="text-gray-600 mb-4">Monthly digest of what's new and exciting from us.</p>
            <div className="flex flex-col sm:flex-row w-full gap-2">
              <label htmlFor="newsletter1" className="sr-only">Email address</label>
              <input id="newsletter1" type="text" className="form-input w-full sm:w-auto flex-grow p-2 border border-gray-300 rounded" placeholder="Email address" />
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 flex items-center" type="button">
                Subscribe <FaBell className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center py-4 mt-8 border-t border-gray-300">
        <p className="text-gray-600 text-center">© 2024 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;