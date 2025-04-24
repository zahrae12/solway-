import React from 'react'
import { useTranslation } from 'react-i18next';

const InvoiceHero = () => {
  const {t} = useTranslation();
  return (
    <section className="  md:pt-20 flex justify-center items-center lg:px-9 xl:px-12 md:px-4  pt-12">
      <div className="relative bg-white md:shadow-lg rounded-lg flex flex-col md:flex-row justify-between items-center p-6 md:p-8 gap-6 md:gap-8 h-auto w-full ">
      
      {/* Left Side - Text Content */}
      <div className="flex-1 max-w-xl text-center">
        <h1 className="lg:text-[46px] md:text-[32px] text-[38px] font-extrabold font-inter uppercase text-gray-900">solWAY INVOICE</h1>
        <p className="text-gray-950 text-[18px] font-inter mt-2 pb-8">
       {t("SOLWAY INVOICE est un outil de gestion de la facturation conçu pour simplifier et optimiser le processus de facturation. Il offre une gamme de fonctionnalités pour assurer une gestion fluide et efficace des transactions financières.")}
        </p>
      </div>

      {/* Right Side - Logo */}
      <div className="flex-none">
        <div className=" rounded-lg w-full flex justify-center">
          <img src="assets/images/voice.png" alt="Soldesk Logo" className="w-auto h-auto lg:w-[300px] lg:h-[281px]" />
        </div>
      </div>

    </div>
  </section>
  )
}

export default InvoiceHero