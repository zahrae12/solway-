import React from 'react'
import HrHero from '../Sections/SynchHr/HrHero'
import { SynchAcceuil } from '../Sections/SynchHr/SynchAcceuil'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
export const SynchHr = () => {
  return (
 <main>
    <section className=" px-4 xl:py-12 bg-gray-100 pt-4 md:pt-0 " >
    <img
          src="assets/icons/yellowleft.svg"
          alt="dots left"
         className="hidden md:block absolute left-0 -top-1/6 mt-40 object-cover -ml-6 "
  />
  
           {/* Right Dots */}
         <img
          src="assets/icons/yellowright.svg"
          alt="dots right"
         className="hidden md:block absolute right-0 -top-1/6 mt-40  object-cover z-0"
  />
             <div className="relative z-10">
    <HrHero/>
    </div>
    </section>
    <section className=" padding bg-gray-100 " >
   
<img 
  src="assets/icons/frame.svg"
  alt="dots left"
  className="hidden md:block absolute lg:top-[1500px] md:top-[500px] left-0  object-cover -ml-6"
 
/>
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden md:block absolute right-0 lg:top-[1500px] md:top-[500px]  object-cover -ml-6"
  /> 


   <img
          src="assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-72  object-cover -ml-6 "
  />
  
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-72  object-cover z-0"
  />
   
          
             <div className="relative z-10">
   <SynchAcceuil/>
   </div>
    </section>
    <section className=" bg-cover bg-no-repeat  pt-0 -mt-14 bg-gray-100 md:px-4">
                <VerifidsnPlusFooter />
              </section>
    </main>
  )
}
