// import React, { useState, useEffect } from "react";

// const Hero = () => {
//   // Array of image URLs
//   const images = [
//     "https://via.placeholder.com/1920x1080?text=Image+1",
//     "https://via.placeholder.com/1920x1080?text=Image+2",
//     "https://via.placeholder.com/1920x1080?text=Image+3",
//     "https://via.placeholder.com/1920x1080?text=Image+4",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Change image every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // 5 seconds interval

//     return () => clearInterval(interval); // Cleanup interval
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-[50vh] overflow-hidden">
//       {/* Dynamic Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${images[currentImageIndex]})`,
//         }}
//       ></div>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
//         {/* <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
//           Welcome to the Hero Section
//         </h1>
//         <p className="text-sm md:text-lg lg:text-xl">
//           Image {currentImageIndex + 1}
//         </p> */}
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentImageIndex ? "bg-white" : "bg-gray-500"
//             }`}
//             onClick={() => setCurrentImageIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;

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
