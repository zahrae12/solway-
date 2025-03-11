import React from 'react';
import ControlDsnCard from '../../Components/ControlDsnCard';
import { dsns } from '../../constants';

const ControlDsn = () => {
  return (
    <section className="lg:py-0 lg:px-4 px-0 ">
      {/* Title Section */}
      <div className="text-center ">
  {/* Large Screens (Default) */}
  <h1 className="hidden sm:block text-[30px] font-extrabold font-inter -mt-8">
    Contrôlez votre DSN qu'en <span className="block -mt-2 text-[30px]">trois étapes :</span>
  </h1>

  {/* Small Screens (Mobile) */}
  <h1 className="sm:hidden text-[26px] font-extrabold font-inter mt-0 ">
    Contrôlez votre DSN <br /> qu'en trois étapes :
  </h1>
</div>

      {/* Buttons Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
  <button className="border border-gray-300 text-black lg:py-2 lg:px-6 px-8 py-3 rounded-lg font-semibold w-full md:w-auto flex items-center justify-center gap-2">
    <img src="src/assets/icons/layer.png" alt="Paramétrage" className="w-5 h-5" />
    Paramétrage des blocs DSN
  </button>
  <button className="border bg-yellow-500 text-white lg:py-2 lg:px-6 px-8 py-3 rounded-lg font-semibold w-full md:w-auto flex items-center justify-center gap-2">
    <img src="src/assets/icons/data.png" alt="Sélection" className="w-5 h-5" />
    Sélection des données
  </button>
  <button className="border border-gray-300 text-black lg:py-2 lg:px-6 px-8 py-3 rounded-lg font-semibold w-full md:w-auto flex items-center justify-center gap-2">
    <img src="src/assets/icons/shield.png" alt="Exécution" className="w-5 h-5" />
    Exécution du contrôle
  </button>
</div>


      {/* Content Section */}
      <div className="flex flex-col md:flex-row bg-white p-6 rounded-2xl shadow-lg gap-6 md:gap-10 mt-10 py-6 items-center">
        {/* Left Section (Text) */}
        <div className="flex flex-col w-full lg:w-1/2 flex-1">
          {dsns.map((dsn) => (
            <ControlDsnCard key={dsn.label} {...dsn} />
          ))}
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="max-w-full h-auto object-contain rounded-2xl"
            src="src/assets/images/verifidsn.png"
            alt="VERIF'DSN"
          />
        </div>
      </div>
    </section>
  );
};

export default ControlDsn;
