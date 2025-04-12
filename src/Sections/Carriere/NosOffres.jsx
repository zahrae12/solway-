import React from 'react';
import { CalendarDays, Briefcase, GraduationCap, MapPin, DollarSign, Clock } from "lucide-react";

const NosOffres = () => {
  return (
    <section className="px-4 pt-20 pb-16 bg-gray-50 overflow-hidden">
    <h1 className="text-3xl text-black font-bold text-center mt-16 md:mt-20">
      Nos offres d'emploi
    </h1>

    <div className="mt-6 bg-white max-w-7xl mx-auto rounded-2xl shadow-md p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Job Interview section */}
      <div className="order-2 md:order-1 md:col-span-2 relative">
        <div className="flex lg:flex-row flex-col justify-between items-start">
          <h2 className="text-2xl font-semibold mb-4">
            ERP SAP Ressource humaine (H/F)
          </h2>
          <div className="lg:ml-auto">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-8 rounded">
              Postulez
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-inter text-[18px] mb-2">Description du poste</h3>
          <p className="mt-4 font-inter text-[16px]">
            Dans le cadre du développement de notre activité interne, nous recherchons
            un(e) stagiaire motivé(e) par le monde des ERP. Ce poste va permettre
            d’acquérir des compétences technique et fonctionnelle autour du module SAP HR.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-inter text-[18px] mb-2">Vous allez participer :</h3>
          <ul className="mt-4 font-inter text-[16px] list-disc list-inside space-y-1">
            <li>Au développement de nos solutions spécifiques SAP HR.</li>
            <li>
              À la prise en charge de nos activités de TMA (Tierce Maintenance
              Applicative) afin d’analyser et répondre aux besoins de nos clients.
            </li>
            <li>À nos prospections commerciales</li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="font-inter text-[18px] mb-2">Profil</h3>
          <ul className="mt-4 font-inter text-[16px] list-disc list-inside space-y-1">
            <li>De formation au moins Bac+5.</li>
            <li>Vous parlez couramment le français.</li>
            <li>Idéalement des connaissances en développement informatique.</li>
            <li>Idéalement des connaissances sur l'architecture SAP.</li>
          </ul>
        </div>

        <div className="mt-12 mb-4">
          <h3 className="font-inter text-[18px] mb-2">Avantage</h3>
          <ul className="mt-4 font-inter text-[16px] list-disc list-inside space-y-1">
            <li>
              Formation technique (ABAP) et fonctionnelle tout au long du stage avec des
              objectifs à court et à long terme.
            </li>
            <li>Prise en charge de 100% du titre de transport.</li>
            <li>Rémunération selon profil.</li>
          </ul>
        </div>
      </div>

      {/* Sidebar Details */}
      <div className="lg:mt-24 order-1 md:order-2 bg-white border border-gray-200 rounded-xl shadow-sm space-y-4 text-sm">
        <h1 className="mt-4 ml-4 font-inter text-[20px]">Job Interview</h1>
        <div className="mt-6 bg-white p-6 text-sm grid grid-cols-2 gap-4">
          <div>
            <CalendarDays className="w-6 h-6 text-yellow-500 mb-1" />
            <div className="text-gray-500 font-inter text-[12px]">EMPLOI POSTED:</div>
            <div className="font-inter">13/06/2022</div>
          </div>
          <div>
            <CalendarDays className="w-6 h-6 text-yellow-500 mb-1" />
            <div className="text-gray-700 font-semibold">Expire le:</div>
            <div>13/10/2022</div>
          </div>
          <div>
            <Briefcase className="w-6 h-6 text-yellow-500 mb-1" />
            <div className="text-gray-700 font-semibold">Type:</div>
            <div>Stage</div>
          </div>
          <div>
            <GraduationCap className="w-6 h-6 text-yellow-500 mb-1" />
            <div className="text-gray-700 font-semibold">Éducation:</div>
            <div>Bac+5</div>
          </div>
          <div>
            <Clock className="w-6 h-6 text-yellow-500 mb-1" />
            <div className="text-gray-700 font-semibold">Expérience:</div>
            <div>1-5 ans</div>
          </div>
          <div>
            <MapPin className="w-6 h-6 text-yellow-500 mb-1" />
            <div className="text-gray-700 font-semibold">Localisation:</div>
            <div>Rabat</div>
          </div>
          <div>
            <DollarSign className="w-6 h-6 text-yellow-500 mb-1" />
            <div className="text-gray-700 font-semibold">Salaire:</div>
            <div>$100-300/month</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NosOffres;
