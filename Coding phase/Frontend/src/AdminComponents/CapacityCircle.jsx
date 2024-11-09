import React from 'react';
import { FaUser } from 'react-icons/fa'; 
import { FaRegFileAlt } from 'react-icons/fa';
import { FaUserSlash } from 'react-icons/fa';

const CapacityCircle = ({ capacity, maxCapacity,label }) => 
{
  const radius = 30;
  const circumference = 2 * Math.PI * radius;  
  const progress = (capacity / maxCapacity) * 100;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-30 h-20">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            className="text-gray-300"
            strokeWidth="6"
            fill="none"
            stroke="currentColor"
          />
        
          <circle
            cx="40"
            cy="40"
            r={radius}
            className="text-silver-500" 
            strokeWidth="6"
            fill="none"
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          {label === "user" ?  
            (<FaUser className="text-gray-300 text-3xl" />) :
           label === "report"?  
            (<FaRegFileAlt className="text-gray-300 text-3xl" />) :
            (<FaUserSlash className="text-gray-300 text-3xl" />) }
        </div>

        <div className="text-center mt-2">
          {label === "user" ?
            (<p className="text-gray-500 text-xs">Registered User</p>) :
           label === "report"?
            (<p className="text-gray-500 text-xs">Reports</p>) :
            (<p className="text-gray-500 text-xs">Block User</p>) } 

          <p className="text-gray-900 font-semibold text-lg">{capacity}</p>
       </div>

      </div>
    </div>
  );
};
export default CapacityCircle;