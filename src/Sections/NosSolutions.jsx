import React from 'react'
import { solutions } from '../constants'
import SolutionsCard from '../Components/SolutionsCard'
const NosSolutions = () => {
  return (
    <section className="-mt-28 lg:py-14 lg:w-full lg:p-0  ">
    {/* Title */}
    <h1 className="text-3xl font-extrabold text-center pt-8 lg:pt-0 ">Nos solutions</h1>
    <p className="text-lg font-medium leading-[24px] text-gray-500 text-center px-2 lg:px-0">
      Découvrez nos outils pour la gestion des demandes, des <br className="hidden md:block" />
      ressources humaines et de la facturation.
    </p>
  
    {/* Solutions Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-0 gap-1 mt-10 rounded-lg lg:px-8 py-8  pt-2 md:px-4 px-4 ">
      {solutions.map((solution) => (
        <SolutionsCard key={solution.label} {...solution} />
      ))}
    </div>
  </section>
  
  )
}

export default NosSolutions