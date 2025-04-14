import React from 'react'

export const VosMissionsPage = () => {
  return (
    <section className="flex flex-col xl:flex-row  md:items-center xl:items-start gap-20 lg:px-10 px-6  py-32 bg-gray-50">
    {/* Left Side */}
    <div className="flex flex-col md:w-1/2  text-wrap  ">
      <h2 className="text-[30px] font-bold text-center xl:text-left lg:max-w-lg   ">
      SOLWAY <br/> Vos Missions 
      </h2>
      <p className="text-[16px] mt-4 text-gray-700  font-inter text-center xl:text-left lg:max-w-xs">
      Déposez vos propositions de missions,<br/>Nous nous occupons du reste
</p>
    </div>
  
    {/* Right Side */}
    <div className="-mt-6 xl:mt-0  ">
    <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-4 lg:p-10 lg:pl-10 ">
            <form className="space-y-4 lg:w-[523px] lg:h-auto w-[100%] ">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Nom (requis)</label>
                        <input type="text" className="border border-gray-400 p-2 w-full rounded" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Prénom (requis)</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" required />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Société (requis)</label>
                    <input type="email" className="border p-2 w-full rounded border-gray-400" required />
                </div>
                 <div>
                        <label className="block text-gray-700 font-medium mb-2">Email (requis)</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholder='Stage' />
                    </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Vos Missions</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholder="No file selected"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Niveau d'expériences: </label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholde="mm/dd/yyyy"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">JTM (requis)</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholde=""/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">A pouvoir à partir de</label>
                        <input type="Date" className="border p-2 w-full rounded border-gray-400" placeholde="mm/dd/yyyy"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">durée de la mission en mois</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholde=""/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">localisation</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholde=""/>
                    </div>
                    <div>
                    <label className="block">Mode de travail</label>
                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" placeholde="-Please choose an option-">
                   <option value="">-- Select --</option>
                   <option value="stage">On site</option>
                   <option value="cdI">remote</option>
                   <option value="cdd">hybrid</option>
                </select>
      
                  </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Fiche de poste</label>
                        <input type="file" className="border p-2 w-full rounded border-gray-400" placeholde="No file selected"/>
                    </div>
               
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Votre Message</label>
                    <textarea className="border p-2 w-full rounded h-24 border-gray-400"></textarea>
                </div>

                <button className="bg-yellow-500 flex text-white p-2   lg:rounded lg:w-auto w-3/4 rounded-md justify-center items-center mt-2 ">Envoyer ma candidature</button>
            </form>
        </div>
        </div>
  </section>
  )
}
