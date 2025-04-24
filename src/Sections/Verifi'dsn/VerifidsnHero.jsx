import React from 'react'
import { useTranslation } from 'react-i18next';
const VerifidsnHero = () => {
  const {t} =useTranslation();
  return (
    <section className="w-full h-auto flex flex-col md:flex-row items-center md:items-start md:gap-10 xl:gap-16 pt-24 md:pt-32 xl:pt-36 px-4 md:px-12 xl:px-16 md:py-8">
    {/* Left side */}
    <div className="flex flex-col w-full md:w-1/2 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4">
        Verif'dsn
      </h1>
      <p className="text-lg font-normal text-gray-950">
       {t("Optimisez la gestion de vos DSN comme jamais auparavant ! Détectez les erreurs en un instant, facilitez le travail de vos gestionnaires de paie avec des contrôles rapides et efficaces, et libérez un temps précieux pour vous consacrer à des tâches stratégiques. Avec Verif'DSN, dites adieu aux complications et bonjour à la simplicité et à la performance !")}
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

export default VerifidsnHero