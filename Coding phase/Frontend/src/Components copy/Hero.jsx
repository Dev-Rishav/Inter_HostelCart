import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {

    return (
        <div className="w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-200 rounded-xl">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
                    <h1 className="text-5xl font-semibold">
                        Find the Perfect Product  Online
                    </h1>
                    <div className="bg-white flex items-center space-x-2 px-5 py-2 rounded-full">
                        <AiOutlineSearch size={"1.2rem"} />
                        <input type="text" placeholder="Search..." className="outline-0 w-full" />
                    </div>
                </div>
                <div className="hidden md:flex p-5">
                    <img src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-[400px] h-[300px] border-8 border-gray-500" />
                </div>
            </div>
        </div>
    )
};

export default Hero;