import React from 'react'

const NosMissionsPage = () => {
  return (
    <section className="flex flex-col xl:flex-row  md:items-center xl:items-start gap-20 lg:px-10   py-32 bg-gray-50">
    {/* Left Side */}
    <div className="flex flex-col md:w-1/2  text-wrap  px-12 md:px-0">
      <h2 className="text-[30px] font-bold text-center xl:text-left md:max-w-lg max-w-xs leading-tight   ">
      SOLWAY <br/> Nos Missions <br/>Déposez votre candidature
      </h2>
      <p className="text-[16px] mt-4 text-gray-700  font-inter text-center xl:text-left">
      Pour les missions à pourvoir chez nos clients
</p>
    </div>
  
    {/* Right Side */}
    <div className="-mt-6 xl:mt-0 px-6 md:px-0">
    <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-4 lg:p-10 lg:pl-10 ">
            <form className="space-y-4 md:w-[523px] md:h-auto w-[100%] ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Nom (requis)</label>
                        <input type="text" className="border border-gray-400 p-2 w-full rounded" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Prénom (requis)</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" required />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email (requis)</label>
                    <input type="email" className="border p-2 w-full rounded border-gray-400" required />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Mission - voir notre page Linkedin (requis)</label>
                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        >
                       <option value="">-- Verillez Choisir une option --</option>
                       <option value="stage">CEO</option>
                       <option value="cdI">MANAGER</option>
                       <option value="cdd">Inginner </option>
        </select>
                </div>

                
                    <div>
                    <label className="block text-gray-700 font-medium mb-2">Niveau d'expérience : (requis)</label>
                        <select type="text" className="border p-2 w-full rounded border-gray-400" placeholder='' >
                        <option value="">-- Veuillez Choisir une option --</option>
                       <option value="stage">0-1</option>
                       <option value="cdI">+3 ans</option>
                       <option value="cdd">+5 ans </option>
        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">TJM (requis)</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholder="No file selected"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Disponible à partir de (requis)</label>
                        <input type="Date" className="border p-2 w-full rounded border-gray-400" placeholde="mm/dd/yyyy"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Veuillez joindre votre CV (requis)</label>
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

export default NosMissionsPage