import React from 'react'
import SolidaritySection from '../Sections/Association/SolidaritySection'
import { EngagementSection } from '../Sections/Association/EngagementSection'
import { AssociationFooter } from '../Sections/Association/AssociationFooter'
import { GreenSection } from '../Sections/Association/GreenSection'
const SolwayAssociation = () => {
  return (
    <main className='lg:bg-gray-50'> 
      <section className="relative px-8 xl:px-2 py-20 ">
  {/* Left Dots */}
  <img
          src="/src/assets/icons/associ.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-28  object-cover -ml-4  "
  />
  
           {/* Right Dots */}
         <img
          src="/src/assets/icons/frameRight.png"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-28  object-cover z-0 -mr-3"
  />

  {/* Content */}
  <div className="relative z-10">
    <SolidaritySection />
  </div>
</section>
{/* ---------------------------------------------------- */}
{/* second one */}
       <section className=" xl:px-4 bg-gray-50" >
        {/* Left Dots */}
  <img
    src="/src/assets/icons/associ.svg"
    alt="dots left"
    className="hidden lg:block absolute left-0 lg:top-1/2 xl:top-3/4 xl:mt-24 object-cover -ml-4  "
  />
  
  {/* Right Dots */}
  <img
    src="/src/assets/icons/frameright.png"
    alt="dots right"
    className="hidden lg:block absolute right-0 lg:top-1/2 xl:top-3/4 xl:mt-24 object-cover -mr-3 z-0"
  />
   <div className="relative z-10">
       <EngagementSection/>
       </div>
       </section>
{/* ---------------------------------------------------------------------- */}
       <section className=" px-4 lg:px-8 -mt-16 lg:mt-0 bg-gray-50" >
       <img
          src="/src/assets/icons/greenLeft.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-12  -ml-4 object-cover  "
  />
  
  {/* Right Dots */}
  <img
    src="/src/assets/icons/frameright.png"
    alt="dots right"
    className="hidden lg:block absolute right-0 -top-1/6 mt-12 object-cover -mr-3  z-0"
  />
  <div className="relative z-10">
       <GreenSection/>
       </div>
       </section>

       {/* --------------------------------------------------- */}
       <section className=" bg-gray-50 px-4">
                   <AssociationFooter/>
                 </section>
        
       </main>
  )
}

export default SolwayAssociation