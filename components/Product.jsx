import { Star } from "@material-ui/icons";
import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
const Product = ({ id, title, price, description, category, image }) => {
  const [rate] = useState(Math.floor(Math.random() * 5) + 1); //no. after random is a parameter of what is a range for random numbers
  const [prime] = useState(Math.random() < 0.5); //it means that if random value is less than 0.5 then it is true or else it is false
  return (
    <div className="relative flex flex-col m-5 p-10 z-30 bg-white rounded-lg shadow-lg">
      <p className="absolute top-2 right-2 italic text-xs text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" alt="" />
      <h4 className="my-3">{title}</h4>
      <div>
        {Array(rate)
          .fill()
          .map(() => (
            <Star className="text-yellow-400" />
          ))}
      </div>
      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="">
        <Currency quantity={price} currency="USD" className="mb-5 " />
      </div>
      <p className="text-sm">{prime && "Free Next-Day Delivery"}</p>
      <button className="p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm my-4 focus:outline-none active:from-yellow-500 ">
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
