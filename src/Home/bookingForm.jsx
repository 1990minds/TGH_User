import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAllvehicle, vehicleSelector } from "../api/vehicles";
import { fetchAlllocation, locationSelector } from "../api/locations";

export default function BookingForm({ className, buttonLabel = "Search for Cabs" }) {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    pickupStreet: "",
    dropStreet: "",
    date: "",
    seats: "",
  });
  const { all_vehicle } = useSelector(vehicleSelector);
  const { all_location } = useSelector(locationSelector);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locations = ["Siliguri ", "Kolkata", "Gangtok", "Darjeeling"];
  const streets = ["Indiranagar", "Ullal", "Tin Factory"];
  const seatOptions = ["Sedan", "Suv", "Mini-Vans"];

  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false)




  
  useEffect(() => {
    dispatch(fetchAllvehicle());
    dispatch(fetchAlllocation());
  }, [dispatch])
  const handleSubmit = async(e) => {
    e.preventDefault();


    if (
      !formData.from ||
      !formData.to ||
      !formData.pickupStreet ||
      !formData.dropStreet ||
      !formData.date ||
      !formData.seats
    ) {
      setError("All fields are required.");
      return;
    }


    if (formData.from === formData.to) {
      setError("From and To locations cannot be the same.");
      return;
    }


    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setError("Date cannot be in the past.");
      return;
    }

    setError(""); // Clear any previous errors
    if (buttonLabel === "Modify") {
      navigate("/"); // Navigate to the Index route
      return;
    }

    await localStorage.setItem('Selected Data',JSON.stringify(formData));
    navigate("/sharedcabs");

    console.log("Form submitted:", formData);
  };

  const today = new Date();
  const currentDate = today.toISOString().split("T")[0];



  const filteredFromLocations = all_location.filter((location) =>
    location?.name.toLowerCase().includes(fromSearch.toLowerCase())
  );
  const filteredToLocations = all_location.filter((location) =>
    location?.name.toLowerCase().includes(toSearch.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4" >
      <div className={`bg-white rounded-3xl shadow-lg p-8 md:p-10 -mt-24 relative z-10 ${className}`}>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Bookings made easy
        </h2>
        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Custom From Location Dropdown */}
  <div className="relative w-full">
    <div
      className="bg-gray-100 rounded-lg px-4 py-3 w-full cursor-pointer flex justify-between items-center"
      onClick={() => setFromDropdownOpen(!fromDropdownOpen)}
    >
      <span>
        {formData.from
          ? all_location.find((loc) => loc._id === formData.from)?.name || "Select From Location"
          : "Select From Location"}
      </span>
      <svg className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>
    </div>
    {fromDropdownOpen && (
      <div className="absolute z-10 bg-white border border-gray-300 rounded-lg w-full mt-1 shadow-md">
        <input
          type="text"
          placeholder="Search..."
          value={fromSearch}
          onChange={(e) => setFromSearch(e.target.value)}
          className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
        />
        <div className="max-h-48 overflow-y-auto">
          {filteredFromLocations.map((location) => (
            <div
              key={location?._id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFormData({ ...formData, from: location?._id });
                setFromDropdownOpen(false);
              }}
            >
              {location?.name}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  {/* Pickup Point Dropdown */}
  <select className="bg-gray-100 rounded-lg px-4 py-3 w-full" value={formData.pickupStreet} onChange={(e) => setFormData({ ...formData, pickupStreet: e.target.value })}>
    <option value="">Select Pickup Point</option>
    {all_location.find((location) => location._id === formData.from)?.points?.map((street) => (
      <option key={street?.location} value={street?.location}>
        {street?.location}
      </option>
    ))}
  </select>
  {/* Date Input */}
  <input type="date" className="bg-gray-100 rounded-lg px-4 py-3 w-full" value={formData.date} placeholder="Select Date" min={currentDate} onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>
  {/* Custom To Location Dropdown */}
  <div className="relative w-full">
    <div
      className="bg-gray-100 rounded-lg px-4 py-3 w-full cursor-pointer flex justify-between items-center"
      onClick={() => setToDropdownOpen(!toDropdownOpen)}
    >
      <span>
        {formData.to
          ? all_location.find((loc) => loc._id === formData.to)?.name || "Select To Location"
          : "Select To Location"}
      </span>
      <svg className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>
    </div>
    {toDropdownOpen && (
      <div className="absolute z-10 bg-white border border-gray-300 rounded-lg w-full mt-1 shadow-md">
        <input
          type="text"
          placeholder="Search..."
          value={toSearch}
          onChange={(e) => setToSearch(e.target.value)}
          className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
        />
        <div className="max-h-48 overflow-y-auto">
          {filteredToLocations.map((location) => (
            <div
              key={location?._id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFormData({ ...formData, to: location?._id });
                setToDropdownOpen(false);
              }}
            >
              {location?.name}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  {/* Drop Point Dropdown */}
  <select className="bg-gray-100 rounded-lg px-4 py-3 w-full" value={formData.dropStreet} onChange={(e) => setFormData({ ...formData, dropStreet: e.target.value })}>
    <option value="">Select Drop Point</option>
    {all_location.find((location) => location._id === formData.to)?.points?.map((street) => (
      <option key={street?.location} value={street?.location}>
        {street?.location}
      </option>
    ))}
  </select>
  {/* Preferred Vehicle Type Dropdown */}
  <select className="bg-gray-100 rounded-lg px-4 py-3 w-full " value={formData.seats} onChange={(e) => setFormData({ ...formData, seats: e.target.value })}>
    <option value="">Preferred Vehicle Type</option>
    {seatOptions.map((seat) => (
      <option key={seat} value={seat}>
        {seat}
      </option>
    ))}
  </select>
  {/* Submit Button */}
  <div className="col-span-full text-center mt-4">
    <button type="submit" className="bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-lg px-6 py-3 hover:bg-[#2A1B67] transition-colors">
      {buttonLabel}
    </button>
  </div>
</form>

        <p className="text-xl md:text-xl font-semibold text-center mt-8">
          Looking For Booking a Full Cab ? <Link to="/fullcars"><span className="text-blue-600">Click Here</span></Link>
        </p>
      </div>
      
    </div>
  );
}
