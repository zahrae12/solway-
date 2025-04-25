import React from 'react'
import { useTranslation } from 'react-i18next';

const ContactHero = () => {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col xl:flex-row  md:items-center xl:items-start gap-20 lg:px-10 px-6  py-32 bg-gray-50">
        {/* Left Side */}
        <div className="flex flex-col md:w-1/2  text-wrap  ">
          <h2 className="text-2xl font-bold text-center xl:text-left xl:max-w-xl ">
           {t("N'hésitez pas à nous contacter  pour plus d'informations")}
          </h2>
          <p className="text-lg mt-4 text-gray-700 text-wrap font-medium font-inter text-center xl:text-left">
   {t("Nous sommes à votre disposition pour répondre à vos questions") }
    <span className="hidden xl:inline"><br /></span> 
   {t("et vous fournir les informations nécessaires à la réussite")} 
    <span className="hidden xl:inline"><br /></span> 
    {t("de vos projets.")}
</p>
        </div>
      
        {/* Right Side */}
        <div className="-mt-6 xl:mt-0  ">
        <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-4 lg:p-10 lg:pl-10 ">
                <form className="space-y-4 lg:w-[523px] lg:h-[640px] w-[100%] ">
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
                        <label className="block text-gray-700 font-medium mb-2">{t("Téléphone")}</label>
                        <input type="tel" className="border p-2 w-full rounded border-gray-400" />
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">{t("Fonction")}</label>
                            <input type="text" className="border p-2 w-full rounded border-gray-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">{t("Société")}</label>
                            <input type="text" className="border p-2 w-full rounded border-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Objet")}</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">{t("Votre Message")}</label>
                        <textarea className="border p-2 w-full rounded h-24 border-gray-400"></textarea>
                    </div>

                    <button className="bg-yellow-500 flex text-white p-2   lg:rounded lg:w-[90px] w-full rounded-md justify-center items-center mt-2 ">{t("Envoyer")}</button>
                </form>
            </div>
            </div>
      </section>
      
    )
}
export default ContactHero;
