import React from 'react'


const ContactHero = () => {
    return (
        <section className="flex flex-col xl:flex-row  md:items-center xl:items-start gap-20 px-12 py-32">
        {/* Left Side */}
        <div className="flex flex-col md:w-1/2  text-wrap  ">
          <h2 className="text-2xl font-bold text-center xl:text-left ">
            N'hésitez pas à nous contacter  pour plus d'informations
          </h2>
          <p className="text-lg mt-4 text-gray-700 text-wrap font-medium font-inter text-center xl:text-left">
    Nous sommes à votre disposition pour répondre à vos questions 
    <span className="hidden xl:inline"><br /></span> 
    et vous fournir les informations nécessaires à la réussite 
    <span className="hidden xl:inline"><br /></span> 
    de vos projets.
</p>
        </div>
      
        {/* Right Side */}
        <div className="-mt-6 xl:mt-0 ">
        <div className="bg-white shadow-lg rounded-lg p-4 lg:pl-16">
                <form className="space-y-4 lg:w-[523px] lg:h-[590px] ">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Nom (requis)</label>
                            <input type="text" className="border p-2 w-full rounded" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Prénom (requis)</label>
                            <input type="text" className="border p-2 w-full rounded" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Email (requis)</label>
                        <input type="email" className="border p-2 w-full rounded" required />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Téléphone</label>
                        <input type="tel" className="border p-2 w-full rounded" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Fonction</label>
                            <input type="text" className="border p-2 w-full rounded" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Société</label>
                            <input type="text" className="border p-2 w-full rounded" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Objet</label>
                        <input type="text" className="border p-2 w-full rounded" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Votre Message</label>
                        <textarea className="border p-2 w-full rounded h-24"></textarea>
                    </div>

                    <button className="bg-yellow-500 flex text-white p-2  lg:rounded lg:w-[90px] w-full rounded-md justify-center items-center ">Envoyer</button>
                </form>
            </div>
            </div>
      </section>
      
    )
}
export default ContactHero;
