import React from 'react';


const SolutionsCard = ({ label, subtext,img }) => {
  // Replace occurrences of 'SOLWAY' with <strong> tag to make it bold
  

  return (
    <div className="bg-white shadow-lg rounded-lg p-12 text-center">
    <img src={img} alt="" className="h-[246px] w-[336px]" />
    <h3 className="text-xl font-bold mt-4">{label}</h3>
    <p className="text-gray-600 mt-4 text-sm">{subtext}</p>
  </div>
  );
};

export default SolutionsCard;
