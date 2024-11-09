import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Item = () => {
  const [item, setItem] = useState({});
  const { itemid } = useParams();
  
  
  const fetchitem=async()=>{
     try {
      const endpoint=`http://localhost:3001/api/items/great/atul/${itemid}`;
      const response = await axios.get(endpoint);  
      setItem(response.data.rows[0]);
     } catch (error) {
      console.error('Error fetching items:', error)
     }
  }
  
  useEffect(() => {
    fetchitem();
  }, []);
 
    const seller = {
        name: "ATUL the great",
        hostelNo: "9",
        roomNo: "9003",
        phoneNo: "6205798429",
        course: "MCA"
      };
     const ite={
        imageurl:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
        name:"Premium Wireless Headphones",
        price:"6969",
        detail:"Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers.",
         date:"24/3/2004"
     };
      const handleChatClick = () => {
        alert('Chat with user say: hii');
      };
    
      const handleReportClick = () => {
        alert('this item is reported');
      };
  return (
    
    <div class="bg-gray-100">
  <div class="container mx-12 px-1 py-12">
    <div class="flex flex-wrap -mx-4">
       {/* Product Images  */}
      <div class="w-full md:w-1/2 px-4 mb-8">
        <img src={item.itemphotourl} alt="Product"
                    class="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage"/>
        
      </div>

       {/* Product Details  */}
      <div class="w-full md:w-1/2 px-14">
        <h2 class="text-3xl font-bold mb-2">{item.itemname}</h2>
        

        <div class="mb-4">
          <span class="text-2xl font-bold mr-2"> ₹ {item.itemprice}</span>
          <span class=" ml-6 text-lg font-semibold">Listing Date :{item.listingdate}</span>
        </div>
        
        <p class="text-gray-700 mb-6"> {item.itemdescription}</p>

        

        

        <div class="flex space-x-4 mb-6">
          <button
                        class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor" class="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </button>
        </div>
         {/* seler section */}
        <div className="pt-1">
       <p className="underline text-lg"> seller details</p>     
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

 
  )
}

export default Item;