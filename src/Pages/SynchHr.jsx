import React from 'react'
import HrHero from '../Sections/SynchHr/HrHero'
import { SynchAcceuil } from '../Sections/SynchHr/SynchAcceuil'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
export const SynchHr = () => {
  return (
 <main>
    <section className=" px-4 xl:py-12 bg-gray-100  " >
    <img
          src="assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-40 object-cover -ml-6 "
  />
  
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-40  object-cover z-0"
  />
             <div className="relative z-10">
    <HrHero/>
    </div>
    </section>
    <section className=" padding bg-gray-100 " >
   
<img 
  src="assets/icons/frame.svg"
  alt="dots left"
  className="hidden xl:block absolute top-[250%] left-0  object-cover -ml-6"
 
/>
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden xl:block absolute right-0 top-[250%]  object-cover -ml-6"
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
    <section className=" bg-cover bg-no-repeat  pt-0 -mt-14 bg-gray-100">
                <VerifidsnPlusFooter />
              </section>
    </main>
  )
}
