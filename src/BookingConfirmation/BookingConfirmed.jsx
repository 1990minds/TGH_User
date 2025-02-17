import React from 'react'
// import { CheckCircle, Printer } from 'lucide-react'
import Image from "../Images/cryy.jpg";

const BookingConfirmed = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Banner */}
      <div className="bg-green-50 p-4 border-b border-green-200">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-green-700">
          <span>Booking Confirmed Successfully!</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold">Booking Details</h1>
        </div>

        {/* Main Passenger Details */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium mb-4">Main Passenger Details</h2>
            <div className="space-y-2">
              <div><span className="font-medium">Name:</span> Krishna Thiyagarajan</div>
              <div><span className="font-medium">Email:</span> krishprabu2000@gmail.com</div>
              <div><span className="font-medium">Phone:</span> 09894574423</div>
            </div>
          </div>
        </div>

        {/* Seat Details */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium mb-4">Passenger for Seat L2</h2>
            <div>
              <span className="font-medium">Name:</span> Krishna Thiyagarajan
            </div>
          </div>
        </div>

        {/* Journey Details */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium mb-4">Journey Details</h2>
              <div className="space-y-2">
                <div><span className="font-medium">From:</span> Delhi</div>
                <div><span className="font-medium">To:</span> Mumbai</div>
                <div><span className="font-medium">Date of Trip:</span> 1/9/2025</div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium mb-4">Location Details</h2>
              <div className="space-y-2">
                <div><span className="font-medium">Pickup:</span> Rajiv Chowk</div>
                <div><span className="font-medium">Drop:</span> Andheri West</div>
                <div><span className="font-medium">Seats Booked:</span> L1, L2</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium mb-6">Vehicle Details</h2>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              <div className="relative h-48 w-full">
                <img
                  src={Image}
                  alt="Toyota Innova"
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Toyota Innova</h3>
                <ul className="space-y-2">
                  <li>• Air Conditioned Luxury SUV</li>
                  <li>• Comfortable & Spacious Seating</li>
                  <li>• Female Passenger Safety Standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seat Layout */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium mb-6">Seat Layout</h2>
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto sm:grid-cols-3 lg:grid-cols-4">
              {/* Left side seats */}
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-lg flex flex-col items-center justify-center bg-indigo-600 text-white">
                  <span className="font-medium">L1</span>
                  <span className="text-sm">Rs. 1200</span>
                </div>
                <div className="w-16 h-16 rounded-lg flex flex-col items-center justify-center bg-indigo-600 text-white">
                  <span className="font-medium">L2</span>
                  <span className="text-sm">Rs. 1200</span>
                </div>
                <div className="w-16 h-16 rounded-lg flex flex-col items-center justify-center bg-gray-100 text-gray-800">
                  <span className="font-medium">L3</span>
                  <span className="text-sm">Rs. 1200</span>
                </div>
              </div>
              
              {/* Right side seats */}
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-lg flex flex-col items-center justify-center bg-gray-100 text-gray-800">
                  <span className="font-medium">R1</span>
                  <span className="text-sm">Rs. 1200</span>
                </div>
                <div className="w-16 h-16 rounded-lg flex flex-col items-center justify-center bg-gray-100 text-gray-800">
                  <span className="font-medium">R2</span>
                  <span className="text-sm">Rs. 1200</span>
                </div>
                <div className="w-16 h-16 rounded-lg flex flex-col items-center justify-center bg-gray-100 text-gray-800">
                  <span className="font-medium">R3</span>
                  <span className="text-sm">Rs. 1200</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Amount */}
        <div className="bg-indigo-50 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Total Amount Paid:</span>
              <span className="text-2xl font-semibold">Rs. 2400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingConfirmed;
