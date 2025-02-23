import React from 'react'
import LogosCard from "../assets/images/LogosCard.png";
const Partenaires = () => {
  return (
    <section className=" flex justify-center items-center py-0 -mt-32">
  <div className="max-w-5xl w-full flex flex-col  px-6  lg:flex-row items-center  lg:items-center gap-6 lg:gap-20 justify-center">
    
    <h2 className="text-3xl font-extrabold leading-[40px]  text-black lg:text-left whitespace-nowrap">
      Ils nous font confiance
    </h2>

    {/* Logos Container (Right for Large Screens) */}
    <div className="rounded-lg p-6 sm:p-8 flex justify-center lg:justify-end w-full">
      <img
        src={LogosCard}
        alt="Partenaires"
        className="w-full sm:w-3/4 md:w-1/2 lg:w-auto max-w-md h-auto object-contain"
      />
    </div>

  </div>
</section>

  
  )
}

export default Partenaires