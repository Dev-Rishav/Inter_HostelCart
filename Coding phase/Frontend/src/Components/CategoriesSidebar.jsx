import React, { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const CategoriesSidebar = () => {
  const categorySidebarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(categorySidebarRef.current, { x: -200, opacity: 0 }, { duration: 0.5, x: 0, opacity: 1, delay: 0.3 });
  }, []);

  return (
    <div
      ref={categorySidebarRef}
      className="sticky top-0 w-1/4 h-screen bg-gray-100 p-4 overflow-y-auto border-r-2 border-gray-300"
    >
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
    </div>
  );
};

export default CategoriesSidebar;
