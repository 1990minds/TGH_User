import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Crysta from "../Images/cryy.jpg";
import Creta from "../Images/creta.jpeg";
import Etios from "../Images/etios.png";
import Gwagon from "../Images/Gwagon.jpg";
import Gurkha from "../Images/Gurkha.jpg";
import Xuv from "../Images/Xuv500.jpg";
import TripDetailsCard from "./TripDetailsCard";
import { fetchAllvehicle, vehicleSelector } from "../api/vehicles";
import { useDispatch, useSelector } from "react-redux";
import { fetchoneroute_details, routeSelector } from "../api/route";

const CarList = () => {
  const retrievedData = JSON.parse(localStorage.getItem('Selected Data'));
  const { all_vehicle } = useSelector(vehicleSelector)
  const { selected_route, current_route } = useSelector(routeSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllvehicle())
    dispatch(fetchoneroute_details(retrievedData))
  }, [dispatch])

  const initialCarData = [
    {
      id: 1,
      name: "Mercedes G-wagon",
      seats: 6,
      price: 5500,
      image: Gwagon,
      seatsLeft: 1,
      Date: "08/01/2025",
      time: "5:15 AM",
      tripDuration: "5h 30m",
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      id: 2,
      name: "Force Gurkha",
      seats: 6,
      price: 4000,
      image: Gurkha,
      seatsLeft: 2,
      Date: "08/01/2025",
      time: "6:15 AM",
      tripDuration: "5h 30m",
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      id: 3,
      name: "Mahindra Xuv500",
      seats: 6,
      price: 3000,
      seatsLeft: 3,
      image: Xuv,
      Date: "08/01/2025",
      time: "7:15 AM",
      tripDuration: "5h 30m",
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      id: 4,
      name: "Toyota Innova",
      seats: 6,
      price: 3200,
      seatsLeft: 4,
      image: Crysta,
      Date: "08/01/2025",
      time: "7:15 AM",
      tripDuration: "5h 30m",
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      id: 5,
      name: "Hyundai Creta",
      seats: 6,
      price: 2500,
      seatsLeft: 5,
      image: Creta,
      Date: "08/01/2025",
      time: "7:15 AM",
      tripDuration: "5h 30m",
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    },
    {
      id: 6,
      name: "Toyota Etios",
      seats: 6,
      price: 2200,
      seatsLeft: 6,
      image: Etios,
      Date: "08/01/2025",
      time: "7:15 AM",
      tripDuration: "5h 30m",
      features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
        "Comfortable & Spacious Seating",
        "Female Passenger Safety Standards"],
    }
    // Additional car objects...
  ];

  const [carData, setCarData] = useState(initialCarData);
  const [sortConfig, setSortConfig] = useState({ key: null, ascending: true });

  const handleSort = (key) => {
    const isAscending =
      sortConfig.key === key ? !sortConfig.ascending : true; // Toggle sort order
    const sortedData = [...carData].sort((a, b) => {
      if (key === "time") {
        const timeA = new Date(`1970-01-01T${a.time}`);
        const timeB = new Date(`1970-01-01T${b.time}`);
        return isAscending ? timeA - timeB : timeB - timeA;
      } else if (key === "price" || key === "seatsLeft") {
        return isAscending ? a[key] - b[key] : b[key] - a[key];
      }
      return 0;
    });

    setCarData(sortedData);
    setSortConfig({ key, ascending: isAscending });
  };
  const convertTime = (kms) => {
    if (!kms) return "0 hours";

    const totalHours = (kms * 0.75) / 60;
    const hours = Math.floor(totalHours);
    const minutes = Math.round((totalHours - hours) * 60);

    if (minutes === 0) {
      return `${hours} ${hours === 1 ? "hr" : "hrs"}`;
    } else {
      return `${hours} ${hours === 1 ? "hr" : "hrs"} ${minutes} min`;
    }
  };

  console.log(retrievedData);
  console.log(all_vehicle)
  console.log("here is route", current_route?._id);
  console.log("here is route", current_route);
  const location = useLocation();
  const convertDateFormat = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };


  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-16 py-6">
        <div className="w-full lg:w-3/4 bg-white bg-opacity-80 backdrop-blur-lg shadow-lg p-6 rounded-lg order-2 lg:order-1">

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { path: "/sharedcabs", label: "Shared Cars" },
              { path: "/fullcars", label: "Full Cars" },
            ].map((tab) => (
              <Link key={tab.path} to={tab.path}>
                <button
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 shadow-md text-sm sm:text-base ${location.pathname === tab.path
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              </Link>
            ))}
          </div>


          <div className="w-full flex flex-wrap justify-between bg-gray-100 shadow-md rounded-md p-3 text-center">
            {[
              { key: "seatsLeft", label: "Seats Left" },
              { key: "price", label: "Fare" },
            ].map((header) => (
              <div
                key={header.key}
                onClick={() => handleSort(header.key)}
                className="flex-1 text-gray-700 font-semibold uppercase text-xs sm:text-sm cursor-pointer flex justify-center items-center hover:text-indigo-600 transition-all"
              >
                {header.label}
                <span className="ml-1">
                  {sortConfig.key === header.key
                    ? sortConfig.ascending
                      ? "▲"
                      : "▼"
                    : "⇵"}
                </span>
              </div>
            ))}
          </div>
          {all_vehicle
            ?.filter(car => car.route_id?._id === current_route?._id)
            ?.map((car) => (
              <div
                key={car.id}
                className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-5 my-4 flex flex-col md:flex-row gap-6 border border-gray-200 hover:shadow-xl transition-all"
              >

                <img
                  src={Gwagon}
                  alt={car.name}
                  className="w-full md:w-1/3 object-cover rounded-lg shadow-md"
                />


                <div className="flex flex-col md:flex-row justify-between w-full">

                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">{car?.brand_and_model_name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{car?.seats?.length} Seater</p>
                    <ul className="text-gray-500 text-xs sm:text-sm mt-2">
                      {car?.features?.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>


                  <div className="flex flex-col items-center justify-center text-center w-full md:w-1/3">
                    <h1 className="text-md sm:text-lg font-semibold text-indigo-600">{convertDateFormat(retrievedData?.date)}</h1>
                    <h4 className="text-gray-500 text-xs sm:text-sm">{car?.time}</h4>
                    <p className="bg-blue-200 text-blue-600 px-2 sm:px-3 py-1 mt-3 rounded-full font-semibold text-xs sm:text-sm">
                      Duration: {convertTime(current_route?.no_of_kms)}
                    </p>
                  </div>


                  <div className="flex flex-col items-center md:items-end justify-between text-center md:text-right mt-4 md:mt-0">
                    {/* <p className="text-gray-900 font-bold text-xs sm:text-base">
                      Seats Left: {car?.seats?.length}
                    </p> */}
                    <p className="text-xl sm:text-2xl font-bold text-green-500">₹{(current_route?.no_of_kms) * 25}/-</p>

                    <Link to={`/Seats/${car?._id}`}>
                      <button className="mt-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white py-2 px-4 sm:px-5 rounded-md shadow-lg hover:from-green-500 hover:to-green-700 transition-all">
                        Select Seat
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="w-full lg:w-1/4 rounded-lg p-4 order-1 lg:order-2">
          <br />
          <TripDetailsCard />
        </div>
      </div>
    </>
  );
};
export default CarList;

