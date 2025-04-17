import React from 'react'
import VosCandidatures from '../Sections/Carriere/VosCandidatures'
import { Footer } from '../Sections'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
export const Candidatures = () => {
  return (
    <main className='lg:min-h-screen lg:flex lg:flex-col lg:justify-between bg-gray-50'>
    <section >
        <VosCandidatures/>
    </section>
    <section className='bg-gray-50 -mt-6 md:px-6 '>
        <VerifidsnPlusFooter />
        </section>
   </main>
  )
}
