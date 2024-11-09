import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

function ItemList({ items }) {
  return (
    <div className="p-4">
      <FaShoppingCart className="text-gray-300 text-4xl mx-auto" />  
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="bg-gray-100 p-3 rounded-lg shadow-sm">
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;