import React from 'react'
import ContactHero from '../Sections/Contact/ContactHero'
import { Footer } from '../Sections'
const Contact = () => {
  return (
    <main className="w-full ">

      <ContactHero />
     <section className="bg-cover bg-no-repeat lg:px-12  lg:pt-10 px-6 pt-4 small-screen-bg md:bg-gray-50 bg-gray-50">
                     <Footer />
                   </section>
      </main>
  )
}

export default Contact