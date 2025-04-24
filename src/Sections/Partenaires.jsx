import React from 'react'
import LogosCard from "../assets/images/LogosCard.png";
import { useTranslation } from 'react-i18next';
const Partenaires = () => {
  const { t } = useTranslation();
  return (
    <section className="-mt-16 xl:px-6 py-4 md:mt-4 mt-2 ">
      <div className="w-auto flex flex-col xl:flex-row items-center gap-6 xl:gap-20 xl:-mr-8 xl:-ml-8 ">
        
        {/* Title */}
        <h2 className="text-[36px]  text-3xl font-extrabold leading-[40px] px-12 text-black mt-2 lg:mt-0
                       text-center md:text-center lg:text-left sm:whitespace-normal md:whitespace-nowrap">
          {t("Ils nous font")} <br className="block lg:hidden" /> {t("confiance")}
        </h2>

        {/* Logos Container */}
        <div className="rounded-lg xl:p-6 flex justify-center xl:justify-end pt-2 xl:ml-auto xl:mr-4 p-4">
          <img
            src={LogosCard}
            alt="Partenaires"
            className="xl:w-auto xl:h-auto object-contain "
          />
        </div>

      </div>
    </section>
  );
}

export default Partenaires;
