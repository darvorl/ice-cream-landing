import React from "react";
import { BiCart, BiSolidStar } from "react-icons/bi";

const Card = ({
  productName,
  productDescription,
  productPrice,
  rating,
  color,
  img,
}) => {
  return (
    <div className="bg-white rounded-[20px] p-2.5 border-2 border-transparent hover:border-pink-500 hover:border-2">
      <a href="#"></a>
      <a
        href="#"
        className="mb-5.5 rounded-[10px] flex items-center justify-center min-h-[244px] max-h-[244px]"
        style={{
          backgroundColor: `#${color}`,
        }}
      >
        <img src={`/${img}`} />
      </a>
      <div className="flex justify-between mb-3.5 gap-2 items-center px-3">
        <p className="font-[Archivo] font-bold text-xl text-[#0F0200] leading-6">
          {productName}
        </p>
        <p className="flex items-center gap-1 text-sm font-[Archivo] text-[#0F0200] font-semibold">
          <BiSolidStar className="text-[#FBAB2A] text-[13px]" />
          {rating}/5
        </p>
      </div>
      <div className="leading-6 text-[#646464] font-[Archivo] mb-3 px-3">
        {productDescription}
      </div>
      <div className="flex items-center justify-between px-3">
        <p className="font-[Archivo] font-bold text-xl text-[#F83D8E]">
          ${productPrice}
        </p>
        <a
          href="#"
          className="bg-[#683292] hover:bg-[#5e2d84] rounded-full flex items-center justify-center w-11.5 h-11.5"
        >
          <BiCart className="text-2xl text-white" />
        </a>
      </div>
    </div>
  );
};

export default Card;
