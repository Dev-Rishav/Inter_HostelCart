import React from "react";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto ">
        {/* Main navbar */}
        <div className="  flex justify-between items-center  px-20 py-4 border-t border-b border-gray-200">
          <div className="text-2xl font-bold text-red-500">
            InterHostel Cart
          </div>
          <div className="flex items-center space-x-4">
            <select className="border rounded-full px-2 py-1">
              <option>All Categories</option>
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your keyword"
                className="border rounded-full pl-2 pr-8 py-1 w-64"
              />
              <Search className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center hover:text-gray-600">
              MY ACCOUNT <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a href="#" className="flex items-center hover:text-gray-600">
              <ShoppingCart className="w-5 h-5 mr-1" />
              MY CART:
              <span className="font-bold ml-1">$0.00</span>
            </a>
          </div>
        </div>

        {/* Bottom navbar */}
        <div className="flex py-2 bg-gray-700 text-white px-20">
          <div className="bg-red-500 text-white px-4 py-2 font-bold rounded-full">
            CATEGORIES
          </div>
          <div className="flex space-x-6 items-center ml-6">
            <Link to="/" className="hover:text-gray-600">
              HOME
            </Link>
            <Link to="/myShop" className="hover:text-gray-600">
              SHOP
            </Link>
            <Link to="/womens" className="hover:text-gray-600 flex items-center">
              WOMEN <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Link to="/mens" className="hover:text-gray-600 flex items-center">
              MEN <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Link to="/contact" className="hover:text-gray-600">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
