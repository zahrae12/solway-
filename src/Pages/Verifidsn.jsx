import React from 'react'
import VerifidsnHero from '../Sections/Verifi\'dsn/VerifidsnHero'
import ControlDsn from '../Sections/Verifi\'dsn/ControlDsn'
import AllSteps from '../Sections/Verifi\'dsn/AllSteps'
import VerifyFooter from '../Sections/Verifi\'dsn/VerifyFooter'

const Verifidsn = () => {
  return (
    <main className="">
       <section >
      <VerifidsnHero />
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
         className="hidden lg:block absolute right-0 -top-1/6 mt-44  object-cover z-0 -mr-3"
  />
             <div className="relative z-10">
                <ControlDsn />
                </div>
              </section>
              <section className=" pt-8 lg:px-14 px-4 small-screen-bg  bg-white">
              <img
          src="assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-52  object-cover -ml-1 "
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
              <section className=" bg-cover bg-no-repeat lg:pt-6 pt-16  md:bg-white">
                <VerifyFooter />
              </section>
      </main>
  )
}

export default Verifidsn