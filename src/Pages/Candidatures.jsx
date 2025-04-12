import React from 'react'
import VosCandidatures from '../Sections/Carriere/VosCandidatures'
import { Footer } from '../Sections'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
export const Candidatures = () => {
  return (
    <main >
    <section >
        <VosCandidatures/>
    </section>
    <section className='bg-gray-50 -mt-16'>
        <VerifidsnPlusFooter />
        </section>
   </main>
  )
}
