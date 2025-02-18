import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-10  lg:ml-10  ">
      {/* left side */}
      <div className="flex flex-col justify-center items-start lg:mt-0 mt-6 lg:w-1/2 w-full pb-10 text-base/8 sm:mt-16">
        <h1 className="text-2xl font-extrabold leading-[32px] -mt-6 lg:mt-0 md:mt-6 sm:mt-16 sm:py-18 ml-8 mt-24">
          Welcome to SOLWAY Consulting & Services<br />
          <span className="text-yellow-500">Cross our way, Find your solution.</span>
        </h1>
        <p className="text-xl font-medium leading-[28px] mt-4 text-gray-600 tracking-wide lg:mt-4 md:mt-8 sm:mt-12 sm:py-4 ml-8">
          Libérez le potentiel de votre entreprise avec des solutions sur <br /> mesure et des conseils d'experts.
          Ensemble, relevons vos défis<br /> et propulsons votre succès.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8  w-full p-4">
          <button className="bg-yellow-500 text-white py-2 px-8 rounded-lg shadow-lg font-semibold">
            Qui sommes-nous ?
          </button>
          <button className="border border-gray-300 py-2 px-8 rounded-lg font-semibold">
            Nos offres d'emploi
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="lg:w-1/2 w-full relative overflow-hidden h-[400px] sm:h-[600px] md:h-[720px] lg:h-[720px]">
        <img
          src="src/assets/images/skyscraper.jpeg"
          alt="Buildings"
          className="w-full h-full object-cover transform lg:-skew-x-6 origin-bottom-left transition-all duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default Hero;
