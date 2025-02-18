import React from 'react'
import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
    <section className="relative  flex justify-center items-center -mt-16">
    <div className="bg-yellow-500 w-[1200px] text-center p-10 rounded-lg shadow-lg relative">
    <h2 className="text-2xl sm:text-3xl font-bold text-white">
      SOLWAY Recrute <br /> vous êtes Consultant SAP HR ?
    </h2>
    <p className="text-white mt-4 text-sm sm:text-base">
      Rejoignez-nous pour découvrir nos opportunités uniques et évoluez <br/> avec nous, 
      du stage au CDI débutant, jusqu’au CDI expérimenté. Votre avenir commence <br/>ici !
    </p>

    {/* Button */}
    <button className="mt-6 bg-white text-yellow-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition">
      Rejoignez-nous
    </button>
  </div>
  
  </section>
  <footer className="text-center text-gray-700 mt-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center">
          
          {/* Copyright */}
          <p className="text-sm sm:text-base whitespace-nowrap leading-7">
            Copyright © 2024 <span className="font-semibold">Solway</span> | All Rights Reserved
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center space-x-4 text-sm mt-4 sm:mt-0 leading-7">
            <a href="#" className="text-yellow-600 hover:underline">Terms of Service <span className="text-black"> |</span></a>
            <a href="#" className="text-yellow-600 hover:underline">Privacy Policy <span className="text-black"> |</span></a>
            <a href="#" className="text-yellow-600 hover:underline">Cookies Policy <span className="text-black"> |</span></a>
            <a href="#" className="text-yellow-600 hover:underline">Contact <span className="text-black"> |</span></a>
            <a href="#" className="text-yellow-600 hover:underline">Support</a>
          </div>

          <div className="flex flex-row items-center space-x-8 mt-4 sm:ml-10">
          <a href="#" className="text-blue-600 text-xl hover:opacity-80"><FaLinkedin /></a>
          <a href="#" className="text-gray-900 text-xl hover:opacity-80"><FaEnvelope /></a>
          <a href="#" className="text-blue-500 text-xl hover:opacity-80"><FaFacebook /></a>

  
         <button className="border border-yellow-600 text-yellow-600 text-sm px-3 py-1 rounded-md hover:bg-yellow-600 hover:text-white transition">
          English
         </button>
</div>


        </div>
      </footer>

</div>
  
  )
}

export default Footer