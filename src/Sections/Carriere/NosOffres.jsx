import React from 'react';

const NosOffres = () => {
  return (
    <section className="px-6 pt-20 pb-16 bg-gray-50 overflow-hidden">
      <h1 className="text-3xl text-black font-bold text-center mt-16 md:mt-10">
        Nos offres d'emploi
      </h1>

      <div className="mt-8 bg-white max-w-7xl mx-auto rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job Title + Button */}
        <div className="order-1 md:col-span-3 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <h2 className="text-2xl font-semibold">ERP SAP Ressource humaine (H/F)</h2>
          <div className="w-full lg:w-auto flex md:justify-end justify-center">
            <button className="bg-yellow-500 text-white w-[298px]  md:w-[115px] py-2 rounded hover:bg-yellow-600 mt-4 md:mt-0">
              Postuler
            </button>
          </div>
        </div>

        {/* Job Interview Card */}
        <div className="order-2 md:order-3 bg-white border border-gray-200 rounded-lg shadow-sm p-6 mt-8 lg:mt-0 space-y-4 text-sm self-start">
          <h2 className="text-xl font-semibold mb-4">Job Interview</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <img src="assets/icons/CalendarBlank.svg" alt="Calendar" className="w-6 h-6 mb-2" />
              <div className="text-gray-500 text-xs">EMPLOI POSTED:</div>
              <div>13/06/2025</div>
            </div>
            <div>
              <img src="assets/icons/Timer.svg" alt="Timer" className="w-6 h-6 mb-2" />
              <div className="text-gray-500 text-xs">EMPLOI EXPIRE ON:</div>
              <div>13/10/2025</div>
            </div>
            <div>
              <img src="assets/icons/briefcase.svg" alt="Type" className="w-6 h-6 mb-2" />
              <div className="text-gray-500 text-xs">JOB TYPE:</div>
              <div>Stage</div>
            </div>
            <div>
              <img src="assets/icons/briefcase.svg" alt="Education" className="w-6 h-6 mb-2" />
              <div className="text-gray-500 text-xs">EDUCATION:</div>
              <div>Bac+5</div>
            </div>
            <div>
              <img src="assets/icons/briefcase.svg" alt="Experience" className="w-6 h-6 mb-2" />
              <div className="text-gray-500 text-xs">EXPERIENCE:</div>
              <div>1-5 years</div>
            </div>
            <div>
              <img src="assets/icons/MapPinLine.svg" alt="Location" className="w-6 h-6 mb-2" />
              <div className="text-gray-500 text-xs">LOCATION:</div>
              <div>Rabat</div>
            </div>
            <div>
              <img src="assets/icons/Wallet.svg" alt="Salary" className="w-6 h-6 mb-2" />
              <div className="text-gray-500 text-xs">SALARY:</div>
              <div>$100-300/month</div>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="order-3 md:order-2 md:col-span-2">
          <div className="mt-12">
            <h3 className="text-[18px] mb-2 font-semibold">Description du poste</h3>
            <p className="mt-4 text-[16px]">
              Dans le cadre du développement de notre activité interne, nous recherchons un(e) stagiaire motivé(e)
              par le monde des ERP. Ce poste va permettre d’acquérir des compétences techniques et fonctionnelles autour du module SAP HR.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-[18px] mb-2 font-semibold">Vous allez participer :</h3>
            <ul className="mt-4 text-[16px] list-disc list-inside space-y-1">
              <li>Au développement de nos solutions spécifiques SAP HR.</li>
              <li>À la prise en charge de nos activités de TMA (Tierce Maintenance Applicative).</li>
              <li>À nos prospections commerciales.</li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-[18px] mb-2 font-semibold">Profil</h3>
            <ul className="mt-4 text-[16px] list-disc list-inside space-y-1">
              <li>De formation au moins Bac+5.</li>
              <li>Vous parlez couramment le français.</li>
              <li>Idéalement des connaissances en développement informatique.</li>
              <li>Idéalement des connaissances sur l'architecture SAP.</li>
            </ul>
          </div>

          <div className="mt-12 mb-4">
            <h3 className="text-[18px] mb-2 font-semibold">Avantage</h3>
            <ul className="mt-4 text-[16px] list-disc list-inside space-y-1">
              <li>Formation technique (ABAP) et fonctionnelle tout au long du stage.</li>
              <li>Prise en charge de 100% du titre de transport.</li>
              <li>Rémunération selon profil.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosOffres;
