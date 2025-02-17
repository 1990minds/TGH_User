import React, { useState } from "react";
import Crysta from "../Images/cryy.jpg";
import Ertiga from "../Images/Ertiga.jpeg";
import Xuv from "../Images/Xuv500.jpg";

function Cab({ name, features, seatsLeft, price, image, onSelect }) {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-100 p-6 rounded-lg shadow-lg mb-6 transition transform hover:scale-105 sm:flex sm:justify-between sm:items-start" style={{ fontFamily: 'Nunito Sans' }}>
      <div className="sm:w-1/4 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-32 sm:h-40 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="sm:w-3/4 sm:ml-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800">{name}</h3>
        <ul className="mt-3 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm sm:text-base text-gray-700 flex items-center">
              <span className="mr-2 text-blue-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>
        <p className="text-sm sm:text-base text-gray-700 mt-2">Seats Left: {seatsLeft}</p>
      </div>
      <div className="text-right sm:w-1/4 sm:ml-4">
        <p className="text-2xl sm:text-3xl font-bold text-blue-600">₹{price}/-</p>
        <button
          onClick={onSelect}
          className="mt-4 bg-gradient-to-r from-green-400 to-green-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 w-full sm:w-auto"
        >
          Select Seat
        </button>
        <p className="mt-3 text-sm sm:text-base text-gray-600">6 Seater</p>
      </div>
    </div>
  );
}

const CabDetails = () => {
  const [cabType, setCabType] = useState("shared");
  const [selectedCab, setSelectedCab] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const cabs = [
    {
      name: "Toyota Innova",
      features: ["Air Conditioned Luxury SUV", "Comfortable & Spacious Seating", "Female Passenger Safety Standards"],
      seatsLeft: 3,
      price: 1200,
      image: Crysta,
      bookedSeats: [2, 5], // Seat numbers that are already booked
    },
    {
      name: "Maruti Suzuki Ertiga",
      features: ["Fuel Efficient MPV", "Comfortable Seating for 7", "24/7 Roadside Assistance"],
      seatsLeft: 5,
      price: 1000,
      image: Ertiga,
      bookedSeats: [2],
    },
    {
      name: "Mahindra XUV500",
      features: ["Powerful SUV for Hill Drives", "Advanced Safety Features", "Panoramic Sunroof"],
      seatsLeft: 5,
      price: 1500,
      image: Xuv,
      bookedSeats: [2],
    },
  ];

  const handleSelectSeat = (cab) => {
    setSelectedCab(cab);
    setSelectedSeats([]);
  };

  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleSubmitSeats = () => {
    alert(`Seats ${selectedSeats.join(", ")} for ${selectedCab.name} confirmed!`);
    setSelectedCab(null);
    setSelectedSeats([]);
  };

  const handleCancelSeats = () => {
    setSelectedCab(null);
    setSelectedSeats([]);
  };

  return (
    <div className="mt-10 mx-auto max-w-6xl px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Available Cabs</h2>
        <div className="flex space-x-4">
          <button
            className={`py-2 px-6 rounded-full font-medium text-sm sm:text-base transition ${
              cabType === "shared" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setCabType("shared")}
          >
            Shared Cars
          </button>
          <button
            className={`py-2 px-6 rounded-full font-medium text-sm sm:text-base transition ${
              cabType === "full" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setCabType("full")}
          >
            Full Cars
          </button>
        </div>
      </div>

      {cabs.map((cab, index) => (
        <Cab key={index} {...cab} onSelect={() => handleSelectSeat(cab)} />
      ))}

      {selectedCab && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Select Seats for {selectedCab.name}</h3>
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, index) => {
                const seatNumber = index + 1;
                const isBooked = selectedCab.bookedSeats.includes(seatNumber);
                const isSelected = selectedSeats.includes(seatNumber);
                return (
                  <button
                    key={index}
                    onClick={() => !isBooked && toggleSeatSelection(seatNumber)}
                    className={`py-2 px-4 rounded-md ${
                      isBooked
                        ? "bg-red-400 text-white cursor-not-allowed"
                        : isSelected
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
                    }`}
                    disabled={isBooked}
                  >
                    Seat {seatNumber}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleCancelSeats}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitSeats}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CabDetails;
