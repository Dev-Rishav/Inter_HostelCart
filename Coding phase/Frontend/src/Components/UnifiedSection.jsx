import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnifiedSection = ({ gender }) => {
  const [items, setItems] = useState([]);
  const [sectionTitle, setSectionTitle] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const endpoint = gender === 'male' ? 'http://localhost:3001/items/mens/1' : 'http://localhost:3001/items/womens/1';
        const response = await axios.get(endpoint);
        setItems(response.data);
        setSectionTitle(gender === 'male' ? 'Items for Men' : 'Items for Women');
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [gender]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">{sectionTitle}</h1>
      {items.length === 0 ? (
        <p className="text-center text-gray-600">No items for sale</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map(item => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src={item.itemPhotoURL} alt={item.itemName} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{item.itemName}</h2>
                <p className="text-gray-600 mb-4">{item.itemDescription}</p>
                <p className="text-gray-600 mb-4">Price: ${item.itemPrice}</p>
                <p className="text-gray-600 mb-4">Tags: {item.itemTags}</p>
                <p className="text-gray-600 mb-4">Visits: {item.itemVisit}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UnifiedSection;