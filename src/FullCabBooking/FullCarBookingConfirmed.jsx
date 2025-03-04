import React from 'react'
import Image from "../Images/wrangler.jpeg"

const FullCarBookingConfirmed = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-6 mb-12
    
    
    ">
    {/* Success Banner */}
    <div className="w-full bg-green-100 text-green-700 py-2 px-4 text-center">
      Booking Confirmed Successfully!
    </div>

    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Booking Details Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Booking Details</h1>
      </div>

      {/* Passenger Details */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium mb-4">Passenger Details</h2>
          <div className="space-y-2">
            <div>
              <span className="font-medium">Name:</span> Krishna Thiyagarajan
            </div>
            <div>
              <span className="font-medium">Email:</span> krishprabu2000@gmail.com
            </div>
            <div>
              <span className="font-medium">Phone:</span> 9894574423
            </div>
            <div>
              <span className="font-medium">Alternate Number:</span> 9894574424
            </div>
          </div>
        </div>
      </div>

      {/* Journey & Location Details */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Journey Details */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium mb-4">Journey Details</h2>
            <div className="space-y-2">
              <div>
                <span className="font-medium">From:</span> Delhi
              </div>
              <div>
                <span className="font-medium">To:</span> Mumbai
              </div>
              <div>
                <span className="font-medium">From Date:</span> 1/9/2025
              </div>
              <div>
                <span className="font-medium">No of Days Cab Booked:</span> 5
              </div>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium mb-4">Location Details</h2>
            <div className="space-y-2">
              <div>
                <span className="font-medium">PickUp Location:</span> Airport
              </div>
              <div>
                <span className="font-medium">Drop Location:</span> Metro Station
              </div>
              <div>
                <span className="font-medium">To Date:</span> 1/13/2025
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Details */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium mb-6">Vehicle Details</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            <div className="relative h-50 w-full sm:w-90">
              <img
                src={Image}
                alt="Jeep Rubicon"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Jeep Rubicon</h3>
              <ul className="space-y-2">
                <li>• Air Conditioned Luxury SUV</li>
                <li>• Comfortable & Spacious Seating</li>
                <li>• Female Passenger Safety Standards</li>
                <li>• Comfortable & Spacious Seating</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Total Amount */}
      <div className="bg-indigo-50 shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
          <span className="text-lg font-medium">Total Amount Paid:</span>
          <span className="text-2xl font-semibold text-indigo-800">Rs. 26,000</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FullCarBookingConfirmed
