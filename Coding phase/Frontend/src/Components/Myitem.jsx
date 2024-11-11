import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const Myitem = () => {
    const [items, setItems] = useState([]);
    const [userid, setuserid] = useState('');
    const fetchItems = async () => {                                       // Fetch items list
        const response = await axios.get('http://localhost:3001/api/items');
        const allitems=response.data.rows|| [];
        const myitem=allitems.filter(item=>item.sellerid=== userid)
        setItems(myitem);
      
      };

      useEffect(() => {
        const fetchProfile = async () => {
            try {
              const token = Cookies.get('token');
              const response = await axios.get('http://localhost:3001/api/user/profile', {
                headers: {
                  authorization: `Bearer ${token}`
                }
              });
              setuserid(response.data.user.userid);
             // console.log("at",response.data.user.userid);
              
            } catch (error) {
                console.error('Error fetching user:', error)
            }
          };
      
          fetchProfile();
        fetchItems()
      }, []);

      const remove = async (itemId) => {                            
        await axios.put(`http://localhost:3001/api/items/report/item/atul/${itemId}`);
        
        fetchItems(); 
      };
      
      if (items.length===0) {
        return <div className=''><h1 className="text-center m-32 text-2xl "> No Items </h1></div>;
      }

    return (
        <div className="space-y-4 mt-6">
          <ul>
            {items.map((item) => (
              <li key={item.itemno} className="flex justify-between items-center border-b py-3 bg-gray-200 shadow-lg m-2">
                <img class="w-full max-h-[100px] object-cover md:w-52" src={item.itemphotourl} alt=""/>
                <p className="text-lg font-medium text-gray-700">{item.itemname}</p>
                <p className="text-lg font-medium text-gray-700">MRP: {item.itemprice}</p>
                <p className="text-lg font-medium text-gray-700">{item.itemdescription}</p>
                <button onClick={() => remove(item.itemno)}  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none transition duration-200">remove</button>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default Myitem;