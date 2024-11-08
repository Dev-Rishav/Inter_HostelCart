import React from 'react';
import products from '../json/products.json'; 

const MyShop = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">My Shop</h1>
      <div className="space-y-8">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 flex">
            <img src={product.image} alt={product.name} className="w-1/3 h-auto object-cover" />
            <div className="p-6 w-2/3">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-800 font-bold mb-4">{product.price}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyShop;