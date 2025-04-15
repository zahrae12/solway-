import React from 'react'

const InvoiceHero = () => {
  return (
    <section className="xl:py-6 xl:pt-24 lg:pt-28 flex justify-center items-center lg:px-9   pt-24 ">
    <div className="relative bg-white lg:shadow-lg rounded-lg flex flex-col lg:flex-row justify-between items-center max-w-8xl w-full p-4 lg:p-8 gap-6 lg:gap-8 h-auto">
      
      {/* Left Side - Text Content */}
      <div className="flex-1 max-w-xl text-center">
        <h1 className="lg:text-[46px] text-[38px] font-extrabold font-inter uppercase text-gray-900">solWAY INVOICE</h1>
        <p className="text-gray-950 text-[18px] font-inter mt-2 pb-8">
        SOLWAY INVOICE est un outil de gestion de la facturation conçu pour simplifier et optimiser le processus de facturation. Il offre une gamme de fonctionnalités pour assurer une gestion fluide et efficace des transactions financières.
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