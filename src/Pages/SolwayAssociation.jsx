import React from 'react'
import SolidaritySection from '../Sections/Association/SolidaritySection'
import { EngagementSection } from '../Sections/Association/EngagementSection'
import { AssociationFooter } from '../Sections/Association/AssociationFooter'
import { GreenSection } from '../Sections/Association/GreenSection'

const SolwayAssociation = () => {
  return (
    <main className="lg:min-h-screen lg:flex lg:flex-col lg:justify-between bg-gray-50">
      
      {/* Page Content */}
      <div>
      <section className="md:px-6 px-4 xl:py-12 md:bg-gray-50 bg-white md:pt-4 pt-8" >
          {/* Dots */}
          <div className="relative overflow-hidden">
          <img
            src="assets/icons/associ.svg"
            alt="dots left"
            className="hidden lg:block absolute left-0 -top-1/6 mt-28 object-cover -ml-4"
          /></div>
          <div className="relative overflow-hidden">
          <img
            src="assets/images/Frameright.png"
            alt="dots right"
            className="hidden lg:block absolute right-0 -top-1/6 mt-28 object-cover z-0 -mr-3"
          /></div>


          <div className="relative z-10">
            <SolidaritySection />
          </div>
        </section>

        <section className="xl:px-4 bg-gray-50 relative overflow-hidden md:pt-24 xl:pt-0 pt-6">
        <div className="relative overflow-hidden">
        <img
            src="assets/icons/greenLeft.svg"
            alt="dots left"
            className="hidden lg:block absolute left-0 -top-1/6 xl:mt-36 lg:mt-12  -ml-4 object-cover"
          /></div>
          <div className="relative overflow-hidden">
          <img
            src="assets/images/Frameright.png"
            alt="dots right"
            className="hidden lg:block absolute right-0 -top-1/6 xl:mt-36 lg:mt-12 object-cover -mr-3"
          /></div>

          <div className="relative z-10">
            <EngagementSection />
          </div>
        </section>

        <section className="px-4 lg:px-8 -mt-16 lg:mt-0 bg-gray-50 relative overflow-hidden md:pt-12 xl:pt-0">
          <img
            src="assets/icons/greenLeft.svg"
            alt="dots left"
            className="hidden lg:block absolute left-0 -top-1/6 mt-12 -ml-4 object-cover"
          />
          <img
            src="assets/images/Frameright.png"
            alt="dots right"
            className="hidden lg:block absolute right-0 -top-1/6 mt-12 object-cover -mr-3"
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
  )
}

export default SolwayAssociation
