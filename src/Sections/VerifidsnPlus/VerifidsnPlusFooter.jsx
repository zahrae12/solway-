import React from 'react'
import { FiLinkedin,  FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
const VerifidsnPlusFooter = () => {
  const {t ,i18n} =useTranslation();
  return (
   
    <footer className="text-gray-700 md:px-10 px-4 py-4 pt-8">
     <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center gap-y-6 md:gap-y-0 text-sm">
   
       {/* Left Section */}
       <div className="flex flex-wrap items-center justify-center md:justify-start w-full md:w-auto gap-x-2 gap-y-1 text-center md:text-left">
         {/* Copyright */}
         <p className="font-medium whitespace-nowrap">
           © 2025 <span className="font-semibold">Solway</span> {t("| Tous droits réservés")}
         </p>
   
         {/* Links */}
         <a href="#" className="text-yellow-600 underline">{t("Conditions d'utilisation")}</a>
         <span className="hidden sm:inline text-gray-500">|</span>
         <a href="#" className="text-yellow-600 underline">{t("Politique de confidentialité")}</a>
         <span className="hidden sm:inline text-gray-500">|</span>
         <a href="#" className="text-yellow-600 underline">{t("Politique relative aux cookies")}</a>
         <span className="hidden sm:inline text-gray-500">|</span>
         <a href="#" className="text-yellow-600 underline">Contact</a>
         <span className="hidden sm:inline text-gray-500">|</span>
         <a href="#" className="text-yellow-600 underline">{t("Assistance")}</a>
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
         <button 
  onClick={() => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr'; 
    i18n.changeLanguage(newLang);
  }}
  className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition"
>
  {i18n.language === 'fr' ? 'English' : 'Français'}
</button>

       </div>
   
     </div>
   </footer>
  )
}

export default VerifidsnPlusFooter