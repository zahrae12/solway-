import React from 'react'
import { solutions } from '../constants'
import SolutionsCard from '../Components/SolutionsCard'
const NosSolutions = () => {
  return (
    <section className="-mt-28 py-10 px-4 md:px-10 lg:px-20">
    {/* Title */}
    <h1 className="text-3xl font-extrabold text-center">Nos solutions</h1>
    <p className="text-lg font-medium leading-[24px] text-gray-500 text-center">
      Découvrez nos outils pour la gestion des demandes, des <br className="hidden md:block" />
      ressources humaines et de la facturation.
    </p>
  
    {/* Solutions Cards */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-screen-lg mx-auto min-h-[482px] rounded-lg">
      {solutions.map((solution) => (
        <SolutionsCard key={solution.label} {...solution} />
      ))}
    </div>
  </section>
  
  )
}

export default NosSolutions