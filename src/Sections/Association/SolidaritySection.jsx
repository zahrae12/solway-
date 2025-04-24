import { section } from "framer-motion/client";
import React from "react";
import { useTranslation } from 'react-i18next';

const SolidaritySection = () => {
  const {t} = useTranslation();
  return (
    <section className="  md:pt-20 flex justify-center items-center lg:px-7 xl:px-12 md:px-4  pt-12">
      <div className="relative bg-white md:shadow-lg rounded-lg flex flex-col md:flex-row justify-between items-center p-6 md:p-8 gap-6 md:gap-8 h-auto w-full ">
      
      <div className="flex-1 max-w-xl md:text-left text-center">
      <h1 className="lg:text-[46px] md:text-[30px] text-[36px]  font-extrabold font-inter uppercase text-gray-900 leading-tight">
  {t("ASSOCIATION SOLWAY POUR LA SOLIDARITÉ")}
</h1>

<p className="text-gray-950 font-inter mt-2">
        {t("Conscients de leur responsabilité envers les actions caritatives, les salariés de SOLWAY ont créé l'Association SOLWAY Pour la Solidarité.")}
        <br className="hidden lg:block" />  <br className="hidden md:block" />
        {t("Nous priorisons l'accès à une éducation de qualité pour les enfants défavorisés et soutenons financièrement les plus démunis pour assurer leur dignité. Ensemble, nous incarnons la solidarité et l'engagement pour un Maroc plus solidaire.")}
        </p>
      </div>
      <div className="flex-none">
          <div className=" rounded-lg w-full flex justify-center">
            <img src="assets/images/solidarity.png" alt="Soldesk Logo" className="w-auto h-auto md:w-[280px] md:h-[242px]" />
          </div>
        </div>
    </div>
    </section>
  );
};

export default SolidaritySection;