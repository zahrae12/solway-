import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between min-h-screen gap-10 max-container  ">
      
      {/* Left Text Content */}
      <div className="xl:w-2/5 lg:w-1/2 flex flex-col justify-start items-start w-full pb-16">
        <h3 className="text-2xl font-bold leading-snug">
          Welcome to SOLWAY Consulting & Services <br/>
          <span className="text-yellow-500 text-2xl font-bold leading-normal">
            Cross our way, Find your solution.
          </span>
        </h3>
        <p className="text-xl font-medium leading-[28px] mt-4 text-gray-600">
          Libérez le potentiel de votre entreprise avec des solutions sur mesure et des conseils d'experts. 
          Ensemble, relevons vos défis et propulsons votre succès.
        </p>
        <div className="mt-10 flex gap-6 ">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg">
            Qui sommes-nous ?
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg">
            Nos offres d'emploi
          </button>
        </div>
      </div>

      {/* Right Image with Angled Effect */}
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