import React, { useState } from "react";
import { innovations } from "../constants";
import InnovationCard from "../Components/InnovationCard";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const NosInnovations = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("VERIF'DSN");

  const handleDiscoverClick = () => {
    switch (activeTab) {
      case "VERIF'DSN":
        navigate("/verifi-dsn");
        break;
      case "VERIFI'DSN PLUS":
        navigate("/verifi-dsn-plus");
        break;
      case "SOLWAY Synchronisation HR":
        navigate("/solway-synchronisation-hr");
        break;
      default:
        break;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "VERIF'DSN":
        return (
          <>
            <div className="w-auto md:w-1/2 flex flex-col  ">
              <h2 className="text-xl font-bold mb-2">VERIF'DSN</h2>
              <p>
                {t("VERIF’DSN est un outil SAP qui permet de contrôler vos blocs DSN avant de les envoyer aux organismes de protection sociale et administrations. C’est un outil facile, intuitif et très apprécié par les gestionnaires de paie. N’hésitez pas à nous contacter pour avoir plus d’informations ou pour demander un essai gratuit.")}
              </p>
              <div className="mt-8 flex items-center lg:text-yellow-500 text-black cursor-pointer"
              onClick={handleDiscoverClick}>
                <span className="font-extrabold text-sm md:text-base">
                  {t("Decouvrir")}
                </span>
                <FaArrowRight size={18} className="ml-2 mt-2" />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                className="w-80 md:w-96 lg:w-[450px] h-56 md:h-64 lg:h-[300px] object-cover rounded-2xl"
                src="assets/images/image 5.png"
                alt="VERIF'DSN"
              />
            </div>
          </>
        );

      case "VERIFI'DSN PLUS":
        return (
          <>
            <div className="w-auto md:w-1/2 flex flex-col  ">
              <h2 className="text-xl font-bold mb-2">VERIF'DSN PLUS</h2>
              <p>
              {t("VERIF’DSN PLUS est un outil complémentaire de VERIF’DSN qui permet de contrôler votre DSN sur plusieurs périodes de paie. Cela vous permettra de réaliser facilement et rapidement des contrôles trimestriels, semestriels ou annuels de vos cotisations. Pour plus d’informations, veuillez nous contacter, nous serons ravis de répondre à vos interrogations.")}
              </p>
              <div className="mt-8 flex items-center lg:text-yellow-500 text-black cursor-pointer"
              onClick={handleDiscoverClick}>
                <span className="font-extrabold text-sm md:text-base">
                {t("Decouvrir")}
                </span>
                <FaArrowRight size={18} className="ml-2 mt-2" />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                className="w-80 md:w-96 lg:w-[450px] h-56 md:h-64 lg:h-[300px] object-cover rounded-2xl"
                src="assets/images/image 5.png"
                alt="VERIF'DSN"
              />
            </div>
          </>
        );

      case "SOLWAY Synchronisation HR":
        return (
          <section className=" ">
          <div className="bg-white p-6 rounded-md shadow-lg text-center max-w-md ">
            <h2 className="text-xl text-left font-bold mb-2">
              {t("SOLWAY Synchronisation HR")}
            </h2>
            <p className="text-gray-700 text-left">
              {t("SOLWAY Synchronisation HR est notre solution pour automatiser la synchronisation des données RH en toute sécurité.")}
            </p>
            <div className="mt-4 flex items-center lg:text-yellow-500 text-black cursor-pointer"
             onClick={handleDiscoverClick}>
                <span className="font-extrabold text-sm md:text-base">
                {t("Decouvrir")}
                </span>
                <FaArrowRight size={18} className="ml-2 mt-2" />
              </div>
          </div>
          </section>
        );

      default:
        return null;
    }
  };

  const buttonClass = (label) =>
    `py-3 px-18 md:py-2  rounded-lg font-semibold w-full  text-center border ${
      activeTab === label
        ? "bg-yellow-500 text-white"
        : "bg-white border-gray-300 text-black"
    }`;
  

  return (
    <section className="py-6  px-4 md:px-4 lg:px-8">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold">{t("Nos Innovations")}</h1>
        <p className="text-lg font-medium leading-6 text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
          <br className="hidden md:block" />
          sit phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
        {["VERIF'DSN", "VERIFI'DSN PLUS", "SOLWAY Synchronisation HR"].map(
          (label) => (
            <button
              key={label}
              className={buttonClass(label)}
              onClick={() => setActiveTab(label)}
            >
              {t(label)}
            </button>
          )
        )}
      </div>

      {/* Content Section */}
      {activeTab === "SOLWAY Synchronisation HR" ? (
        <div className="flex justify-center items-center mt-10">
          {renderContent()}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row bg-white p-6 rounded-2xl shadow-lg gap-6 md:gap-10 mt-10 py-6">
          {renderContent()}
        </div>
      )}
    </section>
  );
};

export default NosInnovations;
