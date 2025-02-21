import React from "react";
import Banner from "../Images/hero.jpg";
const Hero = () => {
  // Single image URL
  const image = Banner;

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center "
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-5 text-white text-center px-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
          Welcome to The Great Himalayas Cab Services !
        </h1>
        <p className="text-sm md:text-lg lg:text-xl">Enjoy the Trip!</p>
      </div>
    </div>
  );
};

export default Hero;
