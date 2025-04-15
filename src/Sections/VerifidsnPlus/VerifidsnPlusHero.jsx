import React from 'react'

const VerifidsnPlusHero = () => {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row items-center lg:gap-18 xl:gap-4 xl:pt-36 pt-24 lg:selectionlg lg:py-20 xl:py-0 gap-12">
    {/* Left side */}
    <div className="flex flex-col xl:px-16 lg:px-12 px-8  w-full lg:w-1/2 justify-center text-center xl:-mt-12 lg:mt-40">
      <h1 className="lg:text-4xl text-3xl  font-extrabold text-gray-950 mt-6 lg:-mt-12 leading-tight">
        Verif'dsn PLUS
      </h1>
      <p className="text-lg font-normal text-wrap text-gray-950 mt-6 lg:mt-2">
      VERIF’DSN PLUS est un outils complémentaire de VERIF’DSN qui permet de contrôler vos blocs DSN sur plusieurs périodes de paie. Grâce à cet outil vous pourrez avoir une vue trimestrielle, semestrielle ou annuelle de vos déclarations de cotisation. Vous pouvez ainsi comparer vos déclarations annuelles par rapport à vos résultats de paie comme à l’époque de la N4DS.
      </p>
    </div>


      {/* Right side */}
      <div className="w-full lg:w-1/2 flex justify-center xl:justify-end xl:p-8 lg:pt-28 lg:pr-14 xl:pr-20  ">
        <img
          src="assets/images/verif.png"
          alt="Buildings"
          className="lg:w-[486px] lg:h-[269px] w-auto h-auto object-cover md:object-contain lg:-mt-8 "
        />
      </div>
    </section>
  )
}

export default VerifidsnPlusHero