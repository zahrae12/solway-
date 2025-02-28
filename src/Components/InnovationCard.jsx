import React from "react";
import { FaArrowRight } from "react-icons/fa";

const InnovationCard = ({ label, subtext }) => {
  const boldedText = subtext.replace(/SOLWAY/g, "<strong>SOLWAY</strong>");

  return (
    <div className="p">
    
      <h3 className="text-xl lg:text-left text-center md:text-2xl font-extrabold tracking-wider">{label}</h3>

    
      <p
        className="mt-2 text-base leading-[24px] text-gray-700 lg:text-left text-center"
        dangerouslySetInnerHTML={{ __html: boldedText }}
      />

      {/* Discover Button */}
      <div className="mt-8 flex items-center lg:text-yellow-500 text-black  cursor-pointer">
        <span className="font-extrabold text-sm md:text-base ">Decouvrir</span>
        <FaArrowRight size={18} className="ml-2 mt-2" />
      </div>
    </div>
  );
};

export default InnovationCard;
