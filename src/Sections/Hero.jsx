import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-10   ">
      {/* left side */}
      <div className="flex flex-col justify-end items-start lg:mt-0 mt-6 lg:w-1/2 w-full pb-10 text-base/8">
        <h1 className="text-2xl font-extrabold leading-[32px] -mt-4">
          Welcome to SOLWAY Consulting & Services<br />
          <span className="text-yellow-500">Cross our way, Find your solution.</span>
        </h1>
        <p className="text-xl font-medium leading-[28px] mt-4 text-gray-600 tracking-wide ">
          Libérez le potentiel de votre entreprise avec des solutions sur <br /> mesure et des conseils d'experts.
          Ensemble, relevons vos défis<br /> et propulsons votre succès.
        </p>
        <div className="mt-10 flex gap-6 ">
          <button className="bg-yellow-500 text-white py-2 px-8 rounded-lg shadow-lg font-semibold">
            Qui sommes-nous ?
          </button>
          <button className="border border-gray-300 py-2 px-8 rounded-lg font-semibold">
            Nos offres d'emploi
          </button>
        </div>

      </div>

      {/* right side */}
      <div className="lg:w-1/2 w-full relative overflow-hidden h-[720px]">
        <img
          src="src/assets/images/skyscraper.jpeg"
          alt="Buildings"
          className="w-full h-full object-cover transform -skew-x-6 origin-bottom-left"
        />
      </div>
    </section>
  );
};

export default Hero;