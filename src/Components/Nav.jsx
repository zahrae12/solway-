import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { navLinks } from "../constants";
import { FaArrowRight } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="pl-8 xl:pl-2 md:pl-10 py-8 absolute z-10 w-full ">
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
        <ul className="flex-1 flex ml-8  sm:space-x-4 md:space-x-6 lg:space-x-10 xl:space-x-20 max-lg:hidden">
         {navLinks.map((item) => (
    <li key={item.label}>
      <a
        href={item.href}
        className="font-medium text-base lg:text-lg text-gray-900"
      >
        {item.label}
       
      </a>
    </li>
  ))}
</ul>


        {/* Mobile Menu Toggle Button */}
        <div>
          <img
            src="src/assets/icons/hamburger.svg"
            width={25}
            height={25}
            className="hidden max-lg:block cursor-pointer  mr-4  "
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
        onClick={() => setIsMenuOpen(false)}
      >
        {item.label}
        {item.label === "More" && <FaArrowRight  className="text-black text-xl mt-1 ml-1" />}
      </a>
    </li>
  ))}
</ul>

        </div>
      )}
    </header>
  );
};

export default Nav;
