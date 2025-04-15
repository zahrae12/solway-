import React from 'react';

const SoldeskHero = () => {
  return (
    <section className="xl:py-6 xl:pt-24 lg:pt-24 flex justify-center items-center lg:px-10 pt-24">
      <div className="relative bg-white lg:shadow-lg rounded-lg flex flex-col lg:flex-row justify-between items-center p-6 lg:p-8 gap-6 lg:gap-8 h-auto w-full ">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-xl text-center">
          <h1 className="text-[46px] font-extrabold font-inter uppercase text-gray-900">SOLDESK</h1>
          <p className="text-gray-950 font-inter mt-2">
            SOLDESK est une plateforme de gestion de tickets qui offre une gamme complète 
            de fonctionnalités pour optimiser le processus de traitement des tickets et améliorer 
            la collaboration au sein de votre équipe.
          </p>
        </div>

        {/* Right Side - Logo */}
        <div className="flex-none">
          <div className=" rounded-lg w-full flex justify-center">
            <img src="assets/images/sold.png" alt="Soldesk Logo" className="w-auto h-auto lg:w-[280px] lg:h-[242px]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SoldeskHero;
