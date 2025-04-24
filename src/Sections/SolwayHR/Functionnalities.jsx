import React from 'react'
import { useTranslation } from 'react-i18next';
const Functionnalities = () => {
  const {t} =useTranslation ();
  return (
     <section className=" xl:-mt-24 mt-2 md:px-6 md:pt-14 lg:px-12 lg:pt-4 px-4">
       {/* Title Section */}
       <h1 className="text-[36px]  font-extrabold font-inter text-center text-gray-850 lg:m-10 lg:mt-14 m-4  md:pb-4 mt-6">
       {t("Fonctionnalités de SOLWAY HR")}
       </h1>
     
       {/* Main Content */}
       <main className="w-auto xl:p-4 lg:pt-20 pt-40 bg-white shmiow-lg px-6  rounded-xl max-w-8xl  mx-auto h-auto ">
         {/* Section 1: Écran d'accueil */}
         <section className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left md:mt-4">
           <div className=''>
             <h2 className="lg:text-[30px] md:text-[28px] text-[36px] font-bold xl:-mt-16 lg:-mt-12 -mt-32 text-center md:text-left">{t("Administration du personnel")}</h2>
             <p className="text-gray-950 mt-4 md:text-[12px] lg:text-[18px] font-medium font-inter text-left text-[18px]">
             {t("Avec SOLWAY HR, gérez efficacement toutes les phases du cycle de vie des employés de votre entreprise grâce à une solution complète qui centralise et simplifie la gestion du personnel. Vous pouvez :")}
             </p>
             <ul className="list-disc pl-5  text-gray-950 text-left">
        <li>{t("Embauche")}</li>
        <li>{t("Réémbauche")}</li>
        <li>{t("Mutation")}</li>
        <li>{t("Domaines de personnel")}</li>
        <li>{t("Sortie")}</li>
      </ul>
           </div>
           <img src="assets/images/admin.png" alt="Écran d'accueil" className="w-full rounded-lg  pt-8 lg:-mt-20 xl:mt-0 md:-mt-72 " />
         </section>
     
         {/* Section 2s */}
         <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-10">
           <div className="md:order-1 order-none ">
             <h2 className=" text-[32px] md:text-[30px] font-bold md:text-left text-center">{t("Gestion des absences")}</h2>
             <p className="text-gray-950 mt-4 md:text-[12px] lg:text-[18px] font-medium font-inter text-left text-[18px] ">
             {t("Avec SOLWAY HR, la gestion des absences devient simple et efficace. Notre plateforme vous permet de :")}
             </p>
             <ul className="list-disc pl-5  text-gray-950">
        <li>{t("Gestion des Compteurs de Congé") }</li>
        <li>{t("Diversité des Types d’Absences")}</li>
        
      </ul>
            
           </div>
           <img src="assets/images/absence.png" alt="Options de Synchronisation" className="w-full rounded-lg  lg:-mt-4 xl:-mt-12" />
         </section>
     
         
     
         {/* Section 3: Gestion du tps */}
         <section className="grid md:grid-cols-2 xl:pt-8 lg:pt-12 pt-14 items-center lg:gap-6 xl:gap-0 md:gap-4">
           <div>
             <h2 className=" text-[32px] md:text-[30px] font-bold text-center md:text-left  mt-6 mb-8">{t("Gestion du temps")}</h2>
             <p className="text-gray-950 md:text-[12px] lg:text-[18px] font-medium mt-2 max-w-xl  text-left pb-6 text-[18px]">
             {t("Avec SOLWAY HR, optimisez la gestion du temps de travail grâce à des outils avancés et intuitifs. Notre plateforme vous permet de :")}
             </p>
             <ul className="list-disc pl-5 -mt-4  text-gray-750 ">
        <li>{t("Suivi des Heures de Travail")}</li>
        <li>{t("Planification et Gestion des Horaires")}</li>
        
      </ul>
           </div>
           <img src="assets/images/temps.png" alt="Résultats" className="w-full rounded-lg   lg:-pt-4 lg:mt-2 mt-14" />
         </section>

          {/* Section 2: Highly Effective Solutions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-10 pb-12 ">
           <div className="md:order-1 order-none xl:mt-14 lg:mt-4 ">
             <h2 className=" text-[32px] md:text-[30px] font-bold text-center md:text-left">{t("Gestion de la paie")}</h2>
             <p className="text-gray-950 md:text-[12px] lg:text-[18px] mt-4 font-medium font-inter text-[18px] ">
             {t("Avec SOLWAY HR, simplifiez et optimisez la gestion de la paie grâce à des outils complets et intuitifs. Notre plateforme vous permet de :")}
             </p>
             <ul className="list-disc pl-5  text-gray-950">
        <li>{t("Gestion des des Primes")}</li>
        <li>{t("Gestion des Cotisations")}</li>
        <li>{t("Intégration des Absences") } </li>
        <li>{t("Génération de Bulletins de Paie")}</li>
        
      </ul>
            
           </div>
           <img src="assets/images/paie.png" alt="Options de Synchronisation" className="w-full rounded-lg  lg:mt-4 xl:-mt-6 mt-4" />
         </section>
         
       </main>
     </section>
  )
}

export default Functionnalities