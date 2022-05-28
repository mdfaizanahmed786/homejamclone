import React from "react";
import logo from "../assets/logo.png";
import { SearchIcon } from "@heroicons/react/solid";
import { InboxIcon } from "@heroicons/react/outline";
import Labels from "./Labels";

const Header = () => {
  return (
    <>
      <div className="h-screen relative top-0 -mb-32">
        <div className="bg-banner h-full bg-no-repeat bg-cover brightness-50 absolute top-0 right-0 left-0 -z-10 gradient-mask-b-80"></div>
        <nav className="flex justify-between items-center py-5 w-full px-36 z-10">
          <div className="imageContainer relative w-20">
            <img src={logo} alt="logo" className="cursor-pointer" />
          </div>
          <div className="flex gap-10 text-white items-center">
            <p className="flex items-center gap-4">
              <SearchIcon className="text-white h-5 mt-1 cursor-pointer" />
              <p className="cursor-pointer hover:text-gray-400">Search</p>
            </p>
            <p className="cursor-pointer hover:text-gray-400">Help</p>
            <p className="cursor-pointer hover:text-gray-400">Account</p>
            <InboxIcon className="text-white h-5 cursor-pointer" />
          </div>
        </nav>
        <div className="w-5/6 max-w-2xl gap-4 flex flex-col h-1/2  ml-28 justify-center mt-10 ">
          <p className="text-7xl text-white font-cursive">Cari Cari</p>
          <p className="text-white text-2xl opacity-70">
            Live from their sofa to yours. Get closer to your favourite artists,
            and never miss out.
          </p>
        </div>
      </div>
      <div className="flex justify-around px-14">
        <Labels />
        <Labels calender />
        <Labels calender />
        <Labels calender/>
      </div>
    </>
  );
};

export default Header;
