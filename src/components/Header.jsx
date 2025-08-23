import React, { useState } from "react";
import logo from "../assets/icytales-logo.png";
import { BiMenu, BiShoppingBag, BiSearch } from "react-icons/bi";
import Button from "./Button";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="max-w-[1440px] mx-auto px-16 py-6 flex items-center justify-between max-xl:px-14 max-sm:px-6 max-md:px-10 max-lg:px-12">
      <a href="./">
        <img src={logo} alt="IcyTales logo" />
      </a>
      <div className="flex items-center max-xl:hidden">
        <ul className="flex mr-19 font-[Archivo] text-[#0F0200] gap-10">
          <li>
            <a className="p-4 hover:text-[#F83D8E]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="p-4 hover:text-[#F83D8E]" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="p-4 hover:text-[#F83D8E]" href="#">
              Pages
            </a>
          </li>
          <li>
            <a className="p-4 hover:text-[#F83D8E]" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="p-4 hover:text-[#F83D8E]" href="#">
              Faq's
            </a>
          </li>
        </ul>

        <div className="flex items-center mr-13 gap-6">
          <BiSearch className="text-2xl cursor-pointer text-[#0F0200]" />
          <div className="relative">
            <div className="absolute right-[-4px] bottom-[-4px] before:bg-[#683292] before:w-3.5 before:h-3.5 before:rounded-full before:content-['0'] before:text-[10px] before:text-white before:items-center before:justify-center before:flex before:right-0 before:bottom-0 before:font-[Archivo]"></div>
            <BiShoppingBag className="text-2xl cursor-pointer text-[#0F0200]" />
          </div>
        </div>

        <Button content="Contact Us" color="F83D8E" />
      </div>
      <BiMenu
        className="text-[#0F0200] text-4xl hidden max-xl:block cursor-pointer"
        onClick={handleMobile}
      />
      {isMobile && (
        <div className="bg-white shadow-[0_0_100px_#00000070] w-[80vw] absolute h-screen right-0 top-0 max-sm:w-screen"></div>
      )}
    </header>
  );
};

export default Header;
