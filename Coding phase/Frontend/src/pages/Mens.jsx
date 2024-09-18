import React from 'react';
import MenBannerlist from '../json/mensItems'; // Adjust the import path as needed

const Mens = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Men's Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {MenBannerlist.map(item => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src={item.img} alt={item.subtitle} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.subtitle}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mens;