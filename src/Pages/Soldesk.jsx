import React from 'react'
import SoldeskHero from '../Sections/Soldesk/SoldeskHero'
import { SynchAcceuil } from '../Sections/SynchHr/SynchAcceuil'
import SoldeskAcceuil from '../Sections/Soldesk/SoldeskAcceuil'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'

const Soldesk = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <main className="bg-gray-50">

        {/* Hero Section */}
        <section className="relative md:px-4 lg:px-0 xl:py-12 bg-white md:bg-gray-50 md:pt-4 pt-8 overflow-hidden">
          {/* Decorative Dots */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-36 object-cover md:-ml-6 xl:mt-4"
          />
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-36 object-cover -mr-12 md:-mr-6 z-0 xl:mt-4"
          />

          <div className="relative z-10">
            <SoldeskHero />
          </div>
        </section>

        {/* Acceuil Section */}
        <section className="relative md:px-4 xl:px-12 lg:px-8 bg-gray-50 xl:pt-16 md:pt-8 overflow-hidden">
          {/* First Decorative Dots */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-36 object-cover -ml-6 xl:-ml-6 z-10"
          />
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-36 object-cover -mr-6 z-0"
          />

          {/* Second Decorative Dots */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-[790px] object-cover -ml-6 xl:-ml-6 z-10"
          />
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-[790px] object-cover -mr-6 z-0"
          />

          <div className="relative z-20">
            <SoldeskAcceuil />
          </div>
        </section>

        {/* Footer */}
        <section className="relative bg-gray-50 xl:px-12 lg:-pt-8 pt-4 -mt-6 lg:mt-0 overflow-hidden">
          <VerifidsnPlusFooter />
        </section>

      </main>
    </div>
  )
}

export default Soldesk
