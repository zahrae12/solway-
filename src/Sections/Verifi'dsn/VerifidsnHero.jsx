import React from 'react';

const VerifidsnHero = () => {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row items-center lg:gap-18 xl:pt-32 pt-24 lg:selectionlg lg:py-20 xl:py-0 gap-12">
    {/* Left side */}
    <div className="flex flex-col xl:px-16 lg:px-12 px-8  w-full lg:w-1/2 justify-center text-center xl:-mt-12 lg:mt-40">
      <h1 className="lg:text-4xl text-3xl  font-extrabold text-gray-950 mt-6 lg:-mt-12 leading-tight">
        Verif'dsn
      </h1>
      <p className="text-lg font-normal text-wrap text-gray-950 mt-6 lg:mt-2">
        Optimisez la gestion de vos DSN comme jamais auparavant ! Détectez les erreurs en un instant, facilitez le travail de vos gestionnaires de paie avec des contrôles rapides et efficaces, et libérez un temps précieux pour vous consacrer à des tâches stratégiques. Avec Verif'DSN, dites adieu aux complications et bonjour à la simplicité et à la performance !
      </p>
    </div>


      {/* Right side */}
      <div className="w-full lg:w-1/2 flex justify-center xl:justify-end xl:p-8 lg:pt-28 lg:pr-14 xl:pr-20  ">
        <img
          src="src/assets/images/verif.png"
          alt="Buildings"
          className="lg:w-[486px] lg:h-[269px] w-auto h-auto object-cover md:object-contain lg:-mt-8 "
        />
      </div>
    </section>
  );
};

export default VerifidsnHero;
