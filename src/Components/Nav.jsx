import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
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
        <ul className="flex-1 flex ml-12 items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-medium leading-normal text-lg text-gray-900"
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
            className="hidden max-lg:block cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 rounded-lg z-50">
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
                  className="block text-center py-2 font-montserrat text-lg text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
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
