import React ,{useEffect,useState} from 'react';
import {getItems } from '../api';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import Carousel from './Carousel';

import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h4 from "../assets/h4.jpg";
import h6 from "../assets/h6.jpg";
import h7 from "../assets/h7.jpg";
import h9 from "../assets/h9.jpg";
import h10 from "../assets/h10.jpg";
import h12 from "../assets/h12.jpg";
const images = [h1,h2,h4,h6,h7,h9,h10,h12];

const Product = () => {
    const [items, setItems] = useState([]);
    const [hostelNumbers, setHostelNumbers] = useState({});
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

    useEffect(() => {
        const fetchHostelNumber = async (sellerId) => {
            try {
                const response = await fetch(`/api/user/profile/hostelNumber/${sellerId}`);
                const data = await response.json();
                return data.hostelNumber; 
            } catch (error) {
                console.error('Error fetching hostel number:', error);
                return null; 
            }
        };

        const getHostelNumbers = async () => {
            const hostelData = {};
            for (const item of items) {
                if (!hostelData[item.sellerId]) {
                    const hostelNumber = await fetchHostelNumber(item.sellerId);
                    hostelData[item.sellerId] = hostelNumber;
                }
            }
            setHostelNumbers(hostelData);
        };

        getHostelNumbers();
    }, [items]);

    return (
        <div>
        <p className='mt-[30px] ml-[30px] font-bold text-2xl'>Explore your Hostel Items..</p>  
        <Carousel images={images}/>
        <div className='w-5/6 m-auto space-y-10 mt-8'>
            <div className='flex justify-between items-center p-2'>
                <select name="collection">
                    <option value="Collection">Collection</option>
                    <option value="Phones">Phones</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Glasses">Glasses</option>
                </select>

                
            </div>

            <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center bg-gray-100 p-8 rounded-2xl shadow-lg  '>

            {items.map(item => (
              <div key={item.itemno} className='relative product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4 overflow-hidden transform transition duration-500 hover:scale-105'>
                <img className='w-full h-4/5 object-cover'loading='lazy' src={item.itemphotourl} alt={item.itemname}/>
                <p className='font-semibold text-gray-600'>{item.itemname}</p>
                <h1 className='text-xl font-semibold'>₹{item.itemprice}</h1>

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-85 text-white text-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col items-center justify-between w-full px-5">
                      <p className="text-justify">{hostelNumbers[item.sellerId] ? hostelNumbers[item.sellerId] : 'Hostel No: '}</p>
                      <p className="text-justify">{item.itemdescription}</p>
                    </div>
                </div>
              </div>
            ))}

            </div>
        </div>
        </div>
    )
};

export default Product;