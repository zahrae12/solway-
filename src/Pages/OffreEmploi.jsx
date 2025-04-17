import React from 'react'
import NosOffres from '../Sections/Carriere/NosOffres'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
const OffreEmploi = () => {
  return (
<main className="lg:min-h-screen lg:flex lg:flex-col lg:justify-between bg-gray-50  ">
  <div>
    <NosOffres />
  </div>
  <div className="xl:px-20 -mt-12">
    <VerifidsnPlusFooter />
  </div>
</main>


  
  )
}

export default OffreEmploi