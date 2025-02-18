import React from "react";
import { FaArrowRight } from "react-icons/fa";

const InnovationCard = ({ label, subtext }) => {
  const boldedText = subtext.replace(/SOLWAY/g, "<strong>SOLWAY</strong>");

  return (
    <div className="p-4">
    
      <h3 className="text-xl md:text-2xl font-extrabold tracking-wider">{label}</h3>

    
      <p
        className="mt-2 text-base leading-[24px] text-gray-700"
        dangerouslySetInnerHTML={{ __html: boldedText }}
      />

      {/* Discover Button */}
      <div className="mt-4 flex items-center text-yellow-500 cursor-pointer">
        <span className="font-extrabold text-sm md:text-base">Discover</span>
        <FaArrowRight size={18} className="ml-2" />
      </div>
    </div>
  );
};

export default InnovationCard;
