import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice';
import Cookies from 'js-cookie';

const Item = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const { itemid } = useParams();
  const token = Cookies.get('token');

  const fetchItem = async () => {
    try {
      const endpoint = `http://localhost:3001/api/items/great/atul/${itemid}`;
      const response = await axios.get(endpoint);
      setItem(response.data.rows[0]);
      // console.log("item",item);
      
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const handleChatClick = () => {
    alert('Chat with user say: hii');
  };

  const handleReportClick = () => {
    alert('this item is reported');
  };

  const handleAddToCart = async () => {
    if (!token) {
      alert('Please sign in to add items to the cart.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/api/cart/add',
        { itemId: item.itemno },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addItem(item));
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('Failed to add item to cart');
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-12 px-1 py-12">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={item.itemphotourl}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-14">
            <h2 className="text-3xl font-bold mb-2">{item.itemname}</h2>

            <div className="mb-4">
              <span className="text-2xl font-bold mr-2"> ₹ {item.itemprice}</span>
              <span className="ml-6 text-lg font-semibold">Listing Date :{item.listingdate}</span>
            </div>

            <p className="text-gray-700 mb-6"> {item.itemdescription}</p>

            <div className="flex space-x-4 mb-6">
              <button
                className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleAddToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>

            {/* Seller Section */}
            <div className="pt-1">
              <p className="underline text-lg">Seller Details</p>
              <h3 className="text-xl font-bold mb-2">{item.username}</h3>
              <p className="text-gray-800">Hostel No: {item.hostelno}</p>
              <p className="text-gray-800">Room No: {item.roomno}</p>
              <p className="text-gray-800">Course: {item.usercourse}</p>

              <div className="mt-4 flex space-x-4">
                <button
                  onClick={handleChatClick}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <FontAwesomeIcon icon={faComments} className="mr-2" />
                  Chat
                </button>

                <button
                  onClick={handleReportClick}
                  className="flex items-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  <FontAwesomeIcon icon={faFlag} className="mr-2" />
                  Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;