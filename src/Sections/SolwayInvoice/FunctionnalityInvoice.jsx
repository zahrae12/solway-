import React from 'react'
import { useTranslation } from 'react-i18next';
const FunctionnalityInvoice = () => {
  const {t} = useTranslation();
  return (
    <section className=" xl:-mt-24 mt-2 lg:-mt-12 md:pt-16 md:px-10 lg:px-14 px-4 ">
    {/* Title Section */}
    <h1 className="text-[36px]  font-extrabold font-inter text-center text-gray-850 lg:m-10 lg:mt-14 m-4 ">
    {t("Fonctionnalités de SOLWAY Invoice")}
    </h1>
  
    {/* Main Content */}
    <main className="w-auto xl:p-4 lg:pt-20 pt-40 bg-white shadow-lg px-4 rounded-xl max-w-8xl mx-auto h-auto md:mt-6 ">
      {/* Section 1: Écran d'accueil */}
      <section className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left ">
        <div className=''>
          <h2 className="text-[30px] lg:text-[24px] md:text-[22px] font-bold xl:-mt-16 lg:-mt-12 -mt-32 text-center md:text-left max-w-lg">{t("Génération Facile du Compte Rendu d'Activité pour Chaque Utilisateur")}</h2>
          <p className="text-gray-950 md:text-[14px] lg:text-[16px] mt-4 font-medium font-inter text-left  ">
          {t("Créez facilement des comptes rendus d'activité pour chaque utilisateur, offrant une vue d'ensemble claire et détaillée des transactions et des performances financières.")}
          </p>
         
        </div>
        <img src="assets/images/userManagement.png" alt="Écran d'accueil" className="w-full rounded-lg  pt-8 lg:-mt-14 xl:mt-0 md:-mt-64 " />
      </section>
  
      {/* Section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-14 pt-10 md:pt-24 ">
        <div className="md:order-1 order-none ">
          <h2 className="text-[30px] lg:text-[24px] md:text-[22px] font-bold xl:-mt-16 lg:-mt-20 md:-mt-12 text-center md:text-left max-w-lg">{t("Génération Automatique des Factures")}</h2>
          <p className="text-gray-950 md:text-[14px] lg:text-[16px] mt-4 font-medium font-inter text-left ">
          {t("Générez automatiquement des factures professionnelles et personnalisées. Configurez des modèles de factures et des paramètres pour automatiser la création et l'envoi des factures.")}
          </p>
         
         
        </div>
        <img src="assets/images/factures.png" alt="Options de Synchronisation" className="w-full rounded-lg   md:-mt-14 lg:-mt-28" />
      </section>
  
      
  
      {/* Section 3: Résultats */}
      <section className="grid md:grid-cols-2  lg:pt-6 pt-16 items-center pb-8 md:gap-6">
        <div>
          <h2 className="text-[30px] lg:text-[24px] md:text-[22px] font-bold xl:-mt-16 md:-mt-4  text-center md:text-left max-w-lg">{t("Suivi Facile du Paiement des Factures")}</h2>
          <p className="text-gray-950 md:text-[14px] lg:text-[16px] mt-4 font-medium font-inter text-left">
          {t("Suivez facilement le paiement des factures avec des outils de suivi en temps réel. Recevez des notifications et des rappels automatiques pour les factures en attente et les paiements à venir.")}
          </p>
        </div>
        <img src="assets/images/factures.png" alt="Résultats" className="w-full rounded-lg    mt-8 md:-mt-6 lg:mt-6" />
      </section>

     
      
    </main>
  </section>
  )
}

export default FunctionnalityInvoice