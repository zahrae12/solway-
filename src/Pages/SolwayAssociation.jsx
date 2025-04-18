import React from 'react'
import SolidaritySection from '../Sections/Association/SolidaritySection'
import { EngagementSection } from '../Sections/Association/EngagementSection'
import { AssociationFooter } from '../Sections/Association/AssociationFooter'
import { GreenSection } from '../Sections/Association/GreenSection'

const SolwayAssociation = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <main className="min-h-screen flex flex-col justify-between bg-gray-50 overflow-x-hidden">

        {/* Page Content */}
        <div>
          <section className="relative md:px-6 px-4 xl:py-12 md:bg-gray-50 bg-white md:pt-4 pt-8 overflow-hidden">

            {/* Dots */}
            <img
              src="assets/icons/associ.svg"
              alt="dots left"
              className="hidden md:block absolute left-0 top-32 xl:mt-16 md:mt-14 object-cover"
            />
            <img
              src="assets/images/Frameright.png"
              alt="dots right"
              className="hidden md:block absolute right-0 top-32 xl:mt-16 md:mt-14 object-cover z-0"
            />

            <div className="relative z-10">
              <SolidaritySection />
            </div>
          </section>

          <section className="relative xl:px-4 bg-gray-50 md:pt-24 xl:pt-0 pt-6 overflow-hidden">
            <img
              src="assets/icons/greenLeft.svg"
              alt="dots left"
              className="hidden md:block absolute left-0 top-36 md:mt-20 lg:mt-0 object-cover"
            />
            <img
              src="assets/images/Frameright.png"
              alt="dots right"
              className="hidden md:block absolute right-0 top-36 md:mt-20 lg:mt-0 object-cover z-0"
            />

            <div className="relative z-10">
              <EngagementSection />
            </div>
          </section>

          <section className="relative px-4 lg:px-8 bg-gray-50 md:pt-12 xl:pt-0 pt-6 overflow-hidden">
            <img
              src="assets/icons/greenLeft.svg"
              alt="dots left"
              className="hidden md:block absolute left-0 top-28  xl:-mt-12 md:mt-14 object-cover"
            />
            <img
              src="assets/images/Frameright.png"
              alt="dots right"
              className="hidden md:block absolute right-0 top-28 xl:-mt-12 md:mt-14 object-cover"
            />

            <div className="relative z-10">
              <GreenSection />
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="px-4 bg-gray-50">
          <AssociationFooter />
        </div>
      </main>
    </div>
  )
}

export default SolwayAssociation
