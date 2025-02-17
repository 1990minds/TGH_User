import React, { useState } from 'react'
import Crysta from "../Images/cryy.jpg";
import Creta from "../Images/creta.jpeg";
import Etios from "../Images/etios.png";
import Gwagon from "../Images/Gwagon.jpg";
import Gurkha from "../Images/Gurkha.jpg";
import Xuv from "../Images/Xuv500.jpg";
import Rubicon from "../Images/wrangler.jpeg";
// import TripDetailsCard from '../Listpage/TripDetailsCard';
import { Link, useLocation, useNavigate } from "react-router-dom";

const FullcarsCard = () => {


  const [sortConfig, setSortConfig] = useState({ key: null, ascending: true });
  const [selectedCategory, setSelectedCategory] = useState("");
  const location = useLocation();
  const navigate = useNavigate();



  // const [fromCity, setFromCity] = useState("");
  // const [fromLocation, setFromLocation] = useState("");
  // const [toCity, setToCity] = useState("");
  // const [toLocation, setToLocation] = useState("");
  // const [date] = useState("23/01/2025");

  
  const cars = [
    {
      name: "Mercedes G-Wagon",
      category: "Premium SUV",
      image: Gwagon,
      seats: 6,
      price: 15000,
      discount: 15,
      originalPrice: 15000,
      transmission: "Manual",
      hasAC: true,
      rating: 4.7,
      reviews: 189,
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      name: "Force Gurkha",
      category: "Premium SUV",
      image: Gurkha,
      seats: 6,
      price: 10000,
      discount: 15,
      originalPrice: 12000,
      transmission: "Manual",
      hasAC: true,
      rating: 4.7,
      reviews: 189,
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },

    {
      name: "Mahindra XUV500",
      category: "Economy",
      image:
        Xuv,
      seats: 6,
      price: 10000,
      discount: 15,
      originalPrice: 440,
      transmission: "Manual",
      hasAC: true,
      rating: 4.7,
      reviews: 189,
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      name: "Innova Crysta",
      category: "Economy",
      image: Crysta,
      price: 9000,
      seats: 6,
      discount: 10,
      originalPrice: 12000,
      transmission: "Manual",
      hasAC: true,
      rating: 4.6,
      reviews: 256,
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      name: "Creta Hyundai",
      category: "SUV",
      image: Creta,
      seats: 6,
      price: 8000,
      discount: 10,
      originalPrice: 10000,
      transmission: "Manual",
      hasAC: true,
      rating: 4.8,
      reviews: 168,
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      name: "Jeep Rubicon",
      category: "Premium SUV",
      image: Rubicon,
      seats: 6,
      price: 13000,
      discount: 15,
      originalPrice: 15000,
      transmission: "Manual",
      hasAC: true,
      rating: 4.7,
      reviews: 189,
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      name: "Toyota Etios",
      category: "Compact",
      price: 7000,
      image: Etios,
      seats: 6,
      discount: 20,
      originalPrice: 8000,
      transmission: "Manual",
      hasAC: true,
      rating: 4.5,
      reviews: 147,
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },


  ]

  // const cities = [
  //   { value: "bangalore", label: "Bangalore" },
  //   { value: "chennai", label: "Chennai" },
  //   { value: "mumbai", label: "Mumbai" },
  // ];

  // const locations: Record<string, { value: string; label: string }[]> = {
  //   bangalore: [
  //     { value: "indiranagar", label: "Indiranagar" },
  //     { value: "koramangala", label: "Koramangala" },
  //     { value: "whitefield", label: "Whitefield" },
  //   ],
  //   chennai: [
  //     { value: "ecr", label: "ECR" },
  //     { value: "tambaram", label: "Tambaram" },
  //     { value: "velachery", label: "Velachery" },
  //   ],
  //   mumbai: [
  //     { value: "andheri", label: "Andheri" },
  //     { value: "bandra", label: "Bandra" },
  //     { value: "worli", label: "Worli" },
  //   ],
  // };

 // Handle sorting based on fare
 const handleSortFare = () => {
  setSortConfig((prev) => ({
    key: "price",
    ascending: prev.key === "price" ? !prev.ascending : true,
  }));
};

// Handle sorting based on category dropdown selection
const handleCategoryChange = (e) => {
  setSelectedCategory(e.target.value);
};

// Sort and filter the car data
const filteredCars = selectedCategory
  ? cars.filter((car) => car.category === selectedCategory)
  : cars;

const sortedCars = [...filteredCars].sort((a, b) => {
  if (sortConfig.key === "price") {
    return sortConfig.ascending ? a.price - b.price : b.price - a.price;
  }
  return 0;
});

const uniqueCategories = [...new Set(cars.map((car) => car.category))];


  return (
    <>

      {/* <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-16 py-6"> */}
      <div className="flex flex-col lg:w-3/4 mx-auto p-4">
        {/* Tabs Section */}
        {/* <div className="w-full lg:w-3/4 mx-auto p-4"> */}
        <div className="w-full ">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
      <button
        onClick={() => navigate(-1)} // Navigates back to the previous page
        className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 shadow-md text-sm sm:text-base bg-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 hover:text-white"
      >
        Go Back
      </button>
          {[
            { path: "/fullcars", label: "Full Cars" },
          ].map((tab) => (
            <Link key={tab.path} to={tab.path}>
              <button
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 shadow-md text-sm sm:text-base ${
                  location.pathname === tab.path
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            </Link>
          ))}
        </div>

      {/* Sorting Options */}
      <div className="flex justify-between bg-gray-100 p-1 shadow-md rounded-lg text-gray-800 font-semibold text-sm sm:text-base">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full">
  {/* Category Dropdown */}
  <select
    className="w-full sm:w-auto p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
    value={selectedCategory}
    onChange={handleCategoryChange}
  >
    <option value="">All Categories</option>
    {uniqueCategories.map((category, idx) => (
      <option key={idx} value={category}>
        {category}
      </option>
    ))}
  </select>

  {/* Sort by Fare Button */}
  <button
    className="w-full sm:w-auto min-w-[150px] px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all"
    onClick={handleSortFare}
  >
    Sort by Fare {sortConfig.ascending ? "▲" : "▼"}
  </button>
</div>
      </div>

      {/* Car Cards */}
      {sortedCars.map((car, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-5 my-4 flex flex-col sm:flex-row gap-6 border border-gray-200 hover:shadow-xl transition-all"
        >
          {/* Car Image */}
          <img
            src={car.image || "/placeholder.svg"}
            alt={car.name}
            className="w-full sm:w-1/3 object-cover rounded-lg shadow-md"
          />

          {/* Car Details */}
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{car.seats} Seater</p>
              <ul className="text-gray-500 text-sm mt-2">
                {car.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Pricing and Actions */}
            <div className="flex flex-col items-end justify-between text-right">
              <p className="bg-green-300 text-green-800 px-3 py-1 mt-3 rounded-full font-semibold text-sm">{car.category}</p>
              <p className="inline-block px-3 py-1 text-blue-600 rounded-full text-sm font-medium mt-1">₹{car.discount}% OFF!</p>
              <p className="text-gray-400 line-through text-xl">₹{car.originalPrice}</p>
              <p className="text-2xl font-bold text-blue-600">₹{car.price}/Day</p>

              <Link to="/fullcabbooking">
                <button className="mt-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-5 rounded-md shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

        {/* Trip Details Section */}
        {/* <div className="w-full lg:w-1/4 rounded-lg p-4">
        
          <TripDetailsCard />

          <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
       
        <div className="bg-blue-500 text-white text-center py-4 text-xl font-semibold">
          Trip Details
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <p className="text-center text-gray-600 font-medium">From</p>
            <select
              className="w-full h-11 border rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <option value="">Select city</option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>

            <select
              className="w-full h-11 border rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              disabled={!fromCity}
            >
              <option value="">Select pickup point</option>
              {fromCity &&
                locations[fromCity]?.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
            </select>
          </div>

          <div className="space-y-2">
            <p className="text-center text-gray-600 font-medium">To</p>
            <select
              className="w-full h-11 border rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            >
              <option value="">Select city</option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>

            <select
              className="w-full h-11 border rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              disabled={!toCity}
            >
              <option value="">Select drop point</option>
              {toCity &&
                locations[toCity]?.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
            </select>
          </div>
          <div className="text-center font-semibold text-lg">{date}</div>

          <button
            className="w-full bg-blue-500 text-white font-medium text-lg py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() =>
              console.log({
                from: { city: fromCity, location: fromLocation },
                to: { city: toCity, location: toLocation },
                date,
              })
            }
          >
            Modify
          </button>
        </div>
      </div>
    </div>
        </div> */}
      </div>


    </>


  )
}

export default FullcarsCard
