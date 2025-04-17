import React from 'react'
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

export const AssociationFooter = () => {
  return (
    <footer className="text-gray-700 md:px-10 px-4 py-4 pt-8">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm md:-mt-4 xl:mt-0">
      
      {/* Left Side: Copyright + Links */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-full text-center md:text-left lg:text-base">
        <p className="font-medium whitespace-nowrap">
          copyright © 2025 <span className="font-semibold">Solway</span> | All Rights Reserved
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start md:space-between md:space-x-1 space-x-2 mt-2">
          <a href="#" className="text-green-600 underline">Terms of Service</a>
          <span className="hidden sm:inline text-gray-500">| </span>
          <a href="#" className="text-green-600 underline">Privacy Policy</a>
          <span className="hidden sm:inline text-gray-500">| </span>
          <a href="#" className="text-green-600 underline">Cookies Policy</a>
          <span className="hidden sm:inline text-gray-500">|</span>
          <a href="#" className="text-green-600 underline">Contact</a>
          <span className="hidden sm:inline text-gray-500">|</span>
          <a href="#" className="text-green-600 underline">Support</a>
        </div>
      </div>

      {/* Right Side: Social Icons + Language Button */}
      <div className="flex flex-col items-center md:flex-row md:space-x-4 mt-4 md:mt-0 space-y-4 md:space-y-0">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center space-x-3">
          <a href="#" className="bg-sky-600 text-white text-lg p-2 rounded-md hover:opacity-80 transition"><FiLinkedin /></a>
          <a href="#" className="bg-black text-white text-lg p-2 rounded-md hover:opacity-80 transition"><RiTwitterXFill /></a>
          <a href="#" className="bg-blue-700 text-white text-lg p-2 rounded-md hover:opacity-80 transition"><FiFacebook /></a>
        </div>

        {/* Language Button */}
        <button className="border border-green-600 text-green-600 px-2 py-3 rounded-md hover:bg-green-600 hover:text-white transition w-full md:w-auto text-center mt-8 md:mt-0">
          English
        </button>
      </div>
    </div>
  </footer>
  );
};
