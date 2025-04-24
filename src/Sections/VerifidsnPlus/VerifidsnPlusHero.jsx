import React from 'react'
import { useTranslation } from 'react-i18next';
const VerifidsnPlusHero = () => {
  const {t} =useTranslation();
  return (
    <section className="w-full h-auto flex flex-col md:flex-row items-center md:items-start md:gap-10 xl:gap-16 pt-24 md:pt-32 xl:pt-36 px-4 md:px-6 xl:px-16 md:py-8">
    {/* Left side */}
    <div className="flex flex-col w-full md:w-1/2 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4">
        Verif'dsn PLUS
      </h1>
      <p className="text-lg font-normal text-gray-950">
     {t("VERIF’DSN PLUS est un outils complémentaire de VERIF’DSN qui permet de contrôler vos blocs DSN sur plusieurs périodes de paie. Grâce à cet outil vous pourrez avoir une vue trimestrielle, semestrielle ou annuelle de vos déclarations de cotisation. Vous pouvez ainsi comparer vos déclarations annuelles par rapport à vos résultats de paie comme à l’époque de la N4DS.")}
      </p>
    </div>


      {/* Right side */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-4 xl:-mt-4">
      <img
        src="assets/images/verify.png"
        alt="Buildings"
        className="w-full max-w-[486px] h-auto object-contain"
      />
    </div>
    </section>
  )
}

export default VerifidsnPlusHero