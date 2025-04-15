import React from 'react';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex flex-col md:flex-row items-center lg:gap-24 gap-20   ">


      {/* left side */}
      <div className="flex flex-col lg:px-8 md:mt-[-80px] mt-0 w-full md:w-1/2 p-0">


      <h1 className="text-2xl lg:font-extrabold font-bold text-center lg:text-left leading-[32px] lg:pt-0 pt-32 px-10 lg:px-14 md:text-nowrap lg:-ml-12     ">
        <span className="  lg:text-black">Welcome to <span className='text-yellow-500 lg:text-black'>SOLWAY Consulting & Services</span></span>  <br />
          <span className=" lg:text-yellow-500">Cross our way, Find your solution.</span>
        </h1>
        <p className="text-xl lg:font-medium p-2 lg:p-0  text-center lg:text-left mt-3 text-gray-600 md:text-nowrap lg:ml-2 lg:mt-4   ">
          Libérez le potentiel de votre entreprise avec des solutions sur <br className="hidden sm:block" /> mesure et des conseils d'experts.
          Ensemble, relevons vos défis<br className="hidden sm:block"/> et propulsons votre succès.
        </p>
        <div className="mt-6 md:mt-[-40px] lg:mt-8 flex flex-col sm:flex-row gap-4 lg:gap-6 w-full px-4 lg:px-0">

          <button className="bg-yellow-500 text-white  lg:w-[200px] lg:h-[48px] w-full h-[48px] rounded-lg shadow-lg font-semibold "
           onClick={() => navigate("/about")}>
            Qui sommes-nous ?
          </button>
          <button className="border border-gray-300  lg:w-[200px] lg:h-[48px] w-full h-[48px] rounded-lg font-semibold bg-gray-100">
            Nos offres d'emploi
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="lg:w-1/2 w-full h-[264px] relative overflow-hidden  sm:h-[600px]  lg:h-[720px] -mt-10  ">
      <img
  src="src/assets/images/skyscraper.jpeg"
  alt="Buildings"
  className="w-full h-full object-cover transform lg:-skew-x-6 origin-bottom-left transition-all duration-300 ease-in-out z-[60] relative"
/>

      </div>
    </section>
  );
};

export default Hero;
