import React from 'react';

const ControlDsnCard = ({ label, subtext, text }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold mt-2">{label}</h3>
      <p className="text-gray-700 mt-2 text-base font-inter leading-[24px]">
        {subtext}
      </p>
      <ul className="list-disc list-outside pl-5 text-gray-700 text-lg mt-2 font-inter leading-[24px]">
        {text.map((item, index) => (
          <li key={index} className="mt-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ControlDsnCard;
