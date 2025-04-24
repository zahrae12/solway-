import React from 'react'
import { useTranslation } from 'react-i18next';
const HrHero = () => {
  const {t} =useTranslation();
  return (

    <section className=' py-8 xl:pt-24 md:pt-32 pt-28 ' >
   
    <div className="max-w-xl mx-auto text-center px-8  ">
      <h1 className="lg:text-[46px]  text-[30px] font-extrabold font-inter uppercase text-gray-900">SOLWAY</h1>
      <h2 className="lg:text-[46px] text-[30px] font-extrabold font-inter text-gray-900 lg:-mt-5">{t("Synchronisation HR")}</h2>
      <p className="text-gray-950 font-inter  lg:mt-0 mt-2">
        {t("Un programme SAP intuitif et facile à utiliser, entièrement paramétrable,qui permet de synchroniser rapidement et de manière fiable les matricules entre deux systèmes, optimisant ainsi l'efficacité et la précision des processus.")}
      </p>
    </div>
 
  </section>
);
}

// Dotted pattern component

  
export default HrHero