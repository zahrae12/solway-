import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { navLinks, More } from "../constants";
import { FaArrowRight } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false); // Separate state for mobile More menu
  const moreButtonRef = useRef(null);
  const dropdownRef = useRef(null);

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
    <header className="pl-8 xl:pl-2 md:pl-10 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container pl-0">
        {/* Logo */}
        <a href="/">
          <img
            src="src/assets/images/image 4.png"
            alt="logo"
            width={130}
            height={29}
          />
        </a>

        {/* Desktop Menu */}
        <ul className="flex-1 flex ml-8 sm:space-x-4 md:space-x-6 lg:space-x-6 xl:space-x-20 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <a
                href={item.href}
                className="font-medium text-base lg:text-lg text-gray-900"
                ref={item.label === "More" ? moreButtonRef : null}
                onClick={(e) => {
                  if (item.label === "More") {
                    e.preventDefault();
                    setIsMoreOpen(!isMoreOpen);
                  }
                }}
              >
                {item.label}
              </a>

              {/* More Dropdown - Using fixed positioning */}
              {item.label === "More" && isMoreOpen && (
                <div 
                  ref={dropdownRef}
                  className="fixed bg-white bg-opacity-100 shadow-lg rounded-lg p-6 lg:-ml-32 mr-12 md:mt-2  z-50"
                  style={{
                    top: moreButtonRef.current ? moreButtonRef.current.getBoundingClientRect().bottom + 10 + 'px' : '0',
                    left: moreButtonRef.current ? moreButtonRef.current.getBoundingClientRect().left - 100 + 'px' : '0',
                  }}
                >
                  <div className="flex flex-row gap-4">
                    {More.map((category) => (
                      <div key={category.label} className="mb-0">
                        <h4 className="font-semibold text-gray-900 px-4">{category.label}</h4>
                        <ul className="mt-6">
                          {category.subtext.map((subItem, index) => (
                            <li
                              key={index}
                              className="text-gray-700 text-sm py-3 px-4 hover:text-black cursor-pointer"
                            >
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div>
          <img
            src="src/assets/icons/hamburger.svg"
            width={25}
            height={25}
            className="hidden max-lg:block cursor-pointer mr-4"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-1 left-0 w-full bg-white shadow-md p-4 rounded-lg z-50">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <img
              src="src/assets/images/image 4.png"
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
          <ul className="mt-4 flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.label} className="border-b border-gray-200">
                <a
                  href={item.href}
                  className="block text-center py-2 font-montserrat text-lg text-gray-900 flex items-center justify-center gap-1"
                  onClick={(e) => {
                    if (item.label === "More") {
                      e.preventDefault();
                      setIsMobileMoreOpen(true);
                      setIsMenuOpen(false); // Close the main menu
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                  {item.label === "More" && (
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
        <div className="fixed top-0 left-0 w-full h-auto bg-white z-50 overflow-y-auto p-4 rounded-lg">
          {/* Header with logo and back button */}
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            {/* Logo */}
            <img
              src="src/assets/images/image 4.png"
              alt="logo"
              width={130}
              height={29}
            />
              </div>
            {/* Back Button */}
            <div className="mb-6">
            <button 
             onClick={() => setIsMobileMoreOpen(false)} 
             className="w-auto flex items-center text-gray-800 font-medium border border-gray-300 rounded-lg px-6 py-3"
            >
           <FaArrowRight className="transform rotate-180 mr-2" /> Back
             </button>
</div>
        
          
          {/* Categories layout */}
          <div className="flex flex-col gap-8">
             
            {More.map((category) => (
              <div key={category.label} className="">
                {/* Category title */}
                <h3 className="text-xl font-bold mb-4">{category.label}</h3>
                
                {/* Items in two columns */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {category.subtext.map((subItem, index) => (
                    <div key={index} className="py-2">
                      <span className="text-gray-800">{subItem}</span>
                    </div>
                  ))}
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