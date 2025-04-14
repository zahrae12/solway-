import React from 'react'

const FunctionnalityInvoice = () => {
  return (
    <section className=" xl:-mt-24 mt-2 lg:-mt-12 ">
    {/* Title Section */}
    <h1 className="text-[36px]  font-extrabold font-inter text-center text-gray-850 lg:m-10 lg:mt-14 m-4 -mt-6">
    Fonctionnalités de SOLWAY Invoice
    </h1>
  
    {/* Main Content */}
    <main className="w-auto xl:p-4 lg:pt-20 pt-40 bg-white shadow-lg px-4 rounded-xl max-w-8xl mx-auto h-auto">
      {/* Section 1: Écran d'accueil */}
      <section className="grid md:grid-cols-2 gap-8 items-center text-center lg:text-left">
        <div className=''>
          <h2 className="text-[30px] font-bold xl:-mt-16 lg:-mt-12 -mt-32 text-center lg:text-left max-w-lg">Génération Facile du Compte Rendu d'Activité pour Chaque Utilisateur</h2>
          <p className="text-gray-950 mt-4 font-medium font-inter text-left ">
          Créez facilement des comptes rendus d'activité pour chaque utilisateur, offrant une vue d'ensemble claire et détaillée des transactions et des performances financières.
          </p>
         
        </div>
        <img src="/src/assets/images/userManagement.png" alt="Écran d'accueil" className="w-full rounded-lg  pt-8 lg:-mt-14 xl:mt-0 " />
      </section>
  
      {/* Section 2: Highly Effective Solutions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-12 pt-10">
        <div className="lg:order-1 order-none mt-14">
          <h2 className="xl:text-2xl text-[28px] font-bold text-center lg:text-left md:-mt-14 xl:max-w-xs">Génération Automatique des Factures</h2>
          <p className="text-gray-950 mt-4 font-medium font-inter text-left ">
          Générez automatiquement des factures professionnelles et personnalisées. Configurez des modèles de factures et des paramètres pour automatiser la création et l'envoi des factures.
          </p>
         
         
        </div>
        <img src="/src/assets/images/factures.png" alt="Options de Synchronisation" className="w-full rounded-lg  lg:-mt-8" />
      </section>
  
      
  
      {/* Section 3: Résultats */}
      <section className="grid md:grid-cols-2  lg:pt-6 pt-16 items-center pb-8">
        <div>
          <h2 className="xl:text-2xl text-[28px] font-bold text-center lg:text-left  lg:mt-12 xl:mt-0 xl:max-w-xs">Suivi Facile du Paiement des Factures</h2>
          <p className="text-gray-600 font-medium mt-2 max-w-xl  text-left ">
          Suivez facilement le paiement des factures avec des outils de suivi en temps réel. Recevez des notifications et des rappels automatiques pour les factures en attente et les paiements à venir.
          </p>
        </div>
        <img src="/src/assets/images/factures.png" alt="Résultats" className="w-full rounded-lg  lg:pr-20  mt-8" />
      </section>

     
      
    </main>
  </section>
  )
}

export default FunctionnalityInvoice