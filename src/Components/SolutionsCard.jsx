import React from 'react';


const SolutionsCard = ({ label, subtext,img }) => {
  // Replace occurrences of 'SOLWAY' with <strong> tag to make it bold
  

  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-6 md:p-6 p-8 text-center  ">
    <img src={img} alt="" className="h-auto w-auto mx-auto" />
    <h3 className="text-xl font-bold mt-4">{label}</h3>
    <p className="text-gray-600 mt-4 text-sm">{subtext}</p>
  </div>
  );
};

export default SolutionsCard;
