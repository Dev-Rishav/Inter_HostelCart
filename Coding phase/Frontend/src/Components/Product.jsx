import React from 'react';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';
import Image5 from '../assets/Image5.png';
import Image6 from '../assets/Image6.png';
import order1 from '../assets/order1.jpg';
import order2 from '../assets/order2.jpg';  
import accessories from '../assets/accessories.jpg';   


import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const Product = () => {

    return (
        <div className='w-5/6 m-auto space-y-10'>
            <div className='flex justify-between items-center p-2'>
                <select name="collection" id="collection" className="flex rounded-lg outline-none justify-between cursor-pointer text-white items-center p-2 bg-orange-400 w-[120px]">
                    <option value="Collection">Collection</option>
                    <option value="Phones">Phones</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Glasses">Glasses</option>
                </select>


                <div className='flex items-center space-x-5'>
                    <button><BsArrowLeft size={"1.5rem"} /></button>
                    <button className='bg-red-500 rounded-full p-2 text-white drop-shadow-xl'><BsArrowRight size={"1.5rem"} /></button>
                </div>
            </div>
            <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center bg-gray-100 p-8 rounded-2xl'>
                <div className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4'>
                    <img className='w-full h-4/5 object-cover' loading='lazy' src={Image4} alt="" />
                    <p className='font-semibold text-gray-600'>Lorem ipsum dolor.</p>
                    <h1 className='text-xl font-semibold'>₹700</h1>
                </div>
                <div className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4'>
                    <img className='w-full h-4/5 object-cover' loading='lazy' src={Image6} alt="" />
                    <p className='font-semibold text-gray-600'>Lorem ipsum dolor.</p>
                    <h1 className='text-xl font-semibold'>₹700</h1>
                </div>
                <div className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4'>
                    <img className='w-full h-4/5 object-cover' loading='lazy' src={Image5} alt="" />
                    <p className='font-semibold text-gray-600'>Lorem ipsum dolor.</p>
                    <h1 className='text-xl font-semibold'>₹700</h1>
                </div>
                <div className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4'>
                    <img className='w-full h-4/5 object-cover' loading='lazy' src={Image1} alt="" />
                    <p className='font-semibold text-gray-600'>Lorem ipsum dolor.</p>
                    <h1 className='text-xl font-semibold'>₹700</h1>
                </div>
                <div className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4'>
                    <img className='w-full h-4/5 object-cover' loading='lazy' src={Image2} alt="" />
                    <p className='font-semibold text-gray-600'>Lorem ipsum dolor.</p>
                    <h1 className='text-xl font-semibold'>₹700</h1>
                   
                </div>
                <div className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4'>
                    <img className='w-full h-4/5 object-cover' loading='lazy' src={Image3} alt="" />
                    <p className='font-semibold text-gray-600'>Lorem ipsum dolor.</p>
                    <h1 className='text-xl font-semibold'>₹700</h1>
                    
                </div>
                <div className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4'>
                    <img className='w-full h-4/5 object-cover' loading='lazy' src={order1} alt="" />
                    <p className='font-semibold text-gray-600'>Lorem ipsum dolor.</p>
                    <h1 className='text-xl font-semibold'>₹700</h1>
                </div>
                <div className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4'>
                    <img className='w-full h-4/5 object-cover' loading='lazy' src={order2} alt="" />
                    <p className='font-semibold text-gray-600'>Lorem ipsum dolor.</p>
                    <h1 className='text-xl font-semibold'>₹700</h1>
                </div>
            </div>
            <div className='w-full h-[350px] relative'>
                <img className='w-full absolute top-0 rounded-xl h-full object-cover' loading='lazy' src={accessories} alt="" />
                <div className='w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute'>
                    <h1 className='text-4xl text-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit magni unde dicta optio consequatur enim?</p>
                    <button className='w-28 bg-red-400 p-2 rounded-md'>See More</button>
                </div>
            </div>
        </div>
    )
};

export default Product;