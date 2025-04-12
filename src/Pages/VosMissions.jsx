import React from 'react'
import { VosMissionsPage } from '../Sections/Carriere/VosMissionsPage'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'

const VosMissions = () => {
  return (
    <main>
    <section>
        <VosMissionsPage/>
    </section>
    <section className='bg-gray-50 -mt-16'>
        <VerifidsnPlusFooter />
        </section>
   </main>
  )
}

export default VosMissions