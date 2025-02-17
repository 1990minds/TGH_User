import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/tgh.png'

const Navbar = () => {
  return (
<header className="bg-gradient-to-r from-blue-400 to-blue-300 text-black p-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <img src={Logo} alt="CabStation Logo" className="h-17 w-28 mr-2" /> {/* Adjust the h-8 class for logo size */}
      <Link to="/" className="text-2xl font-bold">The Great Himalayas</Link>
    </div>
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/Book-cabs" className="hover:underline">Book Cabs</Link></li>
        <li><Link to="/packages" className="hover:underline">Packages</Link></li>
        <li><Link to="/hotels" className="hover:underline">Hotels</Link></li>
        <li><Link to="/userprofile" className="hover:underline">Profile</Link></li>
      </ul>
    </nav>
  </div>
</header>


  )
}

export default Navbar