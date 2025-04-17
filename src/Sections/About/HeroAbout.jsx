import React from "react";

const HeroAbout = () => {
   
   
      return (
        <section className="w-full flex flex-col md:flex-row items-center gap-20 md:gap-12 lg:gap-16 ">
  {/* Left Side */}
  <div className="flex flex-col   xl:w-[60%] lg:w-[75%] md:w-[100%] md:-mt-12 xl:mt-8  mt-32 ">
    <h1 className="text-2xl font-extrabold font-inter px-8  lg:px-10 md:px-6   text-center md:text-left  ">
      SOLWAY Consulting & Services développe des outils spécifiques SAP HR pour améliorer et faciliter votre quotidien
    </h1>
  </div>

  {/* Right Side */}
  <div className="md:w-1/2 lg:w-1/2 w-full h-[264px] relative overflow-hidden sm:h-[600px] lg:h-[720px] -mt-14">
    <img
      src="assets/images/banner.png"
      alt="Buildings"
      className="w-full h-full object-cover transform md:-skew-x-6 origin-bottom-left transition-all duration-300 ease-in-out md:z-[60] relative"
    />
  </div>
</section>


      );
    };
   
    

export default HeroAbout;
