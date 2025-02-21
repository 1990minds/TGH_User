import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { KeyUri } from '../key';

const BookingConfirmed = () => {
  const location = useLocation();
  const { paymentId, rideid } = location.state || {};
  const [booking_details, set_booking_details] = useState({})
  const [payment_details, set_payment_details] = useState({})

  // useEffect(() => {
  //   console.log("hello Domnic Toretto");

  //   const fetchPaymentDetails = async () => {
  //     if (!paymentId) {
  //       console.warn("No paymentId found, skipping API call.");
  //       return;
  //     }

  //     try {
  //       console.log("Fetching payment details for:", paymentId);
  //       const response = await axios.get(`${KeyUri.BACKEND_URI}/payment/check-payment/${paymentId}`);
  //       await set_payment_details(response?.data);
  //       const received_data = await axios.get(`${KeyUri.BACKEND_URI}/get-booking/${rideid}`);
  //       await set_booking_details(received_data);
  //       const values ={
  //         payment_status: payment_details?.status,
  //         payment_method: payment_details?.method,
  //         payment_amount: payment_details?.amount,
  //         payment_date:   new Date(payment_details.created_at * 1000),
  //       }
  //       console.log("here are the update details", values)
  //       const updated_ridedetails = await axios.put(`${KeyUri.BACKEND_URI}/update-booking/${rideid}`,values);
  //       console.log("after successfully updation in booking id ", updated_ridedetails)

  //     } catch (e) {
  //       console.error("Error fetching data:", e);
  //     }
  //   };

  //   fetchPaymentDetails();
  // }, [paymentId]);
  useEffect(() => {
    console.log("Hello, Domnic Toretto 🚗💨");
  
    const fetchPaymentDetails = async () => {
      if (!paymentId || !rideid) {
        console.warn("Missing paymentId or rideid, skipping API calls.");
        return;
      }
  
      try {
        console.log("Fetching payment details for:", paymentId);
  
        // Fetch Payment Details
        const response = await axios.get(`${KeyUri.BACKEND_URI}/payment/check-payment/${paymentId}`);
        const paymentData = response?.data;
        set_payment_details(paymentData); // ✅ This updates state, but we use `paymentData` below
  
        // Fetch Booking Details
        const received_data = await axios.get(`${KeyUri.BACKEND_URI}/get-booking/${rideid}`);
        set_booking_details(received_data?.data);
  
        // Ensure data exists before updating
        if (!paymentData?.status || !paymentData?.method || !paymentData?.amount) {
          console.warn("Payment details are incomplete, skipping booking update.");
          return;
        }
  
        // Prepare Values for Update
        const values = {
          payment_status: paymentData.status, // ✅ Using paymentData directly
          payment_method: paymentData.method,
          payment_amount: paymentData.amount,
          payment_date: new Date(paymentData.created_at * 1000),
          payment_id: paymentId
        };
  
        console.log("Here are the update details:", values);
  
        // Update Booking
        const updated_ridedetails = await axios.put(`${KeyUri.BACKEND_URI}/update-booking/${rideid}`, values);
        console.log("After successful update in booking ID:", updated_ridedetails?.data);
  
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
  
    fetchPaymentDetails();
  }, [paymentId, rideid]); 
  const date_in_normal_form = (rideDate) => {
    // Convert the rideDate string to a Date object
    const rideDateObj = new Date(rideDate);

    // Options to format the date
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    // Format the date to the desired format "Sunday, dd-mm-yyyy"
    const formattedDate = rideDateObj
      .toLocaleDateString("en-GB", options)
      .replace(",", " - ");

    return formattedDate;
  };

  return (
    <>
      {(paymentId || rideid) ? <div className="min-h-screen bg-gray-50 mb-16">
        <div className="bg-green-50 p-4 border-b border-green-200">



          {((payment_details?.status === "captured") ? <div className="max-w-4xl mx-auto flex items-center gap-2 text-green-700">
            <span>Booking Confirmed Successfully!</span>
          </div> : <div className="max-w-4xl mx-auto flex items-center gap-2 text-red-700">
            <span>Payment Under Process</span>
          </div>)}

        </div>
        {console.log("Here Is the Payment", payment_details)}
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-semibold">Booking Details

            </h1>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium mb-4">Main Passenger Details</h2>
              <div className="space-y-2">
                {console.log("booking_details", (booking_details))}
                <div><span className="font-medium">Name: </span>{booking_details?.userid?.name}</div>
                <div><span className="font-medium">Email: </span>{booking_details?.userid?.email}</div>
                <div><span className="font-medium">Phone: </span> {booking_details?.userid?.phone_number}</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium mb-4">Journey Details</h2>
                <div className="space-y-2">
                  <div><span className="font-medium">From:</span> {booking_details?.route?.from_location?.name}</div>
                  <div><span className="font-medium">To:</span> {booking_details?.route?.to_location?.name}</div>
                  <div><span className="font-medium">Date of Trip: </span>{date_in_normal_form(booking_details?.ride_date_and_time)}</div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium mb-4">Location Details</h2>
                <div className="space-y-2">
                  <div><span className="font-medium">Pickup:</span> {booking_details?.pickup_point}</div>
                  <div><span className="font-medium">Drop:</span>  {booking_details?.drop_point}</div>
                  <div><span className="font-medium">Seats Booked:</span> {booking_details?.selected_seats?.join(" , ")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium mb-6">Vehicle Details</h2>
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                <div className="relative h-48 w-full">
                  <img
                    src={booking_details?.vehicleId?.picture_of_the_vehicle}
                    alt="Toyota Innova"
                    className="rounded-lg object-cover h-full w-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">{booking_details?.data?.vehicleId?.brand_and_model_name}</h3>
                  <ul className="space-y-2">
                    <li>• Air Conditioned Luxury Vehicle</li>
                    <li>• Comfortable & Spacious Seating</li>
                    <li>• Female Passenger Safety Standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Total Amount Paid:</span>
                <span className="text-2xl font-semibold">₹ {(payment_details?.amount)}/-</span>
              </div>
            </div>
          </div>
          {/* <div className="bg-indigo-50 shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">
                  Ride has been booked, and driver details will be shared 24 hours before the ride begins.
                </span>   
                         
                </div>
            </div>
          </div> */}
          <div className="bg-indigo-50 shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
               {(payment_details?.status==="captured" ? <span className="text-lg font-medium">
                  Ride has been booked, and driver details will be shared 24 hours before the ride begins.
                </span> : <span className="text-lg font-medium">
                  Payment Under Process
                </span>  )} 
                         
                </div>
            </div>
          </div>
        </div>
      </div> : <h1>You are Not allowed To View This page</h1>}

    </>
  )
}

export default BookingConfirmed;
