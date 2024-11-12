import React from 'react';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';
import  { useState ,useEffect} from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';           
import io from 'socket.io-client';

const Navbar = () => {

    const totalAmount = useSelector(state => state.cart.totalAmount);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const token = Cookies.get("token");

    const socket = io('http://localhost:3001');  

    useEffect(() => {
      // Decode token and extract userId
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
  
      // Send userId after decoding the token
      socket.emit('user_connected', { userId, token });
  
      // Listen for the username from the server
      socket.on('username', (data) => {
        setUsername(data.username);
        console.log("Fetched Username: ", data.username);  
      });
  
      return () => {
        socket.off('username');
      };
    }, [token]);
  

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  
  const handleSelectChange = (event) => {
    const selectedPage = event.target.value;
    if (selectedPage) {
      navigate(selectedPage); // Navigate to the selected page
    }
  };
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };
return (
    <nav className="bg-white">
        <div className="mx-auto ">
           

            {/* Main navbar */}
            <div className="  flex justify-between items-center  px-20 py-4 border-t border-b border-gray-200">
                <div className="text-2xl font-bold text-red-500">InterHostel Cart</div>
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
                {token ? (
              <button onClick={handleLogout} className="flex items-center hover:text-gray-600">
                Logout <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <Link to="/login" className="flex items-center hover:text-gray-600">
                Login <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
            )}
                    <Link to="/mycart" className="flex items-center hover:text-gray-600">
        <ShoppingCart className="w-5 h-5 mr-1" />
        MY CART:
        <span className="font-bold ml-1"> ₹{totalAmount}</span>
      </Link>
                    <div className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/530412/user.svg"
            alt="User Logo"
            className="w-10 h-10 rounded-full mr-"
            onClick={handleMenuToggle}
          />
  
        </div>
       

        {showMenu && (
        <div
          className="fixed top-14 right-16 w- mr-5 rounded-xl z-30 bg-gray-200 shadow-md p-6"
          
        >
          <ul>
            <li>
              <NavLink
                to="/profile"
                className="block py-2 px-4 hover:bg-gray-100"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/additem"
                className="block py-2 px-4 hover:bg-gray-100"
              >
                Add Item
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payment"
                className="block py-2 px-4 hover:bg-gray-100"
              >
                Payment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                className="block py-2 px-4 hover:bg-gray-100"
              >
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      )}
       
                </div>
            </div>

            {/* Bottom navbar */}
            <div className="flex py-2 bg-gray-700 text-white px-20">
                <div className="bg-red-500 text-white px-4 py-2 font-bold rounded-full">
                    CATEGORIES
                </div>
                <div className="flex space-x-6 items-center ml-6">
                    <Link to="/" className="hover:text-gray-600">HOME</Link>
                    <select name="collection" className=" bg-gray-700" onChange={handleSelectChange} defaultValue="" >
                    <option value="">Clothing</option>
                      <option value="/mens" >MEN</option>
                      <option value="/womens"  >WOMEN</option>
                   </select>
                    
                    <Link to="/electronics" className="hover:text-gray-600">Electronics</Link>
                    <Link to="/stationary" className="hover:text-gray-600">Stationary</Link>
                    <Link to="/vehicle" className="hover:text-gray-600">Vehicle</Link>
                    <Link to="/sport" className="hover:text-gray-600">Sport</Link>
                    <Link to="/medicine" className="hover:text-gray-600">Medicine</Link>
                    <Link to="/accessories" className="hover:text-gray-600">Accessories</Link>
                  
                  
                </div>
            </div>
        </div>
    </nav>
);
};

export default Navbar;