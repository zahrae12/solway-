import React from 'react'
import { useTranslation } from 'react-i18next';
export const EngagementSection = () => {
  const {t} = useTranslation();
  return (
    <section className=" xl:px-2 lg:px-4 py-8 md:-mt-16 xl:mt-1 -mt-12">
       
      

    <div className="  rounded-lg  overflow-hidden ">
      {/* Background Dots */}
      
      <h2 className="md:text-3xl font-bold text-black text-center lg:-mt-4  text-[24px]  px-6  mt-4">
        {t("Engagement Solidaire de SOLWAY pour un Maroc Inclusif")}
      </h2>
      <div className="grid md:grid-cols-3 px-8 mt-6 gap-4 xl:mt-16 ">
        <div className="border border-green-400 p-8 rounded-lg text-center bg-white max-w-auto h-50 flex flex-col justify-center items-center">
          <img src="assets/icons/Vector.png" alt="Future Opportunities" className="mx-auto w-12 h-12 mb-2" />
          <h3 className="text-green-600 font-bold">{t("Perspectives d'Avenir pour")} <br/>{t("les Enfants")}</h3>
          <p className="text-gray-700 mt-2">{t("Offrir des opportunités aux enfants")}<br/>{t("défavorisés")}.</p>
        </div>
        <div className="border border-green-400 p-8 rounded-lg text-center bg-white  max-w-auto h-auto  flex flex-col justify-center items-center">
          <img src="assets/icons/donation.png" alt="Financial Support" className="mx-auto w-12 h-12 mb-2" />
          <h3 className="text-green-600 font-bold">{t("Soutien Financier pour")}<br/> {t("la Dignité")}</h3>
          <p className="text-gray-700 mt-2">{t("Garantir des conditions de vie dignes par un soutien financier.")}</p>
        </div>
        <div className="border border-green-400 p-8 rounded-lg text-center bg-white  max-w-auto h-auto  flex flex-col justify-center items-center">
          <img src="assets/icons/cap.png" alt="Accessible Education" className="mx-auto w-12 h-12 mb-2" />
          <h3 className="text-green-600 font-bold">{t("Éducation Accessible pour")}<br/> {t("Tous")}</h3>
          <p className="text-gray-700 mt-2">{t("Faciliter l'accès à l'éducation et à des ressources pédagogiques.")}</p>
        </div>
      </div>
     
    </div>
    
    </section>
  )
}
