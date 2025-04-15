import React from 'react'

import VerifidsnPlusHero from '../Sections/VerifidsnPlus/VerifidsnPlusHero'
import ControlDsn from '../Sections/Verifi\'dsn/ControlDsn'
import AllSteps from '../Sections/Verifi\'dsn/AllSteps'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
const VerifidsnPlus = () => {
  return (
    <main>
    <section className=''>
      <VerifidsnPlusHero />
      </section>
      <section className=" padding small-screen-bg md:bg-gray-50 bg-gray-50">
      <img
          src="assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-44  object-cover -ml-2 "
  />
  
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-44  object-cover z-0 -mr-2"
  />
             <div className="relative z-10">
                <ControlDsn />
                </div>
              </section>
              <section className=" pt-8 lg:px-14 px-4 small-screen-bg bg-white">
              <img
          src="assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-52  object-cover -ml-2 "
  />
  
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-52  object-cover z-0"
  />
             <div className="relative z-10">
                <AllSteps />
                </div>
              </section>
              <section className=" lg:pt-8 pt-16 bg-white ">
                <VerifidsnPlusFooter />
              </section>

   </main>
  )
}

export default VerifidsnPlus