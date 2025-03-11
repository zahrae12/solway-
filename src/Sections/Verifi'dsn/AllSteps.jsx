import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Etape 1 : Paramétrage Blocs DSN",
    image: "src/assets/images/parametrage.png", // Replace with actual image URL
    description: "Les blocs DSN à contrôler",
  },
  {
    title: "Etape 2 : Suivi DSN",
    image: "src/assets/images/third.png", // Replace with actual image URL
    description: "Vérification des données DSN",
  },
  {
    title: "Etape 2 : Suivi DSN",
    image: "src/assets/images/third.png", // Replace with actual image URL
    description: "Vérification des données DSN",
  },
];

const AllSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="relative w-full  overflow-hidden">
      <h2 className="text-3xl font-extrabold font-inter leading-[48px] text-center -mt-2">Check all steps</h2>

      <div className="overflow-hidden mt-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentStep * 80}%)`, // Adjust visibility of next step
          }}
        >
          {steps.map((step, index) => (
            <div key={index} className="min-w-[80%] mr-4 p-2">
              <img src={step.image} alt={step.title} className="w-full rounded-lg shadow-md" />
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
            currentStep === steps.length - 1 ? "bg-gray-300" : "bg-yellow-500 text-white"
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

      {/* Brochure Button */}
      <div className="flex justify-center mt-8">
  <button className="w-full sm:w-auto px-8 py-3 bg-yellow-500 text-white shadow-md">
    Brochure
  </button>
</div>

    </div>
  );
};

export default AllSteps;