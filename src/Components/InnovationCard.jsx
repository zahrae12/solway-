import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const InnovationCard = ({ label, subtext }) => {
  // Replace occurrences of 'SOLWAY' with <strong> tag to make it bold
  const boldedText = subtext
    .replace(/SOLWAY/g, '<strong>SOLWAY</strong>')
    .split("\n") // Split the text into lines where there are newlines
    .join("<br />"); // Join them with <br /> tags for line breaks

  return (
    <div className="">
      <div className="">
        <h3 className="text-2xl font-extrabold leading-6 -mt-8 -ml-8 text-base/1 tracking-wider">{label}</h3>
      </div>
      <p
        className="mt-4  font-medium text-base/9 leading-[24px] -ml-8 text-gray-700 tracking-wide "
        dangerouslySetInnerHTML={{ __html: boldedText }}
      />
      <div className="mt-4 flex items-center text-yellow-500 cursor-pointer -ml-8">
        <span className="mr-2 font-extrabold mt-2">Discover</span>
        <FaArrowRight size={20} className='-mb-4' />
      </div>
    </div>
  );
};

export default InnovationCard;
