import React from 'react'
import InvoiceHero from '../Sections/SolwayInvoice/InvoiceHero'
import FunctionnalityInvoice from '../Sections/SolwayInvoice/FunctionnalityInvoice'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'

const SolwayInvoice = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <main className="bg-gray-50 overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative md:px-6 px-4 xl:py-12 md:bg-gray-50 bg-white md:pt-4 pt-10 overflow-hidden">
          {/* Left Dots */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-28 md:mt-12 object-cover -ml-6"
          />
          {/* Right Dots */}
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-28 md:mt-12 object-cover -mr-4 z-0"
          />

          <div className="relative z-10">
            <InvoiceHero />
          </div>
        </section>

        {/* Functionality Section */}
        <section className="relative bg-gray-50 pt-14 xl:pt-0 md:pt-2 overflow-hidden">
          {/* Left Dots */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 top-56 md:mt-12 object-cover -ml-6"
          />
          {/* Right Dots */}
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 top-56 md:mt-12 object-cover -mr-5 z-0"
          />

          {/* Additional decorative dots if needed */}
          <img
            src="assets/icons/frame.svg"
            alt="dots left"
            className="hidden md:block absolute left-0 md:top-[750px] xl:top-[950px] object-cover -ml-6"
          />
          <img
            src="assets/icons/soldeskframe.svg"
            alt="dots right"
            className="hidden md:block absolute right-0 md:top-[750px] xl:top-[950px] object-cover -mr-5"
          />

          <div className="relative z-10">
            <FunctionnalityInvoice />
          </div>
        </section>

        {/* Footer Section */}
        <section className="relative bg-cover bg-no-repeat xl:px-10 lg:px-6 md:pt-6 bg-gray-50 md:px-0 overflow-hidden">
          <VerifidsnPlusFooter />
        </section>
        
      </main>
    </div>
  )
}

export default SolwayInvoice
