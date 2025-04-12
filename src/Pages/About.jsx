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
      <section className=" lg:px-12  lg:pt-10 px-6 pt-16 small-screen-bg bg-gray-100  ">
       <Footer />
              </section>
    </main>
      )}
   
    

export default About;
