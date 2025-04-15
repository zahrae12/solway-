import React from 'react'

export const SynchAcceuil = () => {
  return (
    <main className="w-auto p-6 bg-white shadow-lg px-4 rounded-md  ">
    {/* Section 1: Écran d'accueil */}
    <section className="grid md:grid-cols-2 gap-8 items-center text-center lg:text-left ">
      <div>
        <h2 className="text-[30px] font-bold">Écran d'accueil</h2>
        <p className="text-gray-950 font-inter mt-2">
  Il est doté d’une interface utilisateur simple et ergonomique.
<br/> <br/>
  Vous avez la possibilité de paramétrer les infotypes à 
  <br className="hidden lg:inline" /> synchroniser et les liens RFC.
</p>

      </div>
      <img src="assets/images/acceuil.png" alt="Écran d'accueil" className="w-full rounded-lg shadow-md" />
    </section>

  {/* Section 2: Highly Effective Solutions */} 
<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  {/* Text First on Small Screens */}
  <div className="lg:order-1 order-none xl:mt-20">
    <h2 className="lg:text-[30px] text-[28px]  font-bold text-center lg:text-left lg:mt-4 mt-8">Highly effective solutions</h2>
    <p className="text-gray-950 lg:mt-2 mt-6 font-medium font-inter">
      Cet écran vous permet de sélectionner les matricules à synchroniser.
    </p>
    <ul className="list-disc pl-5 mt-6 text-gray-950 font-medium font-inter">
      <li>Soit en sélectionnant directement les matricules concernées.</li>
      <li>Soit en sélectionnant la population en se basant sur les :</li>
      <ul className="list-disc pl-5 mt-2 text-gray-950">
        <li>Statuts d’activités</li>
        <li>Tranches de décomptes</li>
        <li>Sociétés</li>
        <li>Domaines de personnel</li>
        <li>Sous-domaines de personnel</li>
      </ul>
    </ul>

    <p className="text-gray-950 mt-2 font-medium font-inter">
      Vous avez aussi la possibilité de choisir le mode test et l’anonymisation des salariés à synchroniser.
    </p>

    <p className="text-gray-950 mt-6 font-medium font-inter text-center lg:text-left">Les modules concernés sont :</p>
    <ul className="mt-6 text-gray-950 gap-4 space-y-3 ">
      {[
        "Administration du personnel (PA)",
        "Gestion organisationnelle",
        "Tables DSN",
        "Gestion du temps",
        "Paie",
      ].map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <img
            src="assets/icons/vector.svg"
            alt="Check icon"
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
    className="w-full rounded-lg shadow-md h-auto"
  />
</section>

{/* Second Image Section */}
<section className="grid md:grid-cols-2 gap-8  lg:-mt-24 mt-20 sm:mt-0">
  <img
    src="assets/images/secEffective.png"
    alt="Options de la synchronisation"
    className="w-full rounded-lg shadow-md xl:-mt-8 "
  />
</section>


    {/* Section 3: Résultats */}
    <section className="grid md:grid-cols-2  mt-20 items-center">
  <div>
    <h2 className="text-[30px] font-bold text-center lg:text-left">Résultats</h2>
    <p className="text-gray-950 font-inter lg:mt-2 mt-4 max-w-xl text-center lg:text-left">
    Il est sous forme d’une table ALV qui permet l’affichage des résultats de la synchronisation par matricule et par module.
    </p>
  </div>
  <img 
    src="assets/images/resultat.png" 
    alt="Résultats" 
    className="w-full rounded-lg shadow-md lg:pr-20  p-4 pb-8 pt-12 xl:pt-0 lg:pt-12 xl:-mt-6" 
  />
</section>

  </main>
  )
}
