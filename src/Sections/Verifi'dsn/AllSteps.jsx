import React, { useState } from "react";

const AllSteps = () => {
  const images = [
    "src/assets/images/parametrage.png",
    "src/assets/images/png",
    "src/assets/images/third.png",
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-4 ">
    <h1 className="text-center font-extrabold text-3xl text-gray-950  -mt-12 lg:mt-0">Check All steps</h1>
    <div className="relative w-full max-w-4xl mx-auto mt-6">
        
      <img src={images[current]} alt={`Step ${current + 1}`} className="w-full h-auto rounded-lg" />
      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 p-2 text-white rounded-full">❮</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 p-2 text-white rounded-full">❯</button>
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-yellow-500" : "bg-gray-400"}`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
  <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
    Brochure
  </button>
</div>

    </div>
    </section>
  );
};

export default AllSteps;
