import React from 'react';
import { useTranslation } from 'react-i18next';

const ActivityCard = ({ label }) => {
  const { t } = useTranslation();
  const translatedLabel = t(`activities.${label}.label`);
  const translatedSubtext = t(`activities.${label}.subtext`);
  const boldedText = translatedSubtext.replace(/SOLWAY/g, '<strong>SOLWAY</strong>');

  return (
    <div className="bg-white p-4 mt-0">
      <div className="flex items-center">
        <img src="assets/icons/Check.svg" alt="Check Icon" className="mr-2" />
        <h3 className="text-xl font-extrabold">{translatedLabel}</h3>
      </div>
      <p
        className="mt-4 ml-4 font-normal text-wrap text-left text-gray-600"
        dangerouslySetInnerHTML={{ __html: boldedText }}
      />
    </div>
  );
};

export default ActivityCard;
