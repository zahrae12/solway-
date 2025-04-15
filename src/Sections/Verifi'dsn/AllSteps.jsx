import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Etape 1 : Paramétrage Blocs DSN",
    image: "assets/images/parametrage.png", 
    description: "Les blocs DSN à contrôler",
  },
  {
    title: "Etape 2 : Suivi DSN",
    image: "assets/images/third.png", 
    description: "Vérification des données DSN",
  },
  {
    title: "Etape 2 : Suivi DSN",
    image: "assets/images/third.png", 
    description: "Vérification des données DSN",
  },
];

const AllSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isXL, setIsXL] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => setIsXL(window.innerWidth >= 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <h2 className="text-[30px] font-extrabold font-inter  text-center -mt-2">
        Check all steps
      </h2>

      <div className="overflow-hidden mt-8 ">
        <div
          className={`flex transition-transform duration-500 ease-in-out `}
          style={{
            transform: isXL
              ? `translateX(-${currentStep * 80}%)`
              : `translateX(-${currentStep * 100}%)`,
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${
                isXL ? "min-w-[80%] mr-4" : "w-full flex-shrink-0"
              }`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-8 mt-4">
        <button
          onClick={prevStep}
          className={`p-2 rounded-lg ${
            currentStep === 0 ? "bg-gray-300" : "bg-yellow-500 text-white"
          }`}
          disabled={currentStep === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextStep}
          className={`p-2 rounded-lg ${
            currentStep === steps.length - 1
              ? "bg-gray-300"
              : "bg-yellow-500 text-white"
          }`}
          disabled={currentStep === steps.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentStep === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};


export default AllSteps;