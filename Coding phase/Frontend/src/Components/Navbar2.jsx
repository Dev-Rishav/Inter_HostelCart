import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { FaUser, FaShoppingBag, FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai'; 

const Navbar = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get('token');

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  return (
    <nav> 
      <div className="mx-auto">
        {/* Main navbar */}
        <div className="flex justify-between items-center px-20 py-4 border-t bg-yellow-50">
          <div className="font-bold text-blue-950 font-cursive text-5xl">
            Inter Hostel
            <div className="flex items-center">
              <p className="font-mono text-[20px]">Inter Hostel Cart</p>
              <FiShoppingCart size={30} color="black" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative list-none">
            <li className="relative list-none">
                        <input
                            type="text"
                            placeholder="Search for items..."
                            className="px-4 py-2 border-2 border-gray-300 min-w-96 rounded-md  bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-950"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700">
                            <AiOutlineSearch size={20} />
                        </span>
                    </li>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {token ? (
              <button onClick={handleLogout} className="flex items-center hover:text-gray-600">
                Logout
              </button>
            ) : (
              <Link to="/login" className="flex justify-center rounded-lg items-center gap-2 bg-gray-700 text-md h-[40px] text-white px-5 py-2 hover:bg-blue-950 hover:scale-110 duration-300">
                Login
              </Link>
            )}
            <Link to="/mycart" className="flex items-center hover:text-gray-700">
              <FaShoppingBag className="w-5 h-5 mr-1" />MY CART:
              <span className="font-bold ml-1"> ₹{totalAmount}</span>
            </Link>

            <div className="flex items-center">
              <FaBars className="h-8 w-8 cursor-pointer hover:text-gray-600" onClick={handleMenuToggle} />
            </div>

            {showMenu && (
              <>
                {/* Overlay backdrop to disable background interaction */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-20"
                  onClick={() => setShowMenu(false)}
                ></div>

                {/* Sidebar menu */}
                <div className="fixed top-0 right-0 w-1/4 h-full bg-yellow-50 z-30 shadow-md  overflow-auto">
                
                <div className="flex items-center rounded-t-md  bg-gray-800 w-screen h-20 space-x-5">
                       <FaUser className="h-10 w-10 ml-14 rounded-2xl bg-white border-2 cursor-pointer" onClick={handleMenuToggle} />
                       <p className='text-white font-semibold text-3xl'>Hello,</p>
                       {/* Close button */}
                  <button
                    className="absolute top-4 right-4 font-bold border-white rounded-md border-2 py-2  px-2 text-white hover:text-black"
                    onClick={() => setShowMenu(false)}
                  >
                    <IoMdClose size={24} />
                  </button>
                   </div>
                  
                
                  <ul className="space-y-4 ">
                  

                    <li >
                      <NavLink to="/profile" className="block py-2 px-4 hover:bg-gray-100" onClick={() => setShowMenu(false)}>
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/additem" className="block py-2 px-4 hover:bg-gray-100" onClick={() => setShowMenu(false)}>
                        Add Item
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/payment" className="block py-2 px-4 hover:bg-gray-100" onClick={() => setShowMenu(false)}>
                        Payment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/orders" className="block py-2 px-4 hover:bg-gray-100" onClick={() => setShowMenu(false)}>
                        Orders
                      </NavLink>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="block py-2 px-4 text-white bg-red-900 hover:bg-gray-300 hover:text-black w-full text-left ">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Secondary Navbar with Categories */}
        <div className="flex py-2 bg-gray-800 text-white px-20">
             <div className="bg-red-500 text-white px-4 py-2 font-bold rounded-full">
               CATEGORIES
             </div>
             <div className="flex space-x-6 items-center ml-6">
               <Link to="/" className="border-2 border-transparent hover:border-white py-2 px-2 hover:rounded-md">Home</Link>
               <Link to="/electronics" className="border-2 border-transparent hover:border-white py-2 px-2 hover:rounded-md">About Us</Link>
               <Link to="/electronics" className="border-2 border-transparent hover:border-white py-2 px-2 hover:rounded-md">Electronics</Link>
               <Link to="/stationary" className="border-2 border-transparent hover:border-white py-2 px-2 hover:rounded-md">Stationary</Link>
               <Link to="/vehicle" className="border-2 border-transparent hover:border-white py-2 px-2 hover:rounded-md">Vehicle</Link>
               <Link to="/sport" className="border-2 border-transparent hover:border-white py-2 px-2 hover:rounded-md">Sport</Link>
               <Link to="/medicine" className="border-2 border-transparent hover:border-white py-2 px-2 hover:rounded-md">Instruments</Link>
               <Link to="/electronics" className="border-2 border-transparent hover:border-white py-2 px-2 hover:rounded-md">Today's Deal</Link>
             </div>
         </div>

      </div>
    </nav>
  );
};

export default Navbar;
