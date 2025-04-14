import React from 'react'
import InvoiceHero from '../Sections/SolwayInvoice/InvoiceHero'
import FunctionnalityInvoice from '../Sections/SolwayInvoice/FunctionnalityInvoice'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
const SolwayInvoice = () => {
  return (
    <main className='bg-gray-50'>
       <section className=" px-4 xl:py-12 " >
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
       <InvoiceHero/>
       </section>
       <section className=" padding bg-gray-50 " >
       <img
          src="/src/assets/icons/yellowLeft.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-28  object-cover -ml-6 "
  />
  
           {/* Right Dots */}
         <img
          src="/src/assets/icons/yellowRight.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-28  object-cover z-0"
  />


<img 
  src="/src/assets/icons/yellowLeft.svg"
  alt="dots left"
  className="hidden xl:block absolute top-[210%] left-0  object-cover  -ml-6"
 
/>
           {/* Right Dots */}
         <img
          src="/src/assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden xl:block absolute right-0 top-[210%]  object-cover -mr-5"
  /> 
  <div className="relative z-10">
          <FunctionnalityInvoice/>
          </div>
           </section>
           <section className=" bg-cover bg-no-repeat xl:px-10 -mt-14 bg-gray-100">
                <VerifidsnPlusFooter />
              </section>   
       </main>
  )
}

export default SolwayInvoice