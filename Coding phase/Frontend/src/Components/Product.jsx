import React ,{useEffect,useState} from 'react';
import {getItems } from '../api';
import { useNavigate } from "react-router-dom";

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const Product = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems= async ()=>{
            try{
                const data=await getItems();
                // console.log(data);
                setItems(data);
            }
            catch(error){
                console.error('Error fetching items:', error);
                throw error;
            }
    }

    fetchItems();
    },[]);
    const navigate = useNavigate();
  const handleDivClick = (itemid) => {
    navigate(`/item/${itemid}`); // Navigate to (`/other/${userId}`); route
  };

    return (
        <div className='w-5/6 m-auto space-y-10 mt-12'>
            
            <h1 className='text-2xl font-semibold text-center'>Products</h1>
            <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center bg-gray-100 p-8 rounded-2xl shadow-lg '>
                {items.map(item => (
                    <div key={item.itemno} className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4 overflow-hidden transform transition duration-500 hover:scale-105'  onClick={() => handleDivClick(item.itemno)}>
                        <img className='w-full h-4/5 object-cover' loading='lazy' src={item.itemphotourl} alt={item.itemname} />
                        <p className='font-semibold text-gray-600'>{item.itemname}</p>
                        <h1 className='text-xl font-semibold'>₹{item.itemprice}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Product;