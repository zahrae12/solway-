import { section } from "framer-motion/client";
import React from "react";

const SolidaritySection = () => {
  return (
   < section className="pt-12 xl:px-12 lg:px-4 ">
   

    <div className="lg:bg-white relative w-full  md:p-8 lg:rounded-lg flex flex-col md:flex-row items-center lg:shadow-lg overflow-hidden">
    
     
      <div className="md:w-2/3  ">
      <h2 className="lg:text-[40px] text-[32px] font-extrabold font-inter uppercase text-gray-900 text-center lg:text-left max-w-xl leading-tight">
  ASSOCIATION SOLWAY POUR LA SOLIDARITÉ
</h2>

        <p className="text-gray-700 font-inter mt-2 text-center lg:text-left  ">
        Conscients de leur responsabilité envers les actions caritatives, les salariés de SOLWAY ont créé l'Association SOLWAY Pour la Solidarité.
        <br className="hidden lg:block" />  <br className="hidden lg:block" />
        Nous priorisons l'accès à une éducation de qualité pour les enfants défavorisés et soutenons financièrement les plus démunis pour assurer leur dignité. Ensemble, nous incarnons la solidarité et l'engagement pour un Maroc plus solidaire.
        </p>
      </div>
      <div className="md:w-1/3 flex  justify-end ">
        <img
          src="src/assets/images/solidarity.png"
          alt="Association Solway Logo"
          className="w-65 md:w-65 lg:w-58 border border-green-400 rounded-lg mt-6 lg:mt-0"
        />
      </div>
    </div>
    </section>
  );
};

export default SolidaritySection;