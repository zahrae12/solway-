import React from 'react'

const SolHrHero = () => {
  return (
    <section className="  md:pt-20 flex justify-center items-center lg:px-9 xl:px-12 md:px-4  pt-12">
      <div className="relative bg-white md:shadow-lg rounded-lg flex flex-col md:flex-row justify-between items-center p-6 md:p-8 gap-6 md:gap-8 h-auto w-full ">
        
      {/* Left Side - Text Content */}
      <div className="flex-1 max-w-xl text-center">
        <h1 className="text-[46px] font-extrabold font-inter uppercase text-gray-900">SOLWAY HR</h1>
        <p className="text-gray-950 font-inter mt-2 pb-8 text-[16px]">
        SOLWAY HR est une solution intuitive et complète conçue pour optimiser les différents processus des ressources humaines. Notre plateforme offre une gamme étendue de fonctionnalités, couvrant tous les aspects nécessaires et suffisants pour une gestion efficace des ressources humaines
        </p>
      </div>

      {/* Right Side - Logo */}
      <div className="flex-none">
        <div className=" rounded-lg w-full flex justify-center">
          <img src="assets/images/solHrPic.png" alt="Soldesk Logo" className="w-auto h-auto lg:w-[280px] lg:h-[240px]" />
        </div>
      </div>

    </div>
  </section>
  )
}

export default SolHrHero