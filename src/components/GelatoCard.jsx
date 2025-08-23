import React from "react";
import { BiCart, BiSolidStar } from "react-icons/bi";
import Button from "./Button";

const GelatoCard = ({ productName, productPrice, rating, img }) => {
  return (
    <div className="flex items-center h-full flex-col rounded-[20px] max-w-[255px] mx-auto">
      <a
        href="#"
        className="group mb-6.5 w-full bg-white flex items-end rounded-full justify-center min-h-[254px] max-h-[254px] overflow-hidden"
      >
        <img
          className="max-h-[200px] transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={`/${img}`}
        />
      </a>
      <p className="mb-4 flex items-center gap-1 text-sm font-[Archivo] text-[#0F0200] font-semibold">
        <BiSolidStar className="text-[#FBAB2A] text-[13px]" />
        {rating}/5
      </p>
      <p className="mb-4 max-w-[160px] text-center font-[Archivo] font-bold text-xl text-[#0F0200] leading-6">
        {productName}
      </p>
      <p className="mb-5 mt-auto font-[Archivo] font-bold text-xl text-[#F83D8E]">
        ${productPrice}
      </p>
      <Button paddingBlock={14} content="Add to Cart" color="F83D8E" />
    </div>
  );
};

export default GelatoCard;
