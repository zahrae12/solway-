import React from 'react'
import SoldeskHero from '../Sections/Soldesk/SoldeskHero'

import SoldeskAcceuil from '../Sections/Soldesk/SoldeskAcceuil'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
import SolHrHero from '../Sections/SolwayHR/SolHrHero'
import Functionnalities from '../Sections/SolwayHR/Functionnalities'
import CheckSteps from '../Sections/SolwayHR/CheckSteps'

const SolwayHR = () => {
  return (
    <main className='bg-gray-50'>
       <section className=" px-4 xl:py-12 md:bg-gray-50 bg-white" >
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
       <SolHrHero/>
       </section>
       <section className="  bg-gray-50 md:mt-4 " >
       <img
          src="assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-56  object-cover -ml-6 "
  />
  
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-56  object-cover z-0"
  />

<img 
  src="assets/icons/frame.svg"
  alt="dots left"
  className="hidden xl:block absolute top-[250%] left-0  object-cover -mt-32 -ml-6"
 
/>
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden xl:block absolute right-0 top-[250%] -mt-32 object-cover -mr-5"
  /> 

<img 
  src="assets/icons/frame.svg"
  alt="dots left"
  className="hidden xl:block absolute top-[330%] left-0  object-cover -mt-32 -ml-6"
 
/>
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden xl:block absolute right-0 top-[330%] -mt-32 object-cover -mr-5"
  /> 
   <div className="relative z-10 md:mt-4  ">
          <Functionnalities/>
          </div>
           </section>
           <section className="bg-gray-50 xl:px-12 lg:px-10 px-6  ">
           
   <div className="relative z-10 md:mt-8 px-0">
                   <CheckSteps />
                   </div>
                 </section>
           <section className=" bg-gray-50 xl:px-8 md:px-2 ">
                   <VerifidsnPlusFooter />
                 </section>
                 
       </main>
  )
}

export default SolwayHR