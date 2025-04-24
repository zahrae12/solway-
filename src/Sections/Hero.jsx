import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  
  return (
    <section className="w-full flex flex-col md:flex-row items-center md:gap-40">


      {/* left side */}
      <div className="flex flex-col lg:px-8 md:mt-[-80px] mt-0   p-0 md:w-1/2  ">


      <h1 className="text-2xl md:font-extrabold font-bold text-center md:text-left leading-[32px] lg:pt-0 pt-32 px-10 md:px-4 lg:px-12 md:text-nowrap lg:-ml-12     ">
        <span className="  lg:text-black">Welcome to <span className='text-yellow-500 lg:text-black'>SOLWAY Consulting & Services</span></span>  <br />
          <span className=" lg:text-yellow-500">Cross our way, Find your solution.</span>
        </h1>
        <p className="text-xl md:text-[18px] font-medium p-2 lg:p-0 text-center md:text-left mt-3 text-gray-700 md:text-nowrap lg:mt-4 md:px-4">
                 {t("Libérez le potentiel de votre entreprise avec des solutions sur mesure et des conseils d'experts.")}
  <br className="hidden sm:block" />
                {t("Ensemble, relevons vos défis et propulsons votre succès.")}
</p>
        <div className="mt-6  lg:mt-8 flex flex-col sm:flex-row gap-4 lg:gap-6 w-full px-4 lg:px-0 md:px-4">

          <button className="bg-yellow-500 text-white  lg:w-[200px] lg:h-[48px] w-full h-[48px] rounded-lg shadow-lg font-semibold "
           onClick={() => navigate("/about")}>
            {t("Qui sommes-nous ?")}
          </button>
          <button
  className="border border-gray-300 lg:w-[200px] lg:h-[48px] w-full h-[48px] rounded-lg font-semibold bg-gray-100"
  onClick={() => navigate("/offres-emploi")}
>
      {t("Nos offres d'emploi")}
</button>
        </div>
      </div>

      {/* right side */}
      <div className="md:w-1/2 lg:w-3/4 xl:w-3/4 w-full h-[264px] relative overflow-hidden sm:h-[600px] lg:h-[720px] md:-mt-10 mt-10 ">

      <img
  src="assets/images/skyscraper.jpeg"
  alt="Buildings"
  className="w-full h-full object-cover transform md:-skew-x-6 origin-bottom-left transition-all duration-300 ease-in-out md:z-[60] relative"
/>

      </div>
    </section>
  );
};

export default Hero;
