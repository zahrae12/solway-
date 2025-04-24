import React from 'react';
import { useTranslation } from 'react-i18next';

const SolutionsCard = ({ label, subtext, img }) => {
  const { t } = useTranslation();

  // Get translated text for the label and subtext
  const translatedLabel = t(`solutions.${label}.label`);
  const translatedSubtext = t(`solutions.${label}.subtext`);

  // Replace occurrences of 'SOLWAY' with <strong> tag to make it bold
  const boldedSubtext = translatedSubtext.replace(/SOLWAY/g, '<strong>SOLWAY</strong>');

  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-6 md:p-6 p-8 text-center">
      <img src={img} alt={translatedLabel} className="h-auto w-auto mx-auto" />
      <h3 className="text-xl font-bold mt-4">{translatedLabel}</h3>
      <p
        className="text-gray-600 mt-4 text-sm"
        dangerouslySetInnerHTML={{ __html: boldedSubtext }}
      />
    </div>
  );
};

export default SolutionsCard;
