import React from 'react'
import { useTranslation } from 'react-i18next';
export const VosMissionsPage = () => {
    const {t} =useTranslation();
  return (
    <section className="flex flex-col xl:flex-row  md:items-center xl:items-start gap-20 md:px-10   py-32 bg-gray-50">
    {/* Left Side */}
    <div className="flex flex-col md:w-1/2  text-wrap px-12 md:px-0 ">
      <h2 className="text-[30px] font-bold text-center xl:text-left md:max-w-lg leading-tight  ">
      SOLWAY <br/> {t("Vos Missions")}
      </h2>
      <p className="text-[16px] mt-4 text-gray-700  font-inter text-center xl:text-left md:max-w-lg">
     {t("Déposez vos propositions de missions,")}<br/>{t("Nous nous occupons du reste")}
</p>
    </div>
  
    {/* Right Side */}
    <div className="-mt-6 xl:mt-0 px-6 ">
    <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-4 md:p-10 md:pl-10 ">
            <form className="space-y-4 md:w-[523px] md:h-auto w-[100%] ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Nom (requis)")}</label>
                        <input type="text" className="border border-gray-400 p-2 w-full rounded" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Prénom (requis)")}</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">{t("Société (requis)")}</label>
                    <input type="email" className="border p-2 w-full rounded border-gray-400" required />
                </div>
                 <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Email (requis)")}</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400"  />
                    </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Vos Missions")}</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Niveau d'expérience : (requis)")} </label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholde="mm/dd/yyyy"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("TJM (requis)")}</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholde=""/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("A pouvoir à partir de")}</label>
                        <input type="Date" className="border p-2 w-full rounded border-gray-400" placeholde="mm/dd/yyyy"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("durée de la mission en mois")}</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholde=""/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("localisation")}</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholde=""/>
                    </div>
                    <div>
                    <label className="block">{t("Mode de travail")}</label>
                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" placeholde="-Please choose an option-">
                   <option value="">{t("-- Veuillez choisir une option --")}</option>
                   <option value="stage">{t("Sur site")}</option>
                   <option value="cdI">{t("à distance")}</option>
                   <option value="cdd">{t("hybride")}</option>
                </select>
      
                  </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Fiche de poste")}</label>
                        <input type="file" className="border p-2 w-full rounded border-gray-400" placeholde="No file selected"/>
                    </div>
               
                <div>
                    <label className="block text-gray-700 font-medium mb-2">{t("Votre Message")}</label>
                    <textarea className="border p-2 w-full rounded h-24 border-gray-400"></textarea>
                </div>

                <button className="bg-yellow-500  text-white p-2   lg:rounded lg:w-[198px] lg:py-3  w-full rounded-md flex justify-center items-center mt-2 ">{t("Envoyer ma candidature")}</button>
            </form>
        </div>
        </div>
  </section>
  )
}
