import React from 'react'
import { FiLinkedin,  FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
    <section className=" flex justify-center items-center -mt-16  ">
    <div className="bg-yellow-500 lg:w-full lg:h-auto text-center px-4 py-8 rounded-lg shadow-lg ">
    <h1 className='text-white text-3xl lg:font-extrabold  font-bold leading-normal  '>SOLWAY Recrute</h1>
    <h1 className='text-white  lg:text-3xl lg:font-extrabold font-bold leading-normal m-0 p-0'>Vous etes Consultant SAP HR ? </h1>
    
    <p className="text-white mt-4 text-sm sm:text-base">
  Rejoignez-nous pour découvrir nos opportunités uniques et évoluez 
  <span className="hidden lg:block"></span> avec nous, du stage au CDI débutant, 
  jusqu’au CDI expérimenté. Votre
  <span className="hidden lg:block"></span> avenir commence ici !
</p>


    {/* Button */}
    <button className="mt-6 bg-white border border-yellow-300  text-yellow-600 font-semibold py-3 px-20 w-full sm:w-auto  lg:py-3 lg:px-10 rounded-md shadow-md hover:bg-gray-100 transition">
      Rejoignez-nous
    </button>
  </div>
  
  </section>
  <footer className=" text-gray-700 px-6 py-4 pt-8">
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


</div>
  
  )
}

export default Footer