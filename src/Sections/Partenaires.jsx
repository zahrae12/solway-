import React from 'react'
import LogosCard from "../assets/images/LogosCard.png";

const Partenaires = () => {
  return (
    <section className="-mt-32 pt-6 lg:pt-0">
      <div className="w-auto flex flex-col xl:flex-row items-center gap-6 xl:gap-20 xl:-mr-8 xl:-ml-8 ">
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold leading-[40px] px-12 text-black 
                       text-center md:text-center lg:text-left sm:whitespace-normal md:whitespace-nowrap">
          Ils nous font <br className="block lg:hidden" /> confiance
        </h2>

        {/* Logos Container */}
        <div className="rounded-lg p-6 flex justify-center xl:justify-end pt-2 xl:ml-auto">
          <img
            src={LogosCard}
            alt="Partenaires"
            className="lg:w-auto h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Partenaires;
