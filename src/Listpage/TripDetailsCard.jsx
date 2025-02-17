import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchoneroute_details, routeSelector } from '../api/route';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeft, FaPen } from 'react-icons/fa';

const TripDetailsCard = () => {
  const retrievedData = JSON.parse(localStorage.getItem('Selected Data'));
  const dispatch = useDispatch();
  const { selected_route, current_route } = useSelector(routeSelector)

  useEffect(() => {

    dispatch(fetchoneroute_details(retrievedData))
  }, [dispatch])
  const convertDateFormat = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (

    <>

      <div className="max-w-sm rounded-3xl bg-white shadow-lg text-center hidden sm:block mx-auto">
        <div className="bg-sky-100 p-4 rounded-t-3xl">
          <h2 className="text-xl font-semibold">Trip Details</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-1">
            <span className="text-gray-600 text-sm">From</span>
            <h3 className="text-2xl font-bold">{current_route?.from_location?.name}</h3>
            <p className="text-gray-600">Indiranagar</p>
          </div>
          <div className="space-y-1">
            <span className="text-gray-600 text-sm">to</span>
            <h3 className="text-2xl font-bold">{current_route?.from_location?.name}</h3>
            <p className="text-gray-600">ECR</p>
          </div>
          <div className="space-y-4">
            <p className="text-lg">23/01/2025</p>
            <button className="w-24 bg-gradient-to-r from-blue-300 to-blue-400 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-colors">
              <Link to="/">Modify</Link>
            </button>
          </div>
        </div>
      </div>
      {/*mobile Trip Details Card */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow-md rounded-lg w-full space-y-3 sm:space-y-0 sm:space-x-4 sm:hidden">
        {/* Left Section */}
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="overflow-hidden">
            <h3 className="font-semibold text-black text-xl sm:text-2xl truncate leading-tight">
              {current_route?.from_location?.name} <span>To</span> <span>{current_route?.to_location?.name}</span>
            </h3>
            <p className="text-gray-500 text-sm sm:text-base mt-1">{convertDateFormat(retrievedData?.date)} <span className="text-gray-500 text-sm sm:text-base">10:00 AM</span></p>
          </div>
        </div>
        {/* Edit Button */}
        <button className="text-blue-500 hover:text-blue-600 flex items-center space-x-1 transition-colors duration-300 ease-in-out">
          <FaPen className="text-sm sm:text-base" />
          <span className="text-sm sm:text-base">Edit</span>
        </button>
      </div>
    </>






  )
}

export default TripDetailsCard
