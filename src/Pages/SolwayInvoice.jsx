import React from 'react'
import InvoiceHero from '../Sections/SolwayInvoice/InvoiceHero'
import FunctionnalityInvoice from '../Sections/SolwayInvoice/FunctionnalityInvoice'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
const SolwayInvoice = () => {
  return (
    <main className='bg-gray-50'>
       <section className="md:px-6 px-4 xl:py-12 md:bg-gray-50 bg-white md:pt-4 pt-6" >
       <div className="relative overflow-hidden">
       <img
          src="assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-28  object-cover -ml-6 "
  /></div>
  
  <div className="relative overflow-hidden">
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-28  object-cover -mr-4 z-0"
  /></div>
       <InvoiceHero/>
       </section>
       <section className="  bg-gray-50 " >
       <div className="relative overflow-hidden">
       <img
          src="assets/icons/frame.svg"
          alt="dots left"
         className="hidden lg:block absolute left-0 -top-1/6 mt-56  object-cover -ml-6 "
  /></div>
  <div className="relative overflow-hidden">
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden lg:block absolute right-0 -top-1/6 mt-56  object-cover z-0"
  /></div>

<div className="relative overflow-hidden">
<img 
  src="assets/icons/frame.svg"
  alt="dots left"
  className="hidden xl:block absolute top-[210%] left-0  object-cover  -ml-6"
 
/></div>
<div className="relative overflow-hidden">
           {/* Right Dots */}
         <img
          src="assets/icons/soldeskframe.svg"
          alt="dots right"
         className="hidden xl:block absolute right-0 top-[210%]  object-cover -mr-5"
  /> </div>
  <div className="relative z-10">
          <FunctionnalityInvoice/>
          </div>
           </section>
           <section className=" bg-cover bg-no-repeat xl:px-10 lg:px-8 -mt-2 md:pt-12 bg-gray-50 md:px-4">
                <VerifidsnPlusFooter />
              </section>   
       </main>
  )
}

export default SolwayInvoice