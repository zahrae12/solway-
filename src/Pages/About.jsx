import React from "react";
import HeroAbout from "../Sections/About/HeroAbout";
import IntroductionAbout from "../Sections/About/IntroductionAbout";
import { Footer } from "../Sections";
const About = () => {
   
   
      return (
        <main className="w-full">
      <HeroAbout />
      <section className="">
      <IntroductionAbout />
      </section>
      
      <section className="px-3  small-screen-bg bg-gray-100  ">
       <Footer />
              </section>
    </main>
      )}
   
    

export default About;
