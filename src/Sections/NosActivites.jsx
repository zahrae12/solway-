import React from 'react'
import { activités } from '../constants'
import ActivityCard from '../Components/ActivityCard'
import { useTranslation } from 'react-i18next';
const NosActivites = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full md:px-4 lg:px-8 px-5 xl:padding pt-4 flex flex-col xl:flex-row items-center  xl:items-start xl:gap-10 xl:-mt-24  text-center  ">
  {/* Left Section */}
  <div className="flex flex-col justify-end xl:items-start md:items-center xl:mt-0  xl:w-2/3 w-full pb-10 text-base/8 -mt-16 xl:-ml-4 ">
    <h2 className="text-[16px] font-inter font-extrabold text-yellow-500  leading-[24px] mt-20  ">
      Everything you need
    </h2>
    <h1 className="text-3xl font-extrabold leading-[36px] mt-1   ">
     {t("Nos activités")}
    </h1>
    <p className="text-lg font-medium xl:text-left text-center mt-4 text-gray-600   leading-normal">
      {t("Notre ambition est de vous servir tout en mettant en œuvre les meilleures pratiques issues du savoir-faire acquis au cours des nombreux projets réalisés pour différents clients.")}
    </p>
  </div>

  {/* Right Section */}
  <div className="xl:w-3/2 w-full mt-0 xl:mt-16 shadow-md rounded-md ">
    <div className="bg-white grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 ">
      {activités.map((activity) => (
        <ActivityCard key={activity.label} {...activity} />
      ))}
    </div>
  </div>
</section>

  )
}

export default NosActivites;
