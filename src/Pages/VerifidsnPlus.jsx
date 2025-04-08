import React from 'react'

import VerifidsnPlusHero from '../Sections/VerifidsnPlus/VerifidsnPlusHero'
import ControlDsn from '../Sections/Verifi\'dsn/ControlDsn'
import AllSteps from '../Sections/Verifi\'dsn/AllSteps'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
const VerifidsnPlus = () => {
  return (
    <main>
    <section className=''>
      <VerifidsnPlusHero />
      </section>
      <section className="bg-[url('/src/assets/images/cover.png')] bg-cover bg-no-repeat padding small-screen-bg md:bg-gray-50 bg-gray-50">
                <ControlDsn />
              </section>
              <section className="lg:bg-[url('/src/assets/images/containerrr.png')] bg-cover bg-no-repeat pt-8 lg:px-14 px-4 small-screen-bg bg-white">
                <AllSteps />
              </section>
              <section className=" bg-cover bg-no-repeat lg:pt-8 pt-16 bg-white xl:bg-gray-50">
                <VerifidsnPlusFooter />
              </section>

   </main>
  )
}

export default VerifidsnPlus