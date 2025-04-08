import React from 'react'
import HrHero from '../Sections/SynchHr/HrHero'
import { SynchAcceuil } from '../Sections/SynchHr/SynchAcceuil'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
export const SynchHr = () => {
  return (
 <main>
    <section className="lg:bg-[url('/src/assets/images/MIM.png')] bg-cover bg-no-repeat px-4 xl:py-12 bg-gray-100" >
    <HrHero/>
    </section>
    <section className="lg:bg-[url('/src/assets/images/synchro.png')] bg-cover bg-no-repeat padding bg-gray-100 " >
   <SynchAcceuil/>
    </section>
    <section className=" bg-cover bg-no-repeat  pt-0 -mt-14 bg-gray-100">
                <VerifidsnPlusFooter />
              </section>
    </main>
  )
}
