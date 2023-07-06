import React from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaInternetExplorer } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-around p-2 shadow-sm items-center sticky top-0 z-10 bg-white">
      <div className="">
        <h1 className="text-center  text-[#f25058] font-bold text-2xl">
          Airbnb
        </h1>
        {/* <img src="airbnb.jpg" alt="airbnb logo" /> */}
      </div>

      <div className=" flex  justify-around shadow-lg rounded-full  items-center  p-1 w-[400px] shadow-md gap-3 hover:shadow-lg">
        <div className="font-bold text-black">Anywhere</div>
        <div className="border-r  border-gray-100 border-l font-bold text-black p-3 w-30 border-gray-100 ">
          Anyweek
        </div>
        <div className="flex gap-3 items-center justify-center">
          <h2 className="text-gray-300 ">Add guest</h2>
          <div className="bg-[#f25058] text-white rounded-full p-2">
            <BiSearch className="text-white font-bold" />
          </div>
        </div>
      </div>
      <div className=" flex  justify-between items-center items-center gap-4 p-3">
        <div className="font-semibold px-2 py-1 hover:bg-gray-100 hover:rounded-full cursor-pointer">
          Airbnb your home
        </div>
        <div className="hover:rounded-full hover:bg-gray-100 p-3 cursor-pointer">
          <FaInternetExplorer />
        </div>
        <div className="flex justify-center items-center border border-gray-400  gap-2 rounded-full p-3 hover:shadow-lg cursor-pointer">
          <GiHamburgerMenu className="text-2xl" />
          <FaUserCircle className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
