import React from 'react'
import InvoiceHero from '../Sections/SolwayInvoice/InvoiceHero'
import FunctionnalityInvoice from '../Sections/SolwayInvoice/FunctionnalityInvoice'
import VerifidsnPlusFooter from '../Sections/VerifidsnPlus/VerifidsnPlusFooter'
const SolwayInvoice = () => {
  return (
    <main>
       <section className="lg:bg-[url('/src/assets/images/MIM.png')] bg-cover bg-no-repeat px-4 xl:py-12 " >
       <InvoiceHero/>
       </section>
       <section className="lg:bg-[url('/src/assets/images/synchro.png')] bg-cover bg-no-repeat padding bg-gray-50 " >
          <FunctionnalityInvoice/>
           </section>
           <section className=" bg-cover bg-no-repeat xl:px-10 -mt-14 bg-gray-100">
                <VerifidsnPlusFooter />
              </section>   
       </main>
  )
}

export default SolwayInvoice