import React from 'react'
import SoldeskHero from '../Sections/Soldesk/SoldeskHero'

import SoldeskAcceuil from '../Sections/Soldesk/SoldeskAcceuil'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
import SolHrHero from '../Sections/SolwayHR/SolHrHero'
import Functionnalities from '../Sections/SolwayHR/Functionnalities'
import CheckSteps from '../Sections/SolwayHR/CheckSteps'

const SolwayHR = () => {
  return (
    <main>
       <section className="lg:bg-[url('/src/assets/images/MIM.png')] bg-cover bg-no-repeat px-4 xl:py-12 " >
       <SolHrHero/>
       </section>
       <section className="lg:bg-[url('/src/assets/images/synchro.png')] bg-cover bg-no-repeat padding bg-gray-50 " >
          <Functionnalities/>
           </section>
           <section className="bg-gray-50 xl:px-28 lg:px-10 px-6  ">
                   <CheckSteps />
                 </section>
           <section className=" bg-gray-50 xl:px-12  ">
                   <VerifidsnPlusFooter />
                 </section>
                 
       </main>
  )
}

export default SolwayHR