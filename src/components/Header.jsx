import React, { useState } from "react";
import logo from "../assets/icytales-logo.png";
import { BiMenu, BiShoppingBag, BiSearch, BiX } from "react-icons/bi";
import Button from "./Button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="max-w-[1440px] mx-auto px-16 py-6 flex items-center justify-between max-xl:px-14 max-sm:px-6 max-md:px-10 max-lg:px-12 relative z-50">
      <a href="./" aria-label="IcyTales - Volver al inicio">
        <img src={logo} alt="IcyTales logo" />
      </a>

      {/* Desktop Navigation */}
      <nav className="flex items-center max-xl:hidden">
        <ul className="flex mr-19 font-[Archivo] text-[#0F0200] gap-10">
          <li>
            <a
              className="p-4 hover:text-[#F83D8E] transition-colors duration-200"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="p-4 hover:text-[#F83D8E] transition-colors duration-200"
              href="#"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="p-4 hover:text-[#F83D8E] transition-colors duration-200"
              href="#"
            >
              Pages
            </a>
          </li>
          <li>
            <a
              className="p-4 hover:text-[#F83D8E] transition-colors duration-200"
              href="#"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="p-4 hover:text-[#F83D8E] transition-colors duration-200"
              href="#"
            >
              Faq's
            </a>
          </li>
        </ul>

        <div className="flex items-center mr-13 gap-6">
          <button
            aria-label="Buscar"
            className="hover:text-[#F83D8E] transition-colors duration-200"
          >
            <BiSearch className="text-2xl cursor-pointer text-[#0F0200]" />
          </button>
          <button
            aria-label="Carrito de compras"
            className="relative hover:text-[#F83D8E] transition-colors duration-200"
          >
            <div className="absolute right-[-4px] bottom-[-4px] before:bg-[#683292] before:w-3.5 before:h-3.5 before:rounded-full before:content-['0'] before:text-[10px] before:text-white before:items-center before:justify-center before:flex before:right-0 before:bottom-0 before:font-[Archivo]"></div>
            <BiShoppingBag className="text-2xl cursor-pointer text-[#0F0200]" />
          </button>
        </div>

        <Button content="Contact Us" color="F83D8E" />
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="text-[#0F0200] text-4xl hidden max-xl:block cursor-pointer hover:text-[#F83D8E] transition-colors duration-200"
        onClick={toggleMobileMenu}
      >
        <BiMenu />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#00000090] z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`
            fixed top-0 right-0 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out xl:hidden
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
            w-[80vw] max-w-sm max-sm:w-screen
          `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 pb-0">
            <img src={logo} alt="IcyTales logo" className="h-12" />
            <button
              onClick={closeMobileMenu}
              aria-label="Cerrar menú"
              className="text-[#0F0200] text-4xl hidden max-xl:block cursor-pointer hover:text-[#F83D8E] transition-colors duration-200"
            >
              <BiX />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col flex-1 px-6 py-8">
            <ul className="space-y-6 mb-8">
              <li>
                <a
                  href="#"
                  className="block text-lg font-[Archivo] text-[#0F0200] hover:text-[#F83D8E] transition-colors duration-200 py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-lg font-[Archivo] text-[#0F0200] hover:text-[#F83D8E] transition-colors duration-200 py-2"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-lg font-[Archivo] text-[#0F0200] hover:text-[#F83D8E] transition-colors duration-200 py-2"
                >
                  Pages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-lg font-[Archivo] text-[#0F0200] hover:text-[#F83D8E] transition-colors duration-200 py-2"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-lg font-[Archivo] text-[#0F0200] hover:text-[#F83D8E] transition-colors duration-200 py-2"
                >
                  Faq's
                </a>
              </li>
            </ul>

            {/* Mobile Menu Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <button
                  aria-label="Buscar"
                  className="flex items-center gap-2 text-[#0F0200] hover:text-[#F83D8E] transition-colors duration-200"
                >
                  <BiSearch className="text-2xl" />
                  <span className="font-[Archivo]">Buscar</span>
                </button>
                <button
                  aria-label="Carrito de compras"
                  className="flex items-center gap-2 text-[#0F0200] hover:text-[#F83D8E] transition-colors duration-200 relative"
                >
                  <div className="relative">
                    <div className="absolute right-[-4px] bottom-[-4px] before:bg-[#683292] before:w-3.5 before:h-3.5 before:rounded-full before:content-['0'] before:text-[10px] before:text-white before:items-center before:justify-center before:flex before:right-0 before:bottom-0 before:font-[Archivo]"></div>
                    <BiShoppingBag className="text-2xl" />
                  </div>
                  <span className="font-[Archivo]">Carrito</span>
                </button>
              </div>

              <div className="pt-4">
                <Button content="Contact Us" color="F83D8E" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
