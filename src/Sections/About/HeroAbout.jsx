import React from "react";

const HeroAbout = () => {
   
   
      return (
        <section className="w-full flex flex-col md:flex-row items-center lg:gap-12 gap-20">
  {/* Left Side */}
  <div className="flex flex-col xl:px-8  xl:w-[60%] md:w-[75%] p-0">
    <h1 className="text-2xl font-extrabold font-inter px-8 md:px-0  md:pl-10   text-center lg:text-left leading-[32px] pt-40 lg:pt-0">
      SOLWAY Consulting & Services développe des outils spécifiques SAP HR pour améliorer et faciliter votre quotidien
    </h1>
  </div>

  {/* Right Side */}
  <div className="lg:w-1/2 w-full h-[264px] relative overflow-hidden sm:h-[600px] lg:h-[720px] -mt-14">
    <img
      src="src/assets/images/banner.png"
      alt="Buildings"
      className="w-full h-full object-cover transform lg:-skew-x-6 origin-bottom-left transition-all duration-300 ease-in-out"
    />
  </div>
</section>


      );
    };
   
    

export default HeroAbout;
