import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Myitem = () => {
  const [items, setItems] = useState([]);
  const [userid, setUserid] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = Cookies.get('token');
      if (!token) {
        setError('Please sign in to view your added items');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/api/user/profile', {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        setUserid(response.data.user.userid);
      } catch (error) {
        console.error('Error fetching user:', error);
        setError('Failed to fetch user profile');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (userid) {
      fetchItems();
    }
  }, [userid]);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/items');
      const allItems = response.data.rows || [];
      const myItems = allItems.filter(item => item.sellerid === userid);
      setItems(myItems);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError('Failed to fetch items');
      setLoading(false);
    }
  };

  const remove = async (itemId) => {
    try {
      await axios.put(`http://localhost:3001/api/items/report/item/atul/${itemId}`);
      fetchItems();
    } catch (error) {
      console.error('Error removing item:', error);
      setError('Failed to remove item');
    }
  };

  const goToAuction = (itemno) => {
    navigate('/auction', { state: { itemno } });
  };

  if (loading) {
    return <div className="text-center m-32 text-2xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center m-32 text-2xl text-red-500">{error}</div>;
  }

  if (items.length === 0) {
    return <div className="text-center m-32 text-2xl">No Items</div>;
  }

  return (
    <div className="space-y-4 mt-6">
      <ul>
        {items.map((item) => (
          <li key={item.itemno} className="flex justify-between items-center border-b py-3 bg-gray-200 shadow-lg m-2">
            <img className="w-full max-h-[100px] object-cover md:w-52" src={item.itemphotourl} alt="" />
            <p className="text-lg font-medium text-gray-700">{item.itemname}</p>
            <p className="text-lg font-medium text-gray-700">MRP: {item.itemprice}</p>
            <p className="text-lg font-medium text-gray-700">{item.itemdescription}</p>
            <div className="flex space-x-2">
              <button onClick={() => remove(item.itemno)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none transition duration-200">Remove</button>
              <button onClick={() => goToAuction(item.itemno)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200">Go to Your Auction</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Myitem;