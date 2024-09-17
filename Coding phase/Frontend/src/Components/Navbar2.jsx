import React, { useEffect, useRef } from 'react';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const navbarRef = useRef(null);
  const mainNavRef = useRef(null);
  const bottomNavRef = useRef(null);
  const logoRef = useRef(null);
  const searchInputRef = useRef(null);
  const accountLinkRef = useRef(null);
  const cartLinkRef = useRef(null);
  const categoryButtonRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(navbarRef.current, { y: -100, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: 'power2.out' });
    gsap.fromTo(mainNavRef.current, { y: -50, opacity: 0 }, { duration: 1, y: 0, opacity: 1, delay: 0.5, ease: 'power2.out' });
    gsap.fromTo(bottomNavRef.current, { y: 50, opacity: 0 }, { duration: 1, y: 0, opacity: 1, delay: 1, ease: 'power2.out' });
    gsap.fromTo(logoRef.current, { x: -100, opacity: 0 }, { duration: 1, x: 0, opacity: 1, delay: 1.5, ease: 'power2.out' });
    gsap.fromTo(searchInputRef.current, { x: 100, opacity: 0 }, { duration: 1, x: 0, opacity: 1, delay: 2, ease: 'power2.out' });
    gsap.fromTo(accountLinkRef.current, { x: 100, opacity: 0 }, { duration: 1, x: 0, opacity: 1, delay: 2.5, ease: 'power2.out' });
    gsap.fromTo(cartLinkRef.current, { x: 100, opacity: 0 }, { duration: 1, x: 0, opacity: 1, delay: 3, ease: 'power2.out' });
    gsap.fromTo(categoryButtonRef.current, { x: -100, opacity: 0 }, { duration: 1, x: 0, opacity: 1, delay: 3.5, ease: 'power2.out' });
    gsap.fromTo(navLinksRef.current, { x: 100, opacity: 0 }, { duration: 1, x: 0, opacity: 1, delay: 4, ease: 'power2.out', stagger: 0.2 });
  }, []);

  return (
    <nav ref={navbarRef} className="bg-white">
      <div className="mx-auto">
        {/* Main navbar */}
        <div ref={mainNavRef} className="flex justify-between items-center px-20 py-4 border-t border-b border-gray-200">
          <div ref={logoRef} className="text-2xl font-bold text-red-500">InterHostel Cart</div>
          <div className="flex items-center space-x-4">
            <select className="border rounded-full px-2 py-1">
              <option>All Categories</option>
            </select>
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Enter your keyword"
                className="border rounded-full pl-2 pr-8 py-1 w-64"
              />
              <Search className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a ref={accountLinkRef} href="#" className="flex items-center hover:text-gray-600">
              MY ACCOUNT <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a ref={cartLinkRef} href="#" className="flex items-center hover:text-gray-600">
              <ShoppingCart className="w-5 h-5 mr-1" />
              MY CART:
              <span className="font-bold ml-1">$0.00</span>
            </a>
          </div>
        </div>

        {/* Bottom navbar */}
        <div ref={bottomNavRef} className="flex py-2 bg-gray-700 text-white px-20">
          <div ref={categoryButtonRef} className="bg-red-500 text-white px-4 py-2 font-bold rounded-full">
            CATEGORIES
          </div>
          <div className="flex space-x-6 items-center ml-6">
            {['HOME', 'SHOP', 'WOMEN', 'MEN', 'SALES', 'PAGES'].map((link, index) => (
              <a
                key={index}
                ref={el => navLinksRef.current[index] = el}
                href="#"
                className="hover:text-gray-600 flex items-center"
              >
                {link} {['WOMEN', 'MEN', 'PAGES'].includes(link) && <ChevronDown className="w-4 h-4 ml-1" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;