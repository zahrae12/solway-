import React from 'react'
import { activités } from '../constants'
import ActivityCard from '../Components/ActivityCard'

const NosActivites = () => {
  return (
    <section className="w-full flex lg:flex-row  flex-col lg:items-start lg:gap-10 lg:-mt-24 lg:p-2 text-center lg:px-0 lg:-ml-8">
      {/* left section */}
      <div className=" flex flex-col justify-end items-start lg:mt-0 lg:w-2/3 w-full pb-10 text-base/8 -mt-16 ">
        <h2 className="text-lg font-extrabold text-yellow-500 ml-20 leading-[24px] mt-20 lg:ml-8">Everything you need</h2>
        <h1 className="text-3xl font-extrabold leading-[36px] mt-2 ml-20 lg:ml-8">Nos activités</h1>
        <p className="text-lg font-medium lg:text-left text-center mt-4 text-gray-600 ml-8 leading-normal">
          Notre ambition est de vous servir tout en mettant en œuvre les meilleures pratiques issues du savoir-faire acquis
          au cours des nombreux projets réalisés pour différents clients.
        </p>
      </div>

      {/* right section */}
      <div className="lg:w-3/2 w-full mt-0 lg:mt-16 shadow-md rounded-md">
        <div className="bg-white grid sm:grid-cols-1  lg:grid-cols-2 gap-4">
          {activités.map((activity) => (
            <ActivityCard key={activity.label} {...activity} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NosActivites;
