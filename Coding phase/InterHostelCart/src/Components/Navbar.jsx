import React from "react";
import { TiThMenu } from "react-icons/ti";
import { MdArrowDownward } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { GiFountainPen } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { BiGitCompare } from "react-icons/bi";
import { TfiShoppingCart } from "react-icons/tfi";


const Navbar = () => {
  return (
    <nav className="bg-cyan-950 shadow-md sticky  ">
      <div className=" px-4 flex items-center justify-start gap-3 h-12">
        <h1
          className="text-lg text-gray-200 font-semibold cursor-pointer"
          onClick={() => {}}
        >
          InterHostel Cart
        </h1>
        <TiThMenu className="text-gray-300 text-2xl" />
        {/* search box */}
        <div className=" px-2 rounded-md h-8 w-3/5 bg-sky-700 text-gray-100 flex items-center ">
          <button className=" w-1/12 flex gap-1/2 text-sm">
            All
            <MdArrowDownward className="pt-1" />
          </button>
          <input placeholder="Search Here..." className="border p-2 border-sky-700  bg-cyan-950 text-xs rounded-sm h-full w-full" />
          <FaMagnifyingGlass className="w-1/12 text-gray-100" />
        </div>
        {/* user interaction */}
        <div className="flex flex-row  text-gray-300 gap-3 items-center align-items">
          <div className="flex flex-col items-center">
            <AiOutlineUser className="text-[25px]" />
            <h1 className="text-[12px]">Login</h1>
          </div>
          <div className="flex flex-col items-center">
            <GiFountainPen className="text-[25px]" />
            <h1 className="text-[12px]">Register</h1>
          </div>
          <div className="flex flex-col items-center">
            <GoHeart className="text-[25px]"/>
            <h1 className="text-[12px]">Wishlist</h1>
          </div>
          <div className="flex flex-col items-center">
            <BiGitCompare className="text-[25px]"/>
            <h1 className="text-[12px]">Compare</h1>
          </div> 
        </div>
        {/* cart */}
        <div className=" flex bg-sky-700  size-9 rounded-md">
        <TfiShoppingCart className=" mx-auto mt-1 text-gray-300  text-2xl "/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
