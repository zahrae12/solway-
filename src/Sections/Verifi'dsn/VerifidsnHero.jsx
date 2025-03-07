import React from 'react';

const VerifidsnHero = () => {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row items-center gap-8 lg:pt-32 pt-24 ">
      {/* Left side */}
      <div className="flex flex-col px-6 md:px-12 w-full md:w-1/2 justify-center text-center lg:*:-mt-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-6 lg:-mt-12 leading-tight">
          Verif'dsn
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-950 mt-6 md:mt-8">
          Optimisez la gestion de vos DSN comme jamais auparavant ! Détectez les erreurs en un instant, facilitez le travail de vos gestionnaires de paie avec des contrôles rapides et efficaces, et libérez un temps précieux pour vous consacrer à des tâches stratégiques. Avec Verif'DSN, dites adieu aux complications et bonjour à la simplicité et à la performance !
        </p>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 mt-0 md:mt-30 p-8">
        <img
          src="src/assets/images/image 5.png"
          alt="Buildings"
          className="w-full h-auto object-cover md:object-contain lg:-mt-8"
        />
      </div>
    </section>
  );
};

export default VerifidsnHero;
