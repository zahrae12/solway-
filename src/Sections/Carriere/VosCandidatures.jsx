import React from 'react'

const VosCandidatures = () => {
  return (
    <section className="flex flex-col xl:flex-row  md:items-center xl:items-start gap-20 lg:px-10 px-6  pt-32 pb-12 bg-gray-50">
    {/* Left Side */}
    <div className="flex flex-col md:w-1/2  text-wrap  ">
      <h2 className="text-[30px] font-bold text-center xl:text-left xl:max-w-lg ">
      SOLWAY Recrute Déposez votre candidature
      </h2>
      <p className="text-[16px] mt-4 text-gray-700  font-inter text-center xl:text-left">
      Train people well enough so they can leave. <br/>Treat them well enough so they don't want to.
</p>
    </div>
  
    {/* Right Side */}
    <div className="-mt-6 xl:mt-0  ">
    <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-4 lg:p-10 lg:pl-10 ">
            <form className="space-y-4 lg:w-[523px] lg:h-[640px] w-[100%] ">
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

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email (requis)</label>
                    <input type="email" className="border p-2 w-full rounded border-gray-400" required />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Poste (requis)</label>
                    <input type="tel" className="border p-2 w-full rounded border-gray-400" />
                </div>

                
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Niveau d'expérience : (requis)</label>
                        <input type="text" className="border p-2 w-full rounded border-gray-400" placeholder='Stage' />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Veuillez joindre votre CV (requis)</label>
                        <input type="file" className="border p-2 w-full rounded border-gray-400" placeholderNo file selected/>
                    </div>
               

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Votre Message</label>
                    <textarea className="border p-2 w-full rounded h-24 border-gray-400"></textarea>
                </div>

                <button className="bg-yellow-500 flex text-white p-2   lg:rounded lg:w-auto w-full rounded-md justify-center items-center mt-2 ">Envoyer ma candidature</button>
            </form>
        </div>
        </div>
  </section>
  )
}

export default VosCandidatures