import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { navLinks, Plus } from "../constants";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import MoreDropdown from "./MoreDropDown";
import { useTranslation } from 'react-i18next';
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false); 
  const moreButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const { t } = useTranslation(); 
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMoreOpen && 
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMoreOpen]);

  return (
    <header className="py-2 fixed top-0 left-0 w-full bg-white z-50">
      <nav className="flex items-center justify-between py-4 px-6 md:px-4 lg:px-8">
        {/* Logo */}
        <a href="/">
          <img
            src="assets/images/image 4.png"
            alt="logo"
            width={130}
            height={29}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex flex-1 ml-8 sm:space-x-8 xl:space-x-16 md:space-x-6">
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              {item.label === "Plus" ? (
                <button
                  ref={moreButtonRef}
                  className="font-medium text-base lg:text-lg text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMoreOpen(!isMoreOpen);
                  }}
                >
                  {t(item.label)}
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="font-medium text-base lg:text-lg text-gray-900"
                >
                  {t(item.label)}
                </Link>
              )}

              {item.label === "Plus" && isMoreOpen && (
                <MoreDropdown
                  position={{
                    top: `${moreButtonRef.current?.getBoundingClientRect().bottom + 10}px`,
                    left: `${
                      Math.min(
                        moreButtonRef.current?.getBoundingClientRect().left || 0,
                        window.innerWidth - 600 // prevent overflow, assuming dropdown is ~300px wide
                      )
                    }px`,
                    
                  }}
                  dropdownRef={dropdownRef}
                >
                  <div className="flex flex-row gap-4">
                    {Plus.map((category) => (
                      <div key={category.label} className="mb-0">
                        <h4 className="font-semibold text-gray-900 px-4">
                        {t(`PlusMenu.${category.label}`)}
                        </h4>
                        <ul className="mt-6">
                          {category.subtext.map((subItem, index) => (
                            <li
                              key={index}
                              className="py-3 px-4 hover:text-black cursor-pointer"
                            >
                              <Link
                                to={subItem.path}
                                className="text-gray-700 text-sm hover:underline"
                              >
                                {t(`PlusMenu.${subItem.name}`)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </MoreDropdown>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="block md:hidden">
          {isMenuOpen ? (
            <AiOutlineClose
              className="text-2xl text-gray-900 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <img
              src="assets/icons/hamburger.svg"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md p-6 rounded-lg z-50">

          <div className="flex justify-between items-center">
            {/* Logo */}
            <img
              src="assets/images/image 4.png"
              alt="logo"
              width={130}
              height={29}
            />
            {/* Close Button */}
            <button onClick={() => setIsMenuOpen(false)}>
              <AiOutlineClose className="text-2xl text-gray-900" />
            </button>
          </div>

          {/* Menu List */}
          <ul className="mt-4 flex flex-col gap-4 bg-white">
            {navLinks.map((item) => (
              <li key={item.label} className="border-b  border-gray-200">
                <a
                  href={item.href}
                  className="block text-center py-2 font-montserrat text-lg text-gray-900 flex items-center justify-center gap-1"
                  onClick={(e) => {
                    if (item.label === "Plus") {
                      e.preventDefault();
                      setIsMobileMoreOpen(true);
                      setIsMenuOpen(false); // Close the main menu
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                  {item.label === "Plus" && (
                    <FaArrowRight className="text-black text-xl mt-1 ml-1" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

     {/* Mobile More Menu (separate from main mobile menu) */}
{isMobileMoreOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto p-6 rounded-lg">
    {/* Header with logo and back button */}
    <div className="flex justify-between items-center border-b pb-4">
      {/* Logo */}
      <img
        src="assets/images/image 4.png"
        alt="logo"
        width={130}
        height={29}
      />
      
      
      
    </div>

    {/* Categories layout */}
    <div className="mt-6 space-y-6">
    <button 
        onClick={() => setIsMobileMoreOpen(false)} 
        className="flex items-center text-gray-800 font-medium border border-gray-300 rounded-lg px-2 py-2"
      >
        <FaArrowRight className="transform rotate-180 mr-2" /> Back
      </button>
      {Plus.map((category) => (
        <div key={category.label}>
          {/* Category title */}
          <h3 className="text-lg font-bold mb-3 text-black ">{t(`PlusMenu.${category.label}`)}</h3>

          {/* Items as links */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8  p-4 rounded-lg px-0">
  <div className="space-y-6">
    {category.subtext
      .slice(0, Math.ceil(category.subtext.length / 2))
      .map((subItem, index) => (
        <Link
          key={index}
          to={subItem.path}
          className="text-gray-700 hover:underline block"
          onClick={() => setIsMobileMoreOpen(false)}
        >
          {t(`PlusMenu.${subItem.name}`)}
        </Link>
      ))}
  </div>
  <div className="space-y-6">
    {category.subtext
      .slice(Math.ceil(category.subtext.length / 2))
      .map((subItem, index) => (
        <Link
          key={index}
          to={subItem.path}
          className="text-gray-700 hover:underline block"
          onClick={() => setIsMobileMoreOpen(false)}
        >
            {t(`PlusMenu.${subItem.name}`)}
        </Link>
      ))}
  </div>
</div>


        </div>
      ))}
    </div>
  </div>
)}

          
    </header>
  );
};

export default Nav;