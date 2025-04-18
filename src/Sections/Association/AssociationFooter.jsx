import React from 'react'
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

export const AssociationFooter = () => {
  return (
   <footer className="text-gray-700 md:px-10 px-4 py-4 pt-8">
   <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center gap-y-6 md:gap-y-0 text-sm">
 
     {/* Left Section */}
     <div className="flex flex-wrap items-center justify-center md:justify-start w-full md:w-auto gap-x-2 gap-y-1 text-center md:text-left">
       {/* Copyright */}
       <p className="font-medium whitespace-nowrap">
         © 2025 <span className="font-semibold">Solway</span> | All Rights Reserved
       </p>
 
       {/* Links */}
       <a href="#" className="text-green-500 underline">Terms of Service</a>
       <span className="hidden sm:inline text-gray-500">|</span>
       <a href="#" className="text-green-500 underline">Privacy Policy</a>
       <span className="hidden sm:inline text-gray-500">|</span>
       <a href="#" className="text-green-500 underline">Cookies Policy</a>
       <span className="hidden sm:inline text-gray-500">|</span>
       <a href="#" className="text-green-500 underline">Contact</a>
       <span className="hidden sm:inline text-gray-500">|</span>
       <a href="#" className="text-green-500 underline">Support</a>
     </div>
 
     {/* Right Section */}
     <div className="flex flex-col md:flex-row items-center gap-4 md:-mt-2">
       {/* Social Media Icons */}
       <div className="flex items-center justify-center space-x-3">
         <a href="#" className="bg-sky-600 text-white text-lg p-2 rounded-md hover:opacity-80 transition"><FiLinkedin /></a>
         <a href="#" className="bg-black text-white text-lg p-2 rounded-md hover:opacity-80 transition"><RiTwitterXFill /></a>
         <a href="#" className="bg-blue-700 text-white text-lg p-2 rounded-md hover:opacity-80 transition"><FiFacebook /></a>
       </div>
 
       {/* Language Button */}
       <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">
         English
       </button>
     </div>
 
   </div>
 </footer>
  );
};
