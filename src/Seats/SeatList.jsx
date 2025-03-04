import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchonevehicle, vehicleSelector } from '../api/vehicles';
import TripDetailsCard from '../Listpage/TripDetailsCard';
import Gwagon from '../../src/Images/Gwagon.jpg';
import { FaUser, FaUserCheck, FaUserTimes, FaCarSide } from 'react-icons/fa';
import Seat from '../../src/Images/f8fa29b5-027c-4e02-93b5-8ecfaef9fb9a-removebg-preview.png'
import { routeSelector } from '../api/route';
import { KeyUri } from '../key'

const SeatList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { vid } = useParams();
  const { current_vehicle } = useSelector(vehicleSelector);
  const [seats, setSeats] = useState([]);
  const [tripdata, set_trip_data] = useState()
  const [passengers, setPassengers] = useState({});
  const [mainPassenger, setMainPassenger] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { selected_route, current_route } = useSelector(routeSelector)
  // const retrievedData = JSON.parse(localStorage.getItem('Selected Data'));
  const [ride_date, set_ride_date] = useState();
  const selected_seats = []
  const retrievedData = JSON.parse(localStorage.getItem('Selected Data'));
  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        await dispatch(fetchonevehicle(vid));
        setLoading(false);
      } catch (error) {
        setError("Failed to load vehicle details");
        setLoading(false);
      }
    };
    fetchVehicle();
  }, [dispatch, vid]);

  useEffect(() => {


    const formattedDate = new Date(retrievedData?.date).toISOString();
    console.log(formattedDate)
    console.log(retrievedData?.date)
    set_ride_date(formattedDate)



  }, [retrievedData])


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  useEffect(() => {
    if (current_vehicle) {
      const pricePerTrip = parseFloat(current_vehicle.price_per_trip?.$numberDecimal || 0);
      const seatCount = current_vehicle.seats?.length || 1;
      const seatPrice = (pricePerTrip / seatCount) + 300;

      const generatedSeats = (current_vehicle.seats || []).map(seatId => ({
        id: seatId,
        isSelected: false,
        isBooked: (current_vehicle.booked_seats || []).includes(seatId),
        price: seatPrice,
      }));

      setSeats(generatedSeats);
    }
  }, [current_vehicle]);




  useEffect(() => {
    const fetchTrip = async () => {
      try {
        console.log("The function got triggered for the order");

        const responseaa = await axios.post(`${KeyUri.BACKEND_URI}/get-trip`, {
          vehicleId: vid,
          rideDate: ride_date,
        });

        set_trip_data(responseaa?.data);
        console.log("Trip details:", responseaa?.data);
      } catch (error) {
        console.error("Error fetching trip:", error);
      }
    };

    fetchTrip();
  }, [vid, ride_date]); // Ensure dependencies are passed




  const handleSeatClick = (id) => {
    if (seats.find(s => s.id === id)?.isBooked) return;

    setSeats(prev => prev.map(seat =>
      seat.id === id ? { ...seat, isSelected: !seat.isSelected } : seat
    ));

    setPassengers(prev => {
      const updated = { ...prev };
      if (updated[id]) delete updated[id];
      else updated[id] = { name: '', email: '', phone: '', gender: '' };
      return updated;
    });
  };
  console.log(KeyUri)
  const handlePayment = async () => {
    try {

      const uniqueArr = [...new Set(selectedSeats?.map((seat) => seat.id) || [])];
      console.log("Unique Selected Seats:", uniqueArr);
      console.log("ride deate in handle payment", ride_date)

      const { data } = await axios.post(`${KeyUri.BACKEND_URI}/payment/create-order`, {
        amount: totalAmount,
        mainPassenger,
        passengers,
        vehicle: current_vehicle?._id,
        route: current_route?._id,
        selectedSeats: uniqueArr,
        ride_date_and_time: ride_date,
        pickup_point: retrievedData?.pickupStreet,
        drop_point: retrievedData?.dropStreet

      });

      console.log("Data received from backend:", data);


      const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;
      if (!razorpayKey) {
        console.error("Error: Razorpay Key is missing");
        alert("Payment gateway is not configured properly.");
        return;
      }


      const options = {
        key: razorpayKey,
        amount: data?.data?.amount,
        currency: data?.data?.currency,
        name: "The Great Himalayas",
        description: "Test Transaction",
        order_id: data?.data?.id,
        handler: async function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          navigate('/sharedcabbookingconfirmed', { state: { paymentId: response.razorpay_payment_id, rideid: data?.dataa?._id } });
        },
        prefill: {
          name: passengers[mainPassenger]?.name || "",
          email: passengers[mainPassenger]?.email || "",
          contact: passengers[mainPassenger]?.phone || "",
        },
        theme: {
          color: "#3399CC",
        },
      };

      console.log("Razorpay Options:", options);

      // Open Razorpay payment window
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error in Razorpay payment:", error);
      alert("Payment failed. Please try again.");
    }
  };





  const validateForm = () => {
    if (selectedSeats.length === 0) return "Please select at least one seat";
    if (!mainPassenger) return "Please select a main passenger";

    const main = passengers[mainPassenger];
    if (!main?.name || !main?.email || !main?.phone)
      return "Main passenger details incomplete";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(main.email))
      return "Invalid email format";

    if (!/^\d{10}$/.test(main.phone))
      return "Invalid phone number (must be 10 digits)";

    if (main.gender === 'Other' && !main.customGender)
      return "Please specify gender for 'Other' selection";

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(passengers, "and", mainPassenger, selectedSeats)
    const error = validateForm();
    if (error) return setError(error);
    setError(null);
    setShowModal(true);
  };

  const selectedSeats = seats.filter(s => s.isSelected);
  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!current_vehicle) return <div className="text-center py-8">Vehicle not found</div>;


  const formattedDate = new Date(retrievedData?.date).toISOString();
  console.log(formattedDate)
  console.log(retrievedData?.date)

  return (
    <div className="mx-auto flex flex-col lg:flex-row gap-8 p-4 max-w-7xl mb-14">

      <div className="w-full lg:w-2/3 space-y-8">

        <TripDetailsCard vehicle={current_vehicle} />







        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow  mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Passenger Details</h2>

          {error && <div className="text-red-500 mb-4">{error}</div>}
          {selectedSeats.length === 0 && (
            <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700 p-3 rounded-lg shadow-md mt-4">
              <p className="font-semibold text-center text-lg mb-2">No seats selected!</p>
              <p className="text-center text-sm mb-3">Please select seats for the trip before proceeding.</p>
              <div className="bg-white  rounded-md shadow-sm border space-y-4 flex flex-col">

                <div>

                  <input
                    type="text"
                    placeholder='Enter Your Name'
                    disabled
                    className=" w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3"
                  />
                </div>
              </div>
            </div>
          )}

          <div className={`grid gap-6 ${selectedSeats.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
            {Object.entries(passengers).map(([seatId, passenger]) => (
              <div key={seatId} className="bg-white p-4 rounded-md shadow-sm border">
                <h3 className="text-lg font-medium mb-4">Seat {seatId}</h3>
                <input
                  type="text"
                  placeholder="Name"
                  value={passenger.name}
                  onChange={e => setPassengers(prev => ({
                    ...prev,
                    [seatId]: { ...prev[seatId], name: e.target.value }
                  }))}
                  className="w-full mb-4 p-2 border rounded"
                  required
                />

                <label className="block mb-4">
                  <input
                    type="checkbox"
                    checked={mainPassenger === seatId}
                    onChange={() => setMainPassenger(prev => prev === seatId ? null : seatId)}
                    className="mr-2"
                  />
                  Main Passenger
                </label>

                {mainPassenger === seatId && (
                  <>
                    <input
                      type="email"
                      placeholder="Email"
                      value={passenger.email}
                      onChange={e => setPassengers(prev => ({
                        ...prev,
                        [seatId]: { ...prev[seatId], email: e.target.value }
                      }))}
                      className="w-full mb-4 p-2 border rounded"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={passenger.phone}
                      onChange={e => setPassengers(prev => ({
                        ...prev,
                        [seatId]: { ...prev[seatId], phone: e.target.value }
                      }))}
                      className="w-full mb-4 p-2 border rounded"
                      pattern="\d{10}"
                      required
                    />
                  </>
                )}

                <div className="space-y-2">
                  <label>Gender:</label>
                  <div className='flex space-x-4'>
                    {['Male', 'Female', 'Other'].map(gender => (
                      <label key={gender} className="block">
                        <input
                          type="radio"
                          name={`gender-${seatId}`}
                          value={gender}
                          checked={passenger.gender === gender}
                          onChange={e => setPassengers(prev => ({
                            ...prev,
                            [seatId]: {
                              ...prev[seatId],
                              gender: e.target.value,
                              customGender: e.target.value === 'Other' ? '' : undefined
                            }
                          }))}
                          className="mr-2"
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                  {passenger.gender === 'Other' && (
                    <input
                      type="text"
                      placeholder="Specify Gender"
                      value={passenger.customGender || ''}
                      onChange={e => setPassengers(prev => ({
                        ...prev,
                        [seatId]: { ...prev[seatId], customGender: e.target.value }
                      }))}
                      className="w-full p-2 border rounded mt-2"
                      required
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={selectedSeats.length === 0}
            className={`mt-6 w-full py-2 rounded font-semibold ${selectedSeats.length === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
          >
            Proceed to Payment
          </button>
        </form>
      </div>

      <div className="w-full lg:w-1/3 space-y-6">


        {tripdata ? <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-100 p-4">
            <h2 className="text-lg font-semibold">
              {console.log(tripdata)}
              Available Seats ({tripdata?.availableSeats} remaining)
            </h2>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4">
            {(() => {
              // Get all booked seat numbers from tripdata
              const bookedSeats = tripdata?.bookedSeats.flatMap(booking =>
                booking.seatNumbers
              );

              // Generate seats array with correct booking status
              const seats = Array.from({ length: tripdata?.totalSeats }, (_, index) => {
                const seatId = index === 0 ? 'D1' : `S${index}`;
                return {
                  id: seatId,
                  isBooked: bookedSeats.includes(seatId),
                  isSelected: false
                };
              });

              // Rearrange for display
              const displaySeats = [...seats];
              if (displaySeats.length > 0) {
                const d1 = displaySeats.shift();
                displaySeats.splice(1, 0, d1);
              }

              return displaySeats.map(seat => (
                <button
                  key={seat.id}
                  onClick={() => handleSeatClick(seat.id)}
                  disabled={seat.isBooked || seat.id === "D1"}
                  className={`p-4 rounded text-center font-semibold ${seat.id === "D1" ? 'bg-gray-300 text-white cursor-not-allowed' :
                    seat.isSelected ? 'bg-blue-600 text-white' :
                      seat.isBooked ? 'bg-red-500 text-white cursor-not-allowed' :
                        'bg-gray-100 hover:bg-blue-100'
                    }`}
                >
                  <img className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 mx-auto' src={Seat} alt="seat" />
                  {seat.id}
                </button>
              ));
            })()}
          </div>
        </div> : <div className="bg-white shadow-lg rounded-lg overflow-hidden">

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-100 p-4">
              <h2 className="text-lg font-semibold">
                Available Seats ({seats.filter(s => !s.isBooked && s.id !== "D1").length} remaining)
              </h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
              {(() => {
                const displaySeats = [...seats];
                if (displaySeats.length > 0) {
                  const d1 = displaySeats.shift();
                  displaySeats.splice(1, 0, d1);
                }

                return displaySeats.map(seat => (
                  <button
                    key={seat.id}
                    onClick={() => handleSeatClick(seat.id)}
                    disabled={seat.isBooked || seat.id === "D1"} // Disable D1 always
                    className={`p-4 rounded text-center font-semibold ${seat.id === "D1" ? 'bg-gray-300 text-white cursor-not-allowed' :
                      seat.isSelected ? 'bg-blue-600 text-white' :
                        seat.isBooked ? 'bg-red-500 text-white cursor-not-allowed' :
                          'bg-gray-100 hover:bg-blue-100'
                      }`}
                  >
                    <img className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 mx-auto' src={Seat} alt="seat" />
                    {seat.id}
                  </button>
                ));
              })()}
            </div>
          </div>
        </div>}





















        {/* formmm */}

        <div className="bg-white shadow-md rounded-lg p-3 sm:p-4 flex items-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md mx-auto">
          {/* Vehicle Image */}
          <img
            src={Gwagon}
            alt={current_vehicle?.brand_and_model_name}
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
          />

          {/* Vehicle Details */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-md sm:text-lg font-bold">{current_vehicle?.brand_and_model_name}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{current_vehicle.seats?.length} Seater</p>

            <div className="mt-2">
              {/* <p className="text-xs sm:text-sm font-semibold">
                {current_vehicle.Date} • {current_vehicle.time}
              </p> */}
              <p className="text-blue-600 font-bold text-md sm:text-lg mt-1">
                ₹{((parseFloat(current_vehicle.price_per_trip?.$numberDecimal) || 0) / current_vehicle.seats?.length + 300).toFixed(2)}/seat
              </p>
            </div>
          </div>
        </div>



      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Booking</h3>
            <p className="mb-2"><strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}</p>
            <p className="mb-4"><strong>Selected Seats:</strong> {selectedSeats.map(s => s.id).join(', ')}</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatList;
