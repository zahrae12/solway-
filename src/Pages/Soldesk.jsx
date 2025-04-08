import React from 'react'
import SoldeskHero from '../Sections/Soldesk/SoldeskHero'
import { SynchAcceuil } from '../Sections/SynchHr/SynchAcceuil'
import SoldeskAcceuil from '../Sections/Soldesk/SoldeskAcceuil'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'

const Soldesk = () => {
  return (
    <main>
    <section className="lg:bg-[url('/src/assets/images/MIM.png')] bg-cover bg-no-repeat px-4 xl:py-12 " >
    <SoldeskHero/>
    </section>
    <section className="lg:bg-[url('/src/assets/images/synchro.png')] bg-cover bg-no-repeat padding bg-gray-50 " >
       <SoldeskAcceuil/>
        </section>
        <section className=" bg-gray-50 xl:px-12 xl:-mt-12 lg:-pt-8 -pt-18 -mt-6 lg:mt-0">
                <VerifidsnPlusFooter />
              </section>
    </main>
  )
}

export default Soldesk