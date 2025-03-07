import React from 'react'
import ControlDsnCard from '../../Components/ControlDsnCard'
import { dsns } from '../../constants'

const ControlDsn = () => {
  return (
    <section className="py-0  px-4 ">
    {/* Title Section */}
   
    <h1 className="text-3xl text-center font-extrabold">
  Contrôler votre DSN qu'en <span className="hidden lg:inline-block"><br /></span>trois étapes :
</h1>

      

    {/* Buttons Section */}
    <div className="mt-10  flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
<button className="border  border-gray-300 text-black py-2 px-6 md:px-10 rounded-lg font-semibold w-full md:w-auto flex-grow text-center">
Paramétrage des blocs dsn
</button>
<button className="border  bg-yellow-500 text-white py-2 px-6 md:px-10 rounded-lg font-semibold w-full md:w-auto flex-grow text-center">
Séléction des données
</button>
<button className="border border-gray-300 text-black py-2 px-6 md:px-10 rounded-lg font-semibold w-full md:w-auto flex-grow text-center">
Exécution du contrôle
</button>
</div>

    {/* Content Section */}
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-2xl shadow-lg gap-6 md:gap-10 mt-10 py-6">
    <div className=" lg:w-1/2 flex flex-col w-full ">
          {dsns.map((dsn) => (
            <ControlDsnCard key={dsn.label} {...dsn} />
          ))}
        </div>

        

      {/* Right Section (Image/Video) */}
      <div className="w-full  flex justify-end ">
        <img
         className="xl:w-auto xl:h-auto  object-cover rounded-2xl"
          src="src/assets/images/verifidsn.png"
          alt="VERIF'DSN"
        />
      </div>
    </div>
  </section>
  )
}

export default ControlDsn