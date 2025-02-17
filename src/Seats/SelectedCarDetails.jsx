import React from "react";
import Crysta from "../Images/cryy.jpg";
import { Link } from "react-router-dom";

const CabDetails = () => {
  const carData = [
    {
      id: 1,
      name: "Toyota Innova",
      seats: 6,
      price: 1200,
      image: Crysta,
      seatsLeft: 5,
      Date: "08/01/2025",
      time: "5.15 AM",
      features: [
        "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards",
      ],
    },

  ];
  return (

    <>

      <div className="flex space-x-4 m-4">
        <button
          className="px-4 py-2 bg-gradient-to-r from-blue-300 to-blue-400 hover:bg-gray-300 text-white rounded-lg text-sm sm:text-base transition duration-300 hidden sm:block"
        >
          <Link to="/sharedcabs">Go Back</Link>
        </button>



      </div>
      <div className=" mx-auto max-w-6xl px-4">



        {carData.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col lg:flex-row gap-4"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full lg:w-1/3 object-cover rounded-lg"
            />
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <div className="flex-grow">
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-gray-900 mb-2">{car.seats} Seater</p>
                <ul className="text-gray-700 text-sm mb-4">
                  {car.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-lg font-semibold">{car.Date}</h1>
                <h4 className="text-gray-600">{car.time}</h4>
              </div>
              <div className="flex flex-col items-center justify-between text-center">
                <p className="text-gray-900 mt-5 font-bold">Seats Left: {car.seatsLeft}</p>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">₹{car.price}/-</p>

              </div>
            </div>
          </div>
        ))}


      </div>

    </>





  );
};

export default CabDetails;
