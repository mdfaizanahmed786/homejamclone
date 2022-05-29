import { ArrowRightIcon, TicketIcon } from "@heroicons/react/outline";
import React from "react";

const Cards = ({ name, category, img }) => {
  return (
    <div className="flex gap-3 rounded-lg flex-col bg-[#111229] shadow-3xl brightness-90">
      <img
        src={img}
        alt="person1"
        className="object-cover h-64 rounded-t-lg opacity-70 w-72"
      />
      <div className="flex flex-col gap-2 px-6 mt-2">
        <p className="category tex-xm bg-yellow-400 px-2 font-curve w-fit ">
          {category}
        </p>
        <p className="font-curve text-white text-xl">{name}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 my-5 cursor-pointer ">
            <p className="text-blue-700 font-curve hover:text-blue-800 ">More Info</p>
            <ArrowRightIcon className="h-6 text-blue-700 hover:text-blue-800 " />
          </div>
          <div className="flex gap-5 items-center">
             
        <div className="border-r-2 border-gray-500 opacity-75  h-10"/>
        <TicketIcon className="h-6 transform rotate-90 text-pink-600 hover:text-pink-800 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
