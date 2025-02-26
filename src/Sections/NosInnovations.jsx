import React from "react";
import { innovations } from "../constants";
import InnovationCard from "../Components/InnovationCard";

const NosInnovations = () => {
  return (
    <section className="py-6 -mt-24 px-4 md:px-10 lg:px-0">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold">Nos Innovations</h1>
        <p className="text-lg font-medium leading-6 text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
          <br className="hidden md:block" />
          sit phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="mt-10  flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
  <button className="border  bg-yellow-500 text-white py-2 px-6 md:px-10 rounded-lg font-semibold w-full md:w-auto flex-grow text-center">
    VERIFI'DSN
  </button>
  <button className="border  border-gray-300 text-black py-2 px-6 md:px-10 rounded-lg font-semibold w-full md:w-auto flex-grow text-center">
    VERIFI'DSN PLUS
  </button>
  <button className="border border-gray-300 text-black py-2 px-6 md:px-10 rounded-lg font-semibold w-full md:w-auto flex-grow text-center">
    SOLWAY Synchronisation HR
  </button>
</div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row bg-white p-6 rounded-2xl shadow-lg gap-6 md:gap-10 mt-10 py-6">
      
        <div className="w-auto  md:w-1/2 flex flex-col  ">
          {innovations.map((innovation) => (
            <InnovationCard key={innovation.label} {...innovation} />
          ))}
        </div>

        {/* Right Section (Image/Video) */}
        <div className="w-full md:w-1/2 flex justify-end ">
          <img
           className="w-80 md:w-96 lg:w-[450px] h-56 md:h-64 lg:h-[300px] object-cover rounded-2xl"
            src="src/assets/images/image 5.png"
            alt="VERIF'DSN"
          />
        </div>
      </div>
    </section>
  );
};

export default NosInnovations;
