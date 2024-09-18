import React from 'react';
import { gsap } from "gsap";
import { ChevronRight } from 'lucide-react';
import base from '../assets/base2.jpg'
import shoes from '../assets/shoes.jpg'
import bags from '../assets/bags.jpg'
import accessories from '../assets/accessories.jpg'


// imported from the api
const products = {
    Bags: [
      { id: 1, name: 'Leather Bag', image: bags },
    ],
    Shoes: [
      { id: 1, name: 'Running Shoes', image: shoes },
    ],
    Accessories: [
      { id: 1, name: 'Watch', image: accessories },
    ],
  };





const LandingPage = () => {
  return (
    <div className="max-w-full mx-auto px-6 py-8">
      <div className="flex">
        {/* Category Sidebar */}
        <div className="w-1/4 pr-4 sticky ">
          <div className="bg-gray-100 p-4">
            <h2 className="font-bold mb-4">CATEGORIES</h2>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                WOMEN'S CLOTHING
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="flex items-center justify-between">
                MEN'S CLOTHING
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="flex items-center justify-between">
                PHONES & ACCESSORIES
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="flex items-center justify-between">
                COMPUTER & OFFICE
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="flex items-center justify-between">
                CONSUMER ELECTRONICS
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="flex items-center justify-between">
                JEWELRY & WATCHES
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="flex items-center justify-between">
                BAGS & SHOES
                <ChevronRight className="w-4 h-4" />
              </li>
              
              <li className="font-bold mt-4">VIEW ALL</li>
            </ul>
            <div className='flex items-center justify-between'>
              <h1 className='font-bold mt-4 text-lg'> Filter</h1>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4">
          {/* Main Product Showcase */}
          <div className="relative mb-8">
            <img src={base} alt="New Product Collection" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
              <h2 className="text-4xl font-bold mb-4">NEW PRODUCT<br />COLLECTION</h2>
              <button className="bg-red-500 text-white px-6 py-2 rounded">SHOP NOW</button>
            </div>
          </div>

          {/* Product Collection Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
      {Object.keys(products).map((category) => (
        <div key={category} className="relative">
          <h2 className="text-xl font-bold mb-2">{category}</h2>
          <div className="grid grid-cols-1 gap-4">
            {products[category].map((product) => (
              <div key={product.id} className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <h3 className="text-white text-2xl font-bold">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;