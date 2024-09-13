import React from "react";
import { Search, ShoppingCart, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 text-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold cursor-pointer">InterHostel Cart</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">
              Shop
            </a>
            <a href="#" className="hover:text-gray-600 relative transition-colors duration-200">
              Cart
              <span className="absolute -top-3 -right-6 bg-yellow-500 text-white text-xs px-1 rounded">
                HOT
              </span>
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">
              Blog
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">
              About
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer" />
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
            <div className="relative cursor-pointer">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;