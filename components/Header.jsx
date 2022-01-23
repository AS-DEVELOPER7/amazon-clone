import { Menu, Search, ShoppingCart } from "@material-ui/icons";

import Image from "next/image";
import React from "react";
import Amazon from "../public/img/amazon.png";
const Header = () => {
  return (
    <div className=" ">
      {/* upper header */}
      {/* left */}
      <div className="bg-amazon_blue flex items-center flex-grow py-2">
        <div className="flex flex-grow items-center sm:flex-grow-0 mx-3">
          <Image
            className="cursor-pointer"
            src={Amazon}
            height={60}
            width={120}
            objectFit="contain"
            alt=""
          />
        </div>
        {/* center */}
        <div className="hidden sm:flex bg-yellow-400 h-10 flex-grow rounded-md items-center pr-1 cursor-pointer">
          <input
            type="text"
            placeholder="search...."
            className="px-2 h-full w-2 flex-grow flex-shrink rounded-md focus:outline-none text-gray-600 text-lg"
          />
          <Search className=" h-20 w-20 ml-2" />
        </div>
        {/* right */}
        <div className="text-white flex items-center space-x-5 mx-5 whitespace-nowrap text-xs">
          <div className="cursor-pointer hover:underline ">
            <p>Hello Ali hussain</p>
            <p className="font-semibold text-xs  md:text-sm ">Account & Lists</p>
          </div>
          <div className="cursor-pointer hover:underline ">
            <p>Returns</p>
            <p className="font-semibold text-xs md:text-sm">& Orders</p>
          </div>
          <div className="cursor-pointer hover:underline flex items-center relative">
            <p className="absolute left-[1.1em] top-[-0.7em] text-black text-xs bg-yellow-500 px-[0.4em] rounded-full ">
              0
            </p>
            <ShoppingCart />
            <p className="font-semibold text-xs md:text-sm hidden sm:inline">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* lower header  */}
      <div className="bg-amazon_blue-light flex items-center space-x-3 text-white pl-4 p-2 text-xs md:text-base">
        <p className=" items-center flex  cursor-pointer hover:underline">
          <Menu className="mr-3" />
          All
        </p>
        <p className="cursor-pointer hover:underline ">Prime Video</p>
        <p className="cursor-pointer hover:underline ">Amazon Buisness</p>
        <p className="cursor-pointer hover:underline ">Today's Deal</p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex  ">
          Electronics
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex  ">
          Food & Grocery
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex  ">
          Prime
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex  ">
          Buy Again
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex  ">
          Shopper ToolKit
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex  ">
          Health & Personal Care
        </p>
      </div>
    </div>
  );
};

export default Header;
