import React from 'react'
import { activités } from '../constants'
import ActivityCard from '../Components/ActivityCard'
const NosActivites = () => {
  return (
   <section className='w-full flex flex-col lg:flex-row items-start gap-10 -mt-24 p-4'>
    {/* left section */}
    <div className='flex flex-col justify-end items-start lg:mt-0  lg:w-1/2 w-full pb-10 text-base/8 sm:mt-4 mt-4'>
     <h2 className='text-lg font-extrabold text-yellow-500 ml-20 leading-[24px] mt-20 lg:ml-8'>Everything you need</h2>
     <h1 className='text-3xl font-extrabold leading-[36px] mt-2 ml-20 lg:ml-8 '>Nos activités</h1>
     <p className='text-lg font-medium leading-[28px] mt-4 text-gray-600 tracking-wide ml-8'>Notre ambition est de vous servir tout<br/> en mettant en oeuvre les meilleurs <br/> pratiques issus du savoir-faire acquis<br/> au cours des nombreux projets réalisés <br/>pour différents clients.</p>
    </div>

    {/* right section */}
    <div className='lg:w-3/2 w-full mt-0 lg:mt-16 mr-4 shadow-md  rounded-md'>
    <div className="bg-white grid sm:grid-cols-1 lg:grid-cols-2 sm:grid grid-cols-1">
   
    {activités.map((activity) => (
    <ActivityCard key={activity.label} {...activity} />
  ))}
</div>


    </div>
   </section>
  )
}

export default NosActivites