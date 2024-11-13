import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
const Hostelitem = () => {
    const [items, setItems] = useState([]);
    const { hostelno} = useParams();
    const navigate = useNavigate();
    const fetchItems = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/hostel/${hostelno}`);
          const allItems = response.data.rows || [];
          //const myItems = allItems.filter(item => item.sellerid === userid);
          setItems(allItems);
          
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };
 
    useEffect(() => {
        if (hostelno) {
          fetchItems();
        }
    }, [hostelno]);  
    const handleDivClick = (itemid) => {
        navigate(`/item/${itemid}`); // Navigate to (`/other/${userId}`); route
      };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold text-center mb-12 text-gray-800">
      {`Items for sale in Hostel no.${hostelno}`}
    </h1>
    {items.length === 0 ? (
      <p className="text-center text-gray-600">No items for sale</p>
    ) : (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.itemno}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
            onClick={() => handleDivClick(item.itemno)}
          >
            <img
              src={item.itemphotourl}
              alt={item.itemname}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              {/* console.log(item); */}

              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {item.itemname}
              </h2>
              <p className="text-gray-600 mb-4">{item.itemdescription}</p>
              <p className="text-gray-600 mb-4">Price: ₹{item.itemprice}</p>
              <p className="text-gray-600 mb-4">Tags: {item.itemtags}</p>
              <p className="text-gray-600 mb-4">Visits: {item.itemvisit}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default Hostelitem