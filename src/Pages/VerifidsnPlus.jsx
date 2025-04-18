import React from 'react'

import VerifidsnPlusHero from '../Sections/VerifidsnPlus/VerifidsnPlusHero'
import ControlDsn from '../Sections/Verifi\'dsn/ControlDsn'
import AllSteps from '../Sections/Verifi\'dsn/AllSteps'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'

const VerifidsnPlus = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <main className="md:bg-gray-50 bg-white">

        {/* Hero Section */}
        <section className="bg-white md:px-8 relative">
          <VerifidsnPlusHero />
        </section>

        {/* Control DSN Section */}
        <section className="relative bg-gray-50 px-4 md:px-10 pt-16">
          {/* Decorative Dots */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-64 object-cover -ml-2"
          />
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-64 object-cover z-0 -mr-2"
          />
          <div className="relative z-10">
            <ControlDsn />
          </div>
        </section>

        {/* All Steps Section */}
        <section className="relative pt-8 lg:px-12 px-4 md:px-0 bg-white md:bg-gray-50 md:pt-12">
          {/* Decorative Dots */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-52 object-cover -ml-2"
          />
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-52 object-cover z-0"
          />
          <div className="relative z-10 md:-mt-4 md:px-10 lg:px-2">
            <AllSteps />
          </div>
        </section>

        {/* Footer Section */}
        <section className="bg-white md:bg-gray-50 md:px-0 relative">
          <VerifidsnPlusFooter />
        </section>

      </main>
    </div>
  )
}

export default VerifidsnPlus
