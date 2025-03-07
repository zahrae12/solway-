import React from 'react'
import { FiLinkedin,  FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
const VerifyFooter = () => {
  return (
    <section>
    
        <div className="bg-yellow-500 py-12  lg:px-20 px-8 w-full">
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Left Section - Text */}
            <div className="md:w-1/2 text-white w-full">
              <h2 className="font-extrabold text-2xl font-inter leading-9 lg:text-left text-center ">
                Excited to work together on <span className="hidden lg:inline-block"><br /></span>your next project?
              </h2>
              <p className="text-white font-medium font-inter text-sm  mt-2 lg:text-left text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor mattis
                sit phasellus mollis sit aliquam sit nullam neque.
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium mt-4 w-full">
                Voir Plus
              </button>
            </div>
    
            {/* Right Section - Video */}
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <img
                className="w-[548px]  h-[280px]  rounded-lg shadow-lg"
                src="src/assets/images/image 5.png"
                title="YouTube video"
               
              />
            </div>
          </div>
        </div>

        <footer className=" text-gray-700 px-16 py-4 pt-8">
              <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm">
        
              
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full text-center sm:text-left  lg:text-base">
                  <p className="font-medium whitespace-nowrap">
                   copyright © 2025 <span className="font-semibold">Solway</span> | All Rights Reserved
                  </p>
        
                  {/* Links */}
                  <div className="flex flex-wrap justify-center sm:justify-start lg:space-between lg:space-x-1 space-x-2">
                    <a href="#" className="text-yellow-600 underline">Terms of Service</a>
                    <span className="hidden sm:inline text-gray-500">| </span>
                    <a href="#" className="text-yellow-600 underline">Privacy Policy</a>
                    <span className="hidden sm:inline text-gray-500">| </span>
                    <a href="#" className="text-yellow-600 underline">Cookies Policy</a>
                    <span className="hidden sm:inline text-gray-500">|</span>
                    <a href="#" className="text-yellow-600 underline">Contact</a>
                    <span className="hidden sm:inline text-gray-500">|</span>
                    <a href="#" className="text-yellow-600 underline"> Support</a>
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
                  <button className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition mt-4 lg:mt-0">
                    English
                  </button>
                </div>
        
              </div>
            </footer>
            </section>
      );
    };
    
    

export default VerifyFooter