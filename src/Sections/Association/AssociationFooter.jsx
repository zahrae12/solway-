import React from 'react'
import { FiLinkedin,  FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
export const AssociationFooter = () => {
  return (
    <footer className=" text-gray-700 px-20 py-4 pt-8">
                    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm lg:-mt-4 xl:mt-0">
              
                    
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full text-center sm:text-left  lg:text-base ">
                        <p className="font-medium whitespace-nowrap">
                         copyright © 2025 <span className="font-semibold">Solway</span> | All Rights Reserved
                        </p>
              
                        {/* Links */}
                        <div className="flex flex-wrap justify-center sm:justify-start lg:space-between lg:space-x-1 space-x-2">
                          <a href="#" className="text-green-500 underline">Terms of Service</a>
                          <span className="hidden sm:inline text-gray-500">| </span>
                          <a href="#" className="text-green-500 underline">Privacy Policy</a>
                          <span className="hidden sm:inline text-gray-500">| </span>
                          <a href="#" className="text-green-500 underline">Cookies Policy</a>
                          <span className="hidden sm:inline text-gray-500">|</span>
                          <a href="#" className="text-green-500 underline">Contact</a>
                          <span className="hidden sm:inline text-gray-500">|</span>
                          <a href="#" className="text-green-500 underline"> Support</a>
                        </div>
                      </div>
              
                      {/* Right Side: Social Icons + Language Button */}
                      <div className="flex items-center space-x-4 flex-col sm:flex-row lg:ml-2">
                        
                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-3">
                          <a href="#" className="bg-sky-600 text-white text-lg p-2 rounded-md hover:opacity-80 transition"><FiLinkedin /></a>
                          <a href="#" className="bg-black text-white text-lg p-2 rounded-md hover:opacity-80 transition"><RiTwitterXFill /></a>
                          <a href="#" className="bg-blue-700 text-white text-lg p-2 rounded-md hover:opacity-80 transition"><FiFacebook /></a>
                        </div>
              
                        {/* Language Button */}
                        <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition mt-4 lg:mt-0">
                          English
                        </button>
                      </div>
              
                    </div>
                  </footer>
  )
}
