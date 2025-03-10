import React from "react";
import HeroAbout from "../Sections/About/HeroAbout";
import IntroductionAbout from "../Sections/About/IntroductionAbout";
import { Footer } from "../Sections";
const About = () => {
   
   
      return (
        <main className="w-full">
      <HeroAbout />
       <div className="w-full "></div>
      <IntroductionAbout />
      <section className="bg-cover bg-no-repeat lg:px-12 lg:pt-6 px-6 pt-16 small-screen-bg md:bg-gray-50 bg-gray-50 ">
       <Footer />
              </section>
    </main>
      )}
   
    

export default About;
