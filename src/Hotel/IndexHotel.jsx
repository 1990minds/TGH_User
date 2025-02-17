import React from 'react'
import Hotel from "../Images/resorts.png";
const IndexHotel = () => {
  return (

   <div className='bg-gradient-to-t from-green-100 to-blue-100 w-full min-h-screen'>
    <img src={Hotel} className="h-64 w-64 mx-auto pt-10" />
    <div className='text-center text-xl justify-center items-center flex pt-10'>
      
      Hotel Services Will be available soon
    </div>
   </div>
  )
}

export default IndexHotel
