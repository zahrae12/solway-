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
       <section className=" px-4 xl:py-12 lg:bg-gray-50 bg-white" >
      <img
          src="/src/assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-28  object-cover -ml-6 "
  />
  
           {/* Right Dots */}
         <img
          src="/src/assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-28  object-cover -mr-4 z-0"
  />
       <SolHrHero/>
       </section>
       <section className=" padding bg-gray-50 " >
       <img
          src="/src/assets/icons/yellowLeft.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-48  object-cover -ml-6 "
  />
  
           {/* Right Dots */}
         <img
          src="/src/assets/icons/yellowRight.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-48  object-cover z-0"
  />

<img 
  src="/src/assets/icons/yellowLeft.svg"
  alt="dots left"
  className="hidden xl:block absolute top-[250%] left-0  object-cover -mt-32 -ml-6"
 
/>
           {/* Right Dots */}
         <img
          src="/src/assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden xl:block absolute right-0 top-[250%] -mt-32 object-cover -mr-5"
  /> 

<img 
  src="/src/assets/icons/yellowLeft.svg"
  alt="dots left"
  className="hidden xl:block absolute top-[330%] left-0  object-cover -mt-32 -ml-6"
 
/>
           {/* Right Dots */}
         <img
          src="/src/assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden xl:block absolute right-0 top-[330%] -mt-32 object-cover -mr-5"
  /> 
   <div className="relative z-10">
          <Functionnalities/>
          </div>
           </section>
           <section className="bg-gray-50 xl:px-28 lg:px-10 px-6  ">
           
   <div className="relative z-10">
                   <CheckSteps />
                   </div>
                 </section>
           <section className=" bg-gray-50 xl:px-12  ">
                   <VerifidsnPlusFooter />
                 </section>
                 
       </main>
  )
}

export default SolwayHR