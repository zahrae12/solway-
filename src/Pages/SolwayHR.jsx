import React from 'react'
import SoldeskHero from '../Sections/Soldesk/SoldeskHero'
import SoldeskAcceuil from '../Sections/Soldesk/SoldeskAcceuil'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
import SolHrHero from '../Sections/SolwayHR/SolHrHero'
import Functionnalities from '../Sections/SolwayHR/Functionnalities'
import CheckSteps from '../Sections/SolwayHR/CheckSteps'

const SolwayHR = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <main className="bg-gray-50 overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative px-4 xl:py-12 md:bg-gray-50 bg-white md:pt-4 pt-8 overflow-hidden">
          {/* Left Dots */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-28 mt-12 object-cover -ml-6"
          />
          {/* Right Dots */}
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-28 mt-12 object-cover -mr-4 z-0"
          />

          <div className="relative z-10">
            <SolHrHero />
          </div>
        </section>

        {/* Functionalities Section */}
        <section className="relative bg-gray-50 md:mt-4 overflow-hidden">
          {/* Top Left Dots */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-56 object-cover -ml-6"
          />
          {/* Top Right Dots */}
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-56 object-cover -mr-5 z-0"
          />

          {/* Decorative Dots Set 2 */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-[1200px] object-cover -mt-32 -ml-6"
          />
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-[1200px] object-cover -mt-32 -mr-5"
          />

          {/* Decorative Dots Set 3 */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden xl:block absolute left-0 top-[1800px] object-cover -mt-32 -ml-6"
          />
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden xl:block absolute right-0 top-[1800px] object-cover -mt-32 -mr-5"
          />

          <div className="relative z-10 md:mt-4">
            <Functionnalities />
          </div>
        </section>

        {/* CheckSteps Section */}
        <section className="relative bg-gray-50 xl:px-12 lg:px-10 px-6 overflow-hidden">
          <div className="relative z-10 md:mt-8 px-0">
            <CheckSteps />
          </div>
        </section>

        {/* Footer Section */}
        <section className="relative bg-gray-50 xl:px-8 overflow-hidden">
          <VerifidsnPlusFooter />
        </section>

      </main>
    </div>
  )
}

export default SolwayHR
