import { h1 } from 'framer-motion/client'
import React from 'react'

const SoldeskAcceuil = () => {
  return (

    <section className=" xl:-mt-16 mt-2 md:px-4 lg:px-2 px-4 ">
    {/* Title Section */}
    <h1 className="text-[36px]  font-extrabold font-inter text-center text-gray-850 mb-10">
    Fonctionnalités de SOLDESK
    </h1>
  
    {/* Main Content */}
    <main className="w-auto xl:p-4 md:p-6 md:pt-20 pt-40 bg-white shadow-lg px-4 rounded-md max-w-8xl mx-auto h-auto">
      {/* Section 1: Écran d'accueil */}
      <section className="grid md:grid-cols-2 gap-8 items-center  md:text-left">
        <div className=''>
          <h2 className="text-2xl font-bold xl:-mt-36 md:-mt-12 -mt-32 text-center lg:text-left  md:-ml-12 lg:ml-0">SUIVI EN TEMPS RÉEL</h2>
          <p className="text-gray-700 mt-2 font-medium font-inter">
          Suivez l’évolution des tickets en temps réel avec une transparence totale à chaque étape du processus.<br/><br/>

 SOLDESK vous permet de vérifier l’état de vos demandes à tout moment, assurant une communication claire et immédiate. <br/><br/>

Grâce à ce suivi détaillé, les utilisateurs peuvent voir précisément où en est leur demande et recevoir des mises à jour instantanées à chaque changement d’état
          </p>
        </div>
        <img src="assets/images/func1.png" alt="Écran d'accueil" className="w-full rounded-lg  pt-8 lg:-mt-14 xl:mt-0 md:-mt-64 " />
      </section>
  
      {/* Section 2: Highly Effective Solutions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-10">
        <div className="md:order-1 order-none -mt-6">
          <h2 className="xl:text-2xl text-[28px]  font-bold text-center md:text-left">COMMUNICATION EFFICACE</h2>
          <p className="text-gray-700 mt-2 font-medium font-inter ">
          Facilitez les échanges entre les utilisateurs et les responsables de la gestion des tickets grâce à SOLDESK.<br/> <br/>

Notre plateforme permet aux clients de communiquer directement avec l’équipe en charge de leurs tickets en cas de besoin, assurant ainsi une réponse rapide et personnalisée. De plus, les managers et les membres de l’équipe de traitement des tickets peuvent également échanger des messages entre eux et avec l’ensemble de l’équipe.<br/> <br/>

Cette communication bidirectionnelle et transparente garantit que toutes les parties concernées restent informées et peuvent collaborer efficacement pour résoudre les demandes.
          </p>
         
        </div>
        <img src="assets/images/func2.png" alt="Options de Synchronisation" className="w-full rounded-lg  lg:mt-4 xl:mt-0" />
      </section>
  
      
  
      {/* Section 3: Résultats */}
      <section className="grid md:grid-cols-2 xl:pt-8 md:pt-12 items-center">
        <div>
          <h2 className="xl:text-2xl text-[28px] font-bold text-center md:text-left  mt-6">GESTION FLUIDE ET EFFICACE</h2>
          <p className="text-gray-700 mt-2 font-medium font-inter">
          Avec SOLDESK, la gestion des tickets est simplifiée et efficace. En un seul clic, vous pouvez facilement créer un ticket en remplissant les champs nécessaires.<br/><br/>

          Vous avez également la possibilité de joindre des fichiers pertinents directement au ticket.<br/><br/>

           Cette simplicité d’utilisation permet de gagner du temps et d’assurer que toutes les informations nécessaires sont immédiatement disponibles, ce qui facilite une gestion rapide et précise des demandes.
          </p>
        </div>
        <img src="assets/images/func3.png" alt="Résultats" className="w-full rounded-lg  lg:pr-20 -pt-4 -mt-8 pb-12 lg:pb-0 md:-mt-60 lg:-mt-14" />
      </section>
    </main>
  </section>
  
  )
}

export default SoldeskAcceuil