import React from 'react'
import { Link } from 'react-router-dom'

const QuickSelection = () => {

    const searches = [
        {
          from: "Siliguri",
          to: "Gangtok"
        },
        {
          from: "Siliguri",
          to: "Darjeeling"
        },
        {
          from: "Siliguri",
          to: "Kolkata"
        }
      ]
  return (

    
    <div className="max-w-7xl mx-auto p-6">
  <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Quick Book</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
    {searches.map((search, index) => (
      <div 
        key={index} 
        className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 flex flex-col justify-center items-center"
      >
        <div className="min-h-[120px] flex flex-col justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            {search.from} - {search.to}
          </h3>
          
          <div className="flex justify-center mt-4">
            
            <button className="bg-gradient-to-r from-blue-300 to-blue-400 text-white hover:bg-[#2a1b67] w-28 h-8 rounded-lg "><Link to="/Book-cabs">Book Now</Link></button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default QuickSelection
