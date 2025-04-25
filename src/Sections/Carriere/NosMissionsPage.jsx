import React from 'react'
import { useTranslation } from 'react-i18next';
const NosMissionsPage = () => {
    const {t} =useTranslation();
  return (
    <section className="flex flex-col xl:flex-row  md:items-center xl:items-start gap-20 lg:px-10   py-32 bg-gray-50">
    {/* Left Side */}
    <div className="flex flex-col md:w-1/2  text-wrap  px-12 md:px-0">
      <h2 className="text-[30px] font-bold text-center xl:text-left md:max-w-lg max-w-xs leading-tight   ">
      SOLWAY <br/> {t("Nos Missions")} <br/>{t("Déposez votre candidature")}
      </h2>
      <p className="text-[16px] mt-4 text-gray-700  font-inter text-center xl:text-left">
      {t("Pour les missions à pourvoir chez nos clients")}
</p>
    </div>
  
    {/* Right Side */}
    <div className="-mt-6 xl:mt-0 px-6 md:px-0">
    <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-4 lg:p-10 lg:pl-10 ">
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

                <div>
                    <label className="block text-gray-700 font-medium mb-2">{t("Email (requis)")}</label>
                    <input type="email" className="border p-2 w-full rounded border-gray-400" required />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">{t("Mission - voir notre page Linkedin (requis)")}</label>
                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        >
                       <option value="">{t("-- Veuillez choisir une option --")}</option>
                       <option value="stage">CEO</option>
                       <option value="cdI">MANAGER</option>
                       <option value="cdd">Inginner </option>
        </select>
                </div>

                
                    <div>
                    <label className="block text-gray-700 font-medium mb-2">{t("Niveau d'expérience : (requis)")}</label>
                        <select type="text" className="border p-2 w-full rounded border-gray-400" placeholder='' >
                        <option value="">{t("-- Veuillez choisir une option --")}</option>
                       <option value="stage">0-1</option>
                       <option value="cdI">{t("+3 ans")}</option>
                       <option value="cdd">{t("+5 ans")} </option>
        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("TJM (requis)")}</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholder="No file selected"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Disponible à partir de (requis)")}</label>
                        <input type="Date" className="border p-2 w-full rounded border-gray-400" placeholde="mm/dd/yyyy"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Veuillez joindre votre CV (requis)")}</label>
                        <input type="file" className="border p-2 w-full rounded border-gray-400" placeholde="No file selected"/>
                    </div>
               
                <div>
                    <label className="block text-gray-700 font-medium mb-2">{t("Votre Message")}</label>
                    <textarea className="border p-2 w-full rounded h-24 border-gray-400"></textarea>
                </div>

                <button className="bg-yellow-500 flex text-white p-2   lg:rounded lg:w-auto w-3/4 rounded-md justify-center items-center mt-2 ">{t("Envoyer ma candidature")}</button>
            </form>
        </div>
        </div>
  </section>
  )
}

export default NosMissionsPage