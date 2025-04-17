import React from 'react'

export const SynchAcceuil = () => {
  return (
    
    <main className="w-auto p-6 bg-white shadow-lg px-4 rounded-md  ">
    {/* Section 1: Écran d'accueil */}
    <section className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left ">
      <div>
        <h2 className="text-[30px] font-bold">Écran d'accueil</h2>
        <p className="text-gray-950 font-inter mt-2">
  Il est doté d’une interface utilisateur simple et ergonomique.
<br/> <br/>
  Vous avez la possibilité de paramétrer les infotypes à 
  <br className="hidden md:inline" /> synchroniser et les liens RFC.
</p>

      </div>
      <img src="assets/images/acceuil.png" alt="Écran d'accueil" className="w-full rounded-lg shadow-md" />
    </section>

  {/* Section 2: Highly Effective Solutions */} 
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="md:order-1 order-none mt-4 md:mt-0">

    <h2 className="lg:text-[30px] md:text-[24px] text-[28px]  font-bold text-center md:text-left  md:mt-14  mt-8 xl:mt-24">Highly effective solutions</h2>
    <p className="text-gray-950 md:text-[14px] lg:text-[16px] md:mt-2 mt-6 font-medium font-inter">
      Cet écran vous permet de sélectionner les matricules à synchroniser.
    </p>
    <ul className="list-disc pl-5 mt-6 md:mt-2 lg:text-[16px] xl:mt-8 md:text-[14px] text-gray-950 font-medium font-inter">
      <li>Soit en sélectionnant directement les matricules concernées.</li>
      <li>Soit en sélectionnant la population en se basant sur les :</li>
      <ul className="list-disc pl-5 lg:text-[16px] mt-2 md:text-[14px] text-gray-950">
        <li>Statuts d’activités</li>
        <li>Tranches de décomptes</li>
        <li>Sociétés</li>
        <li>Domaines de personnel</li>
        <li>Sous-domaines de personnel</li>
      </ul>
    </ul>

    <p className="text-gray-950 mt-2 lg:text-[16px] font-medium font-inter md:text-[14px]">
      Vous avez aussi la possibilité de choisir le mode test et l’anonymisation des salariés à synchroniser.
    </p>

    <p className="text-gray-950 mt-6 lg:text-[16px] md:mt-2 xl:mt-8 font-medium md:text-[14px] font-inter text-center md:text-left">Les modules concernés sont :</p>
    <ul className="mt-6 md:mt-2 lg:text-[16px] text-gray-950 gap-4 space-y-3 md:text-[14px] ">
      {[
        "Administration du personnel (PA)",
        "Gestion organisationnelle",
        "Tables DSN",
        "Gestion du temps",
        "Paie",
      ].map((item, index) => (
        <li key={index} className="flex items-center gap-2 md:text-[14px] lg:text-[16px]">
          <img
            src="assets/icons/CheckMark.svg"
            alt=""
            className="w-5 h-5"
          />
          <strong>{item}</strong>
        </li>
      ))}
    </ul>
  </div>

  {/* First Image */}
  <img
  src="assets/images/effective.png"
  alt="Options de Synchronisation"
  className="md:w-[96%] w-full mx-auto rounded-lg shadow-md h-auto md:mt-12"
/>
</section>

{/* Second Image Section */}
<section className="grid md:grid-cols-2 mt-16  xl:mt-6 lg:-mt-32 md:-mt-24 ">
<img
  src="assets/images/secEffective.png"
  alt="Options de la synchronisation"
  className="md:w-[94%] w-full mx-auto rounded-lg shadow-md md:-mt-52 lg:-mt-18 xl:pt-26 lg:pt-20 "
/>
</section>


    {/* Section 3: Résultats */}
    <section className="grid md:grid-cols-2   items-center mt-16 ">
  <div>
    <h2 className="text-[30px] font-bold text-center md:text-left">Résultats</h2>
    <p className="text-gray-950 font-inter md:mt-2 mt-4 max-w-xl text-center md:text-left">
    Il est sous forme d’une table ALV qui permet l’affichage des résultats de la synchronisation par matricule et par module.
    </p>
  </div>
  <img 
    src="assets/images/resultat.png" 
    alt="Résultats" 
    className="w-full rounded-lg shadow-md  md:mt-14 xl:-mt-0 mt-12 mb-4 lg:mt-2  " 
  />
</section>

  </main>




  )
}
