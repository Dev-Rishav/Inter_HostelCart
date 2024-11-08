import React ,{useEffect,useState} from 'react';
import {getItems } from '../api';


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

    return (
        <div className='w-5/6 m-auto space-y-10'>
            <div className='flex justify-between items-center p-2'>
                <select name="collection">
                    <option value="Collection">Collection</option>
                    <option value="Phones">Phones</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Glasses">Glasses</option>
                </select>

                <div className='flex items-center space-x-5'>
                    <button><BsArrowLeft size={"1.5rem"} /></button>
                    <button className='bg-red-500 rounded-full p-2 text-white'>
                        <BsArrowRight size={"1.5rem"} />
                    </button>
                </div>
            </div>

            <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center bg-gray-100 p-8 rounded-2xl'>
                {items.map(item => (
                    <div key={item.itemno} className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4'>
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