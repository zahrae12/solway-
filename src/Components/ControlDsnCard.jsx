import React from 'react';
import { useTranslation } from 'react-i18next';

const ControlDsnCard = ({ label, subtext, text }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold xl:-mt-20">{t(label)}</h3>
      <p className="text-gray-700 mt-2 text-base font-inter leading-[24px]">
        {t(subtext)}
      </p>
      <ul className="list-disc list-outside pl-5 text-gray-700 text-lg mt-2 font-inter leading-[24px]">
        {text.map((item, index) => (
          <li key={index} className="mt-1">{t(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ControlDsnCard;
