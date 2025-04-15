import React from 'react'
import SoldeskHero from '../Sections/Soldesk/SoldeskHero'
import { SynchAcceuil } from '../Sections/SynchHr/SynchAcceuil'
import SoldeskAcceuil from '../Sections/Soldesk/SoldeskAcceuil'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'

const Soldesk = () => {
  return (
    <main className="bg-gray-50">
    <section className=" px-4 xl:py-12 bg-white lg:bg-gray-50" >
    <img
          src="assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-28  object-cover -ml-6 "
  />
  
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-28  object-cover -mr-4 z-0"
  />
    <SoldeskHero/>
    </section>
    <section className=" padding bg-gray-50 " >
    <img
          src="assets/icons/yellowLeft.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-36 object-cover -ml-6 z-4 "
  />
  
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-36  object-cover z-0 -mr-5"
  />

<img 
  src="assets/icons/yellowLeft.svg"
  alt="dots left"
  className="hidden xl:block absolute top-[210%] left-0  object-cover -mt-4 -ml-6"
 
/>
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden xl:block absolute right-0 top-[210%] -mt-4 object-cover -mr-5"
  /> 

   <div className="relative z-10">
       <SoldeskAcceuil/>
       </div>
        </section>
        <section className=" bg-gray-50 xl:px-12 xl:-mt-12 lg:-pt-8 -pt-18 -mt-6 lg:mt-0">
                <VerifidsnPlusFooter />
              </section>
    </main>
  )
}

export default Soldesk