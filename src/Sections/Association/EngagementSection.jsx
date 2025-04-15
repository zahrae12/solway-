import React from 'react'

export const EngagementSection = () => {
  return (
    <section className=" xl:px-2 lg:px-4 py-8">
       
      

    <div className="  rounded-lg  overflow-hidden ">
      {/* Background Dots */}
      
      <h2 className="md:text-3xl font-bold text-black text-center lg:-mt-4  text-[24px]  px-6  mt-4">
        Engagement Solidaire de SOLWAY pour un Maroc Inclusif
      </h2>
      <div className="grid md:grid-cols-3 px-8 mt-6 gap-4 ">
        <div className="border border-green-400 p-8 rounded-lg text-center bg-white max-w-auto h-50 flex flex-col justify-center items-center">
          <img src="assets/icons/Vector.png" alt="Future Opportunities" className="mx-auto w-12 h-12 mb-2" />
          <h3 className="text-green-600 font-bold">Perspectives d'Avenir pour <br/>les Enfants</h3>
          <p className="text-gray-700 mt-2">Offrir des opportunités aux enfants<br/> défavorisés.</p>
        </div>
        <div className="border border-green-400 p-8 rounded-lg text-center bg-white  max-w-auto h-auto  flex flex-col justify-center items-center">
          <img src="assets/icons/donation.png" alt="Financial Support" className="mx-auto w-12 h-12 mb-2" />
          <h3 className="text-green-600 font-bold">Soutien Financier pour<br/> la Dignité</h3>
          <p className="text-gray-700 mt-2">Garantir des conditions de vie dignes par un soutien financier.</p>
        </div>
        <div className="border border-green-400 p-8 rounded-lg text-center bg-white  max-w-auto h-auto  flex flex-col justify-center items-center">
          <img src="assets/icons/cap.png" alt="Accessible Education" className="mx-auto w-12 h-12 mb-2" />
          <h3 className="text-green-600 font-bold">Éducation Accessible pour<br/> Tous</h3>
          <p className="text-gray-700 mt-2">Faciliter l'accès à l'éducation et à des ressources pédagogiques.</p>
        </div>
      </div>
     
    </div>
    
    </section>
  )
}
