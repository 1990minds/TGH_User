import React from 'react'
import { FaArrowRight, FaCompass, FaHandSparkles, FaLeaf, FaMountain, FaUsers, FaUserSecret } from 'react-icons/fa'
import Banner from "../Images/hero.jpg";
import { Link } from 'react-router-dom';
import Card from '../Home/Card';

const Welcome = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">


            <main>
                <section className="relative h-[60vh] flex items-center justify-center">
                    {/* <img
                        src={Banner}
                        alt="Himalayan Mountains"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />


                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 text-center text-white">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Welcome to The Great Himalayas</h2>
                        <p className="text-xl md:text-2xl mb-8">Your Gateway to Adventure</p>
                        <a
                            href="#"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
                        >
                            Start Your Journey
                            <FaArrowRight className="ml-2" />
                        </a>
                    </div> */}
                    <div
                        className="absolute inset-0 w-full h-full bg-center"
                        style={{
                            backgroundImage: `url(${Banner})`,
                        }}
                    ></div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-5 text-white text-center px-4">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Welcome to The Great Himalayas</h2>
                        <p className="text-xl md:text-2xl mb-8">Your Gateway to Adventure</p>
                        <a
                            href="#"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
                        >
                            Start Your Journey
                            <FaArrowRight className="ml-2" />
                        </a>
                    </div>
                </section>

                <section className="py-16 px-4">
                    <div className="container mx-auto">
                        <h3 className="text-3xl font-bold text-center mb-12 text-blue-800">Explore the Himalayas with Us !!</h3>
                        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
                            We offer curated tour packages designed to give you an unforgettable experience amidst the world's highest
                            peaks. Whether you're seeking adventure, tranquility, or cultural exploration, our expertly guided tours
                            take you to the heart of the Himalayas.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                                <FaMountain className="text-blue-600 w-12 h-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Expert Guides</h4>
                                <p>
                                    Our local guides are passionate about the Himalayas and ensure you experience the best this region has
                                    to offer.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                                <FaCompass className="text-blue-600 w-12 h-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Customizable Packages</h4>
                                <p>
                                    From trekking expeditions to spiritual retreats, we offer tailor-made packages to suit your
                                    preferences.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                                <FaUserSecret className="text-blue-600 w-12 h-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Authentic Experiences</h4>
                                <p>
                                    Immerse yourself in the culture, traditions, and landscapes of the Himalayas with our carefully
                                    crafted itineraries.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 ">
                    <div className="container mx-auto">
                        <h3 className="text-3xl font-bold text-center mb-12">Explore Our Packages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg p-6 backdrop-filter backdrop-blur-lg">
                                <h4 className="text-xl font-bold mb-4">Trekking Tours</h4>
                                <p className="mb-4">Explore breathtaking trails like Everest Base Camp, Manali to Leh, and more.</p>
                                <button
                                    className="bg-gradient-to-r from-blue-400 to-blue-300 text-white hover:bg-blue-600 transition duration-300 inline-flex items-center px-4 py-2 rounded-lg"
                                >
                                    <Link to="/packages">Learn More</Link>
                                    <FaArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                            <div className="bg-white rounded-lg p-6 backdrop-filter backdrop-blur-lg">
                                <h4 className="text-xl font-bold mb-4">Cultural Journeys</h4>
                                <p className="mb-4">
                                    Discover ancient temples, monasteries, and the rich history of the Himalayan region.
                                </p>
                                <button
                                    className="bg-gradient-to-r from-blue-400 to-blue-300 text-white hover:bg-blue-600 transition duration-300 inline-flex items-center px-4 py-2 rounded-lg"
                                >
                                   <Link to="/packages">Learn More</Link>
                                    <FaArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                            <div className="bg-white rounded-lg p-6 backdrop-filter backdrop-blur-lg">
                                <h4 className="text-xl font-bold mb-4">Wellness Retreats</h4>
                                <p className="mb-4">Rejuvenate your mind and body with wellness and meditation experiences.</p>
                                <button
                                    className="bg-gradient-to-r from-blue-400 to-blue-300 text-white hover:bg-blue-600 transition duration-300 inline-flex items-center px-4 py-2 rounded-lg"
                                >
                                    <Link to="/packages">Learn More</Link>
                                    <FaArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Card/>
                </section>

                <section className="py-16 px-4">
                    <div className="container mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-8 text-blue-800">Start Your Journey Today</h3>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            With The Great Himalayas, every adventure is a step towards the extraordinary. Let us guide you through
                            the majestic peaks and serene valleys of the Himalayas.
                        </p>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-blue-400 to-blue-300 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center text-lg"
                        >
                            Book Your Adventure
                            <FaLeaf className="ml-2" />
                        </a>
                    </div>
                </section>
            </main>

            {/* <footer className="bg-gray-800 text-white py-8">
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
                <Mail className="mr-2" size={16} />
                info@greathimalayas.com
              </p>
              <p className="flex items-center mb-2">
                <Phone className="mr-2" size={16} />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" size={16} />
                Kathmandu, Nepal
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 The Great Himalayas. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
        </div>
    )
}

export default Welcome
