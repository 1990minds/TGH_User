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

  return (
    <div className="max-w-4xl mx-auto px-4" >
      <div className={`bg-white rounded-3xl shadow-lg p-8 md:p-10 -mt-24 relative z-10 ${className}`}>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Bookings made easy
        </h2>
        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
        )}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <select
            className="bg-gray-100 rounded-lg px-4 py-3 w-full"
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          >
            <option value="">Select From Location</option>
            {all_location.map((location) => (
              <option key={location?._id} value={location?._id}>
                {location?.name}
              </option>
            ))}
          </select>

          <select
            className="bg-gray-100 rounded-lg px-4 py-3 w-full"
            value={formData.pickupStreet}
            onChange={(e) =>
              setFormData({ ...formData, pickupStreet: e.target.value })
            }
          >
            <option value="">Select Pickup Point</option>
            {all_location
              .find((location) => location._id === formData.from)?.points
              ?.map((street) => (
                <option key={street?.location} value={street?.location}>
                  {street?.location}
                </option>
              ))}
          </select>

          <input
            type="date"
            className="bg-gray-100 rounded-lg px-4 py-3 w-full"
            value={formData.date} placeholder="Select Date"
            min={currentDate}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />

          <select
            className="bg-gray-100 rounded-lg px-4 py-3 w-full"
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          >
            <option value="">Select To Location</option>
            {all_location.map((location) => (
              <option key={location?._id} value={location?._id}>
                {location?.name}
              </option>
            ))}
          </select>
          <select
            className="bg-gray-100 rounded-lg px-4 py-3 w-full"
            value={formData.dropStreet}
            onChange={(e) =>
              setFormData({ ...formData, dropStreet: e.target.value })
            }
          >
            <option value="">Select Drop Point</option>
            {all_location
              .find((location) => location._id === formData.to)?.points
              ?.map((street) => (
                <option key={street?.location} value={street?.location}>
                  {street?.location}
                </option>
              ))}
          </select>
          <select
            className="bg-gray-100 rounded-lg px-4 py-3 w-full"
            value={formData.seats}
            onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
          >
            <option value="">Preferred Vehicle Type</option>
            {seatOptions.map((seat) => (
              <option key={seat} value={seat}>
                {seat}
              </option>
            ))}
          </select>
          <div className="col-span-full text-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-300 to-blue-400 text-white rounded-lg px-6 py-3 hover:bg-[#2a1b67] transition-colors"
            >
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
