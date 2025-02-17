import React from 'react'
import { BsMailbox } from 'react-icons/bs'
import { FaEnvelope, FaMailBulk, FaMailchimp, FaMapPin, FaPhone, FaPhoneSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
       <footer className="bg-gradient-to-r from-blue-400 to-blue-300 text-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4">The Great Himalayas</h4>
              <p>Your trusted partner for Himalayan adventures.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-blue-300 transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition duration-300">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p className="flex items-center mb-2">
                <FaEnvelope className="mr-2" size={16} />
                info@greathimalayas.com
              </p>
              <p className="flex items-center mb-2">
                <FaPhone className="mr-2" size={16} />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center">
                <FaMapPin className="mr-2" size={16} />
                Kathmandu, Nepal
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 The Great Himalayas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer