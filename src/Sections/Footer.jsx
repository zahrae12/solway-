import React from 'react'
import { FiLinkedin,  FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
    <section className="relative  flex justify-center items-center -mt-16">
    <div className="bg-yellow-500 lg:w-[1300px] lg:h-[350px] text-center p-10 rounded-lg shadow-lg">
    <h1 className='text-white text-3xl font-extrabold leading-normal'>SOLWAY Recrute</h1>
    <h1 className='text-white text-3xl font-extrabold leading-normal'>Vous etes Consultant SAP HR </h1>
    <p className="text-white mt-4 text-sm sm:text-base">
      Rejoignez-nous pour découvrir nos opportunités uniques et évoluez <br/> avec nous, 
      du stage au CDI débutant, jusqu’au CDI expérimenté. Votre<br/> avenir commence ici !
    </p>

    {/* Button */}
    <button className="mt-6 bg-white border border-yellow-500 text-yellow-600 font-semibold py-3 px-10 rounded-md shadow-md hover:bg-gray-100 transition">
      Rejoignez-nous
    </button>
  </div>
  
  </section>
  <footer className="text-gray-700 mt-12">
  <div className="container  px-24 flex flex-col sm:flex-row justify-between items-center">
    
    {/* Left Side: Copyright + Links */}
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
      <p className="text-xl font-inter sm:text-sm whitespace-nowrap">
        Copyright © 2025 <span className="font-inter">Solway</span> | All Rights Reserved
      </p>

      <div className="flex flex-wrap justify-center space-x-3  font-inter ">
        <a href="#" className="text-yellow-600 underline">Terms of Service</a>
        <span className="text-black">|</span>
        <a href="#" className="text-yellow-600 underline">Privacy Policy</a>
        <span className="text-black">|</span>
        <a href="#" className="text-yellow-600 underline">Cookies Policy</a>
        <span className="text-black">|</span>
        <a href="#" className="text-yellow-600 underline">Contact</a>
        <span className="text-black">|</span>
        <a href="#" className="text-yellow-600 underline">Support</a>
      </div>
    </div>

    {/* Right Side: Social Icons + Language Button */}
    <div className="flex items-center space-x-4 mt-3 sm:mt-0">
      <a href="#" className="text-white bg-sky-600 text-xl p-2 rounded-md hover:opacity-80"><FiLinkedin /></a>
      <a href="#" className="text-white bg-black text-xl p-2 rounded-md hover:opacity-80"><RiTwitterXFill /></a>
      <a href="#" className="text-white bg-blue-700 text-xl p-2 rounded-md hover:opacity-80"><FiFacebook /></a>
 </div>
      <button className="border border-yellow-600 text-yellow-600 text-sm px-6 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition lg:-ml-12 mt-6 lg:mt-0">
        English
      </button>
    </div>
 
</footer>


</div>
  
  )
}

export default Footer