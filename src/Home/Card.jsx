import React from 'react'
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="container mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      <div className="card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFtMpusNqc5H42L4C4hnen9CMvyTH8pzb1w&s"
            alt="Luxury Shared Taxis"
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-xl font-semibold text-gray-800 mb-4">Luxury Shared Taxis !</h2>
          <p className="text-gray-600 text-base mb-4">
            Travel smarter with our eco-friendly and economical shared taxi services, connecting major airports to top destinations like Gangtok, Darjeeling, Kalimpong, Shillong, Guwahati, and Tezpur.
          </p>
          <div className="card-actions justify-end">

          

          <button className="bg-gradient-to-r from-blue-300 to-blue-400 text-white hover:bg-[#2a1b67] w-28 h-8 rounded-lg "><Link to="/Book-cabs">Book Now</Link></button>
          
          </div>
        </div>
      </div>

      <div className="card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WlHL1t55vT8qJ8JvXSiZJMb1pxg5RzRG7g&s"
            alt="Private Reserved Cabs"
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-xl font-semibold text-gray-800 mb-4">Private Reserved Cabs !</h2>
          <p className="text-gray-600 text-base mb-4">
            Experience unmatched comfort and convenience with our customizable reserved cab services, designed for journeys across Sikkim, Darjeeling, Kalimpong, Meghalaya, Assam, and beyond.
          </p>
          <div className="card-actions justify-end">
          <button className="bg-gradient-to-r from-blue-300 to-blue-400 text-white hover:bg-[#2a1b67] w-28 h-8 rounded-lg "><Link to="/Book-cabs">Book Now</Link></button>
          </div>
        </div>
      </div>

      <div className="card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-vt8Ag0FbyglRBQmBS5bTn2gR6QnEgb0kA&s"
            alt="Expert Holiday Planner"
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-xl font-semibold text-gray-800 mb-4">Expert Holiday Planner !</h2>
          <p className="text-gray-600 text-base mb-4">
            Plan your dream holiday with personalized itineraries to Darjeeling, Gangtok, Kaziranga, Shillong, Cherrapunji, and other breathtaking destinations across Sikkim, Meghalaya, and Assam.
          </p>
          <div className="card-actions justify-end">
            <button className="bg-gradient-to-r from-blue-300 to-blue-400 text-white hover:bg-[#2a1b67] w-28 h-8 rounded-lg "><Link to="/Book-cabs">Book Now</Link></button>
          </div>
        </div>
      </div>

      <div className="card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ervigxC3IUvwaokRwTr_LxUKaz5Iu7u-qQ&s"
            alt="Luxury Shared Taxis"
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-xl font-semibold text-gray-800 mb-4">International Packages !</h2>
          <p className="text-gray-600 text-base mb-4">
          Embark on a journey across  to International destinations like Japan, Dubai, Singapore, South Korea and other iconic destinations. we ensure every detail of your international travel is perfectly planned.
          </p>
          <div className="card-actions justify-end">
          <button className="bg-gradient-to-r from-blue-300 to-blue-400 text-white hover:bg-[#2a1b67] w-28 h-8 rounded-lg "><Link to="/Book-cabs">Book Now</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
