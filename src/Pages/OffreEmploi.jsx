import React from 'react'
import NosOffres from '../Sections/Carriere/NosOffres'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
const OffreEmploi = () => {
  return (
    <main className="w-full bg-gray-50">
    <section className="w-full">
      <NosOffres />
    </section>
    <section className="lg:px-16">
      <VerifidsnPlusFooter />
    </section>
  </main>
  )
}

export default OffreEmploi