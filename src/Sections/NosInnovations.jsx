import React from 'react'
import { innovations } from '../constants'
import InnovationCard from '../Components/InnovationCard'
const NosInnovations = () => {
  return (
    <section>
      <div className='-mt-32'>
      <h1 className='text-3xl font-extrabold text-center'>Nos Innovations</h1>
      <p className='text-lg font-medium laeding-[24px] text-gray-500 align-middle text-center'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis<br/> sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
      </div>
      {/* second div */}
      <div className="mt-10 flex gap-6 justify-center items-center">
          <button className="border border-gray-300 text-black py-2 px-36 rounded-lg  font-semibold">
            VERIFI'DSN
          </button>
          <button className="border bg-yellow-500 py-2 px-36 rounded-lg font-semibold text-white">
            VERIFI'DSN PLUS
          </button>
          <button className="border  border-gray-300 py-2 px-36 rounded-lg font-semibold ">
            SOLWAY Synchronisation HR
          </button>
        </div>
        {/* third div (component) */}
        
      <div className='flex flex-col md:flex-row bg-white p-3 rounded-2xl shadow-lg gap-80 mt-16 '>
        <div className="w-full h-[22px] bg-white flex justify-center items-center mt-32 ml-10 ">
        {innovations.map((innovation) => (
        <InnovationCard key={innovation.label} {...innovation} />
  ))}
           </div>
         <div className="md:w-full mr-8 h-[342px] ">
          <img
            className="w-full h-auto bg-gray-200 md:h-full rounded-2xl mr-8"
            src="src/assets/images/image 5.png"
            title="VERIF'DSN"
            frameBorder="0"
            
          />
        </div>
</div>

    </section>
  )
}

export default NosInnovations