import React, { useEffect, useRef,useState } from 'react';
import Carousel from "./Carousel"
import { gsap } from "gsap";
import {getItems } from '../api';
import { useNavigate } from "react-router-dom";
const Hero = () => {
    const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05, // Delay between each letter animation
        ease: "power2.out"
      }
    );
  }, []);

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
  const searchRef = useRef(null);
  const placeholderRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredItems = items.filter(item =>
    item.itemname.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    // Animation for the search bar
    gsap.fromTo(
      searchRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 3, ease: "back.out(1.7)" }
    );

    // Animation for the placeholder text with bounce effect
    const letters = placeholderRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, []);
    return (
      <div>
        <div className="w-11/12 xl:w-4/5 h-[350px] m-auto mt-8 bg-stone-200 rounded-xl" >
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
                    <h1 className="text-5xl font-semibold">
                       
                        <span ref={textRef} className="inline-block">
                             {"Find the Perfect Product  Online".split("").map((letter, index) => (
                            <span key={index} className="letter inline-block">
                                {letter === " " ? "\u00A0" : letter}
                            </span>
                            ))}
                        </span>
                    </h1>
                    {/* <div className="bg-white flex items-center space-x-2 px-5 py-2 rounded-full">
                        <AiOutlineSearch size={"1.2rem"} />
                        <input type="text" placeholder="Search..." className="outline-0 w-full" />
                    </div> */}
                    <div  className="mb-4 ">
                        <h1 className="text-4xl font-bold text-red-500 mb-2">
                            <span ref={placeholderRef} className="inline-block">
                                {"Search...".split("").map((letter, index) => (
                                <span key={index} className="letter inline-block">
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                                ))}
                            </span>
                        </h1>

                        {/* Search Input Field */}
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Type your search here..."
                            className=" px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                </div>
                <Carousel/>
            </div>
            
        </div>
        <div className='w-5/6 m-auto space-y-10 mt-12'>
            
            <h1 className='text-2xl font-semibold text-center'>Products</h1>
            <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center bg-gray-100 p-8 rounded-2xl shadow-lg '>
                {filteredItems.length>0?(
                  filteredItems.map(item => (
                    <div key={item.itemno} className='product h-[350px] space-y-2 cursor-pointer rounded-xl shadow-2xl p-4 overflow-hidden transform transition duration-500 hover:scale-105'  onClick={() => handleDivClick(item.itemno)}>
                        <img className='w-full h-4/5 object-cover' loading='lazy' src={item.itemphotourl} alt={item.itemname} />
                        <p className='font-semibold text-gray-600'>{item.itemname}</p>
                        <h1 className='text-xl font-semibold'>₹{item.itemprice}</h1>
                    </div>
                ))
                ):(
                  <h1 className='text-2xl font-semibold text-center'>NO Products Found</h1>
                )}
            </div>
        </div>
        </div>
    )
};

export default Hero;