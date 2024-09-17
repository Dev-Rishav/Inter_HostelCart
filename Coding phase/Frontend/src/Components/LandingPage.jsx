import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import base from '../assets/base2.jpg';
import shoes from '../assets/shoes.jpg';
import bags from '../assets/bags.jpg';
import accessories from '../assets/accessories.jpg';
import promoBanner from '../assets/base.jpg';
import testimonialImage from '../assets/base.jpg';
import CategoriesSidebar from './CategoriesSidebar';

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
  const mainContentRef = useRef(null);
  const productShowcaseRef = useRef(null);
  const productThumbnailsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  
    tl.fromTo(mainContentRef.current, { opacity: 0 }, { duration: 0.6, opacity: 1 })
      .fromTo(productShowcaseRef.current, { y: 50, opacity: 0 }, { duration: 0.6, y: 0, opacity: 1 }, '-=0.3') // Reduced duration and delay
      .fromTo(
        productThumbnailsRef.current,
        { y: 50, opacity: 0 },
        { duration: 0.4, y: 0, opacity: 1, stagger: 0.1 }, // Reduced duration and stagger
        '-=0.3'
      );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
  <div className="flex">
    {/* Category Sidebar */}
    <CategoriesSidebar />

    {/* Main Content */}
    <div ref={mainContentRef} className="w-3/4 ml-auto">
      {/* Hero Section */}
      <div ref={productShowcaseRef} className="relative mb-8">
        <img src={base} alt="New Product Collection" className="w-full h-96 object-cover" loading="lazy" />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
          <h2 className="text-4xl font-bold mb-4">NEW PRODUCT<br />COLLECTION</h2>
          <button className="bg-red-500 text-white px-6 py-2 rounded">SHOP NOW</button>
        </div>
      </div>

          {/* Promotional Banner */}
          <div className="relative mb-8">
            <img src={promoBanner} alt="Promotional Banner" className="w-full h-48 object-cover" loading="lazy" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold mb-2">LIMITED TIME OFFER</h2>
              <p className="text-lg">Get 50% off on selected items</p>
            </div>
          </div>

          {/* Product Collection Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(products).map((category, index) => (
              <div key={category} ref={el => productThumbnailsRef.current[index] = el} className="relative">
                <h2 className="text-xl font-bold mb-2">{category}</h2>
                <div className="grid grid-cols-1 gap-4">
                  {products[category].map((product) => (
                    <div key={product.id} className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                        loading="lazy"
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

          {/* Customer Testimonials */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
            <div className="flex space-x-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img src={testimonialImage} alt="Customer" className="w-16 h-16 rounded-full mb-4" loading="lazy" />
                <p className="text-lg">"Great products and amazing service!"</p>
                <p className="text-sm text-gray-500 mt-2">- John Doe</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img src={testimonialImage} alt="Customer" className="w-16 h-16 rounded-full mb-4" loading="lazy" />
                <p className="text-lg">"I love the variety and quality."</p>
                <p className="text-sm text-gray-500 mt-2">- Jane Smith</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img src={testimonialImage} alt="Customer" className="w-16 h-16 rounded-full mb-4" loading="lazy" />
                <p className="text-lg">"Fast shipping and great prices."</p>
                <p className="text-sm text-gray-500 mt-2">- Emily Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;