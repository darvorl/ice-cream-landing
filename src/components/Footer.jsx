import React from "react";
import {
  BiEnvelope,
  BiUpArrowAlt,
  BiMap,
  BiSolidPhone,
  BiLogoFacebook,
  BiLogoInstagram,
} from "react-icons/bi";
import logo from "../assets/icytales-logo-footer.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#683292]">
      <div className="max-w-[1440px] mx-auto px-16 pt-25 max-xl:px-14 max-sm:pt-10 max-lg:pt-16 max-sm:px-6 max-md:px-10 max-lg:px-12">
        <div className="max-w-[calc(1440px-260px)] gap-12 mx-auto flex justify-between items-start [&_p]:font-[Archivo] [&_p]:text-[#CFB6E2] [&_h5]:font-[Archivo] [&_h5]:font-semibold [&_h5]:text-white  [&_p]:text-sm max-lg:flex-col">
          <a href="./">
            <img src={logo} alt="IcyTales logo" />
          </a>
          <div className="flex flex-col gap-6">
            <h4 className="font-[Archivo] font-semibold text-[22px] text-white">
              Navigation
            </h4>
            <ul className="font-[Archivo] text-[#CFB6E2] text-sm list-disc marker:text-[#F83D8E] grid grid-cols-2 gap-x-12 gap-y-4 marker:mr-3 max-lg:flex max-lg:flex-col max-lg:list-none max-lg:gap-y-5">
              <li>
                <a href="#" className="ml-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="ml-2">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="ml-2">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="ml-2">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="ml-2">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="ml-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6  [&_p]:leading-5 [&_p]:max-w-[230px]">
            <div className="flex gap-5.5">
              <div className="bg-[hsla(0,0%,100%,0.1)] rounded-full w-11.5 h-11.5 flex justify-center items-center">
                <BiMap className="text-white  text-lg" />
              </div>
              <div className="">
                <h5>Address:</h5>
                <p>121 King Street Melbourne, 3000, Australia</p>
              </div>
            </div>
            <div className="flex gap-5.5">
              <div className="bg-[hsla(0,0%,100%,0.1)] rounded-full w-11.5 h-11.5 flex justify-center items-center">
                <BiEnvelope className="text-white  text-lg" />
              </div>
              <div className="">
                <h5>Email:</h5>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7.5">
            <div className="flex gap-5.5">
              <BiSolidPhone className="text-white  text-5xl" />
              <div className="">
                <h5>+123456780123:</h5>
                <p>Got Questions? Call us 24/7</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[hsla(0,0%,100%,0.1)] rounded-full w-11.5 h-11.5 flex justify-center items-center"
              >
                <BiLogoFacebook className="text-white  text-lg" />
              </a>
              <a
                href="#"
                className="bg-[hsla(0,0%,100%,0.1)] rounded-full w-11.5 h-11.5 flex justify-center items-center"
              >
                <BiLogoInstagram className="text-white  text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="py-4.5 flex mt-22 max-lg:mt-16 max-sm:mt-8 justify-center border-t-2 max-w-[calc(1440px-460px)] mx-auto border-[hsla(0,0%,100%,0.15)]">
          <p className="text-[#CFB6E2] text-xs font-[Archivo] text-center">
            Copyright © 2024 BlackRise Themes Inc All rights reserved.
          </p>
        </div>
      </div>

      {/* <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="bg-[#F83D8E] h-16 w-16 absolute cursor-pointer hover:scale-105 duration-300 ease-in transition-transform right-16 bottom-11 rounded-lg flex items-center justify-center max-sm:bottom-5 max-sm:right-5 max-sm:h-14 max-sm:w-14"
        aria-label="Volver al inicio"
      >
        <BiUpArrowAlt className="text-white text-2xl max-sm:text-xl" />
      </button> */}
    </footer>
  );
};

export default Footer;
