
import React from 'react'
import NosMissionsPage from '../Sections/Carriere/NosMissionsPage'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
const NosMissions = () => {
  return (
   <main>
    <section>
        <NosMissionsPage/>
    </section>
    <section className='bg-gray-50 -mt-16'>
        <VerifidsnPlusFooter />
        </section>
   </main>
  )
}

export default NosMissions