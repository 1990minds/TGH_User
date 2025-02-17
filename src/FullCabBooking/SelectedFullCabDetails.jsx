import React, { useState } from 'react'
import Rubicon from '../Images/wrangler.jpeg'
import TripDetailsCard from '../Listpage/TripDetailsCard'
import { Link } from 'react-router-dom'
// import FullCarBookingForm from './FullCarBookingForm'
// import BookingForm from '../Home/bookingForm'

const SelectedFullCabDetails = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        altPhone: "",
        email: "",
        fromDate: "",
        toDate: "",
        fromLocation: "",
        pickupPoint: "",
        toLocation: "",
        dropPoint: "",
    });

    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    const validateForm = () => {
        let newErrors = {};
    
        // Name Validation
        if (!formData.name.trim()) newErrors.name = "Name is required";
    
        // Phone Number Validation
        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }
    
        // Alternate Phone Number Validation
        if (!formData.altPhone) {
            newErrors.altPhone = "Alternate phone number is required";
        } else if (!/^\d{10}$/.test(formData.altPhone)) {
            newErrors.altPhone = "Enter a valid 10-digit phone number";
        } else if (formData.phone === formData.altPhone) {
            newErrors.altPhone = "Alternate phone number should be different";
        }
    
        // Email Validation
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
    
        // Date Validation
        if (!formData.fromDate) {
            newErrors.fromDate = "From date is required";
        }
        if (!formData.toDate) {
            newErrors.toDate = "To date is required";
        } else if (formData.toDate < formData.fromDate) {
            newErrors.toDate = "To date should be after From date";
        }
    
        // Dropdown Validation
        if (!formData.fromLocation) newErrors.fromLocation = "Select a valid From Location";
        if (!formData.pickupPoint) newErrors.pickupPoint = "Select a valid Pickup Point";
        if (!formData.toLocation) newErrors.toLocation = "Select a valid Destination";
        if (!formData.dropPoint) newErrors.dropPoint = "Select a valid Drop Point";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsModalOpen(true);
        }
    };

    const calculateTotalDays = () => {
        if (!formData.fromDate || !formData.toDate) return 0;
        const fromDate = new Date(formData.fromDate);
        const toDate = new Date(formData.toDate);
        return Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1;
    };
    const closeModal = () => setIsModalOpen(false);
    const cars = [
        {
            name: "Jeep Rubicon",
            category: "Premium SUV",
            image: Rubicon,
            seats: 6,
            price: 13000,
            discount: 15,
            originalPrice: 15000,
            transmission: "Manual",
            hasAC: true,
            rating: 4.7,
            reviews: 189,
            features: ["Free Cancellation", "Third Party Liability", "Instantly Confirmed", "Air Conditioned Luxury SUV",
                "Comfortable & Spacious Seating",
                "Female Passenger Safety Standards"],
        }


    ]
    return (
        // <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-16 py-6">
        <div className="lg:w-5/6 lg:mx-auto mb-16">
           
            {/* Tabs Section */}
            {/* <div className="w-full lg:w-5/6 lg:mx-auto"> */}
            <div className="w-full ">
            <div className="flex space-x-4 m-4">
                                           <button
                                       className="px-4 py-2 bg-gradient-to-r from-blue-300 to-blue-400 hover:bg-gray-300 text-white rounded-lg text-sm sm:text-base transition duration-300 "
                                     >
                                       <Link to="/fullcars">Go Back</Link>
                                     </button>
                                 
                                     {/* <button
                                       className="px-4 py-2 text-white bg-gradient-to-r from-blue-300 to-blue-400 hover:bg-gray-300 rounded-lg text-sm sm:text-base transition duration-300 "
                                     >
                                        <Link to="/fullcars">Full Cars</Link>
                                     </button> */}
                                           
                       </div>
                {/* Car Cards */}
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg mt-6 shadow-md p-4 mb-4 flex flex-col sm:flex-row gap-4"
                    >
                        {/* Car Image */}
                        <img
                            src={car.image || "/placeholder.svg"}
                            alt={car.name}
                            className="w-full sm:w-1/3 object-cover rounded-lg"
                        />

                        {/* Car Details */}
                        <div className="flex flex-col sm:flex-row justify-between w-full">
                            <div className="flex-grow">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                                    {car.name}
                                </h3>
                                <p className="text-gray-900 mb-2 text-sm sm:text-base">
                                    {car.seats} Seater
                                </p>
                                <ul className="text-gray-700 text-sm mb-4">
                                    {car.features.map((feature, idx) => (
                                        <li key={idx}>• {feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Additional Car Details */}
                            <div className="flex flex-col items-center justify-center text-center">
                                <p className="text-base sm:text-lg font-semibold">{car.date}</p>
                                <p className="text-gray-600 text-sm sm:text-base">{car.time}</p>
                            </div>

                            {/* Pricing and Actions */}
                            <div className="flex flex-col items-end justify-between text-right ">
                                <p className=" text-grey-900 mt-2 sm:mt-5 font-sans text-sm sm:text-base bg-green-300 rounded-full px-3 py-1">
                                    {car.category}
                                </p>
                                <div className="inline-block px-3 py-1 text-blue-600 rounded-full text-sm font-medium mt-1">
                                    {car.discount}% OFF!
                                </div>
                                <p className="text-gray-400 line-through text-xl">
                                    ₹{car.originalPrice}
                                </p>
                                <p className="text-xl sm:text-2xl font-bold text-blue-600">
                                    ₹{car.price}/Day-
                                </p>
                                
                                {/* <button className="mt-4 bg-gradient-to-r from-blue-300 to-blue-400 text-white py-2 px-4 sm:px-6 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 w-full sm:w-auto text-sm sm:text-base">
                    <Link to="#">Book Now</Link>
                  </button> */}
                            </div>
                        </div>
                    </div>
                ))}


                <div className="w-full mx-auto mt-10">
                    {/* <FullCarBookingForm /> */}

                    
                    {/* <div className="flex justify-center items-center "> */}
                    <form className="bg-white p-6 md:p-8 shadow-lg rounded-lg w-full" onSubmit={handleSubmit}>
    <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-6">Booking Details</h2>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone Number */}
        <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Alternate Phone Number */}
        <div>
            <label className="block text-sm font-medium text-gray-700">Alternate Phone Number</label>
            <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            {errors.altPhone && <p className="text-red-500 text-xs mt-1">{errors.altPhone}</p>}
        </div>

        {/* Email Address */}
        <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* From Date */}
        <div>
            <label className="block text-sm font-medium text-gray-700">From Date</label>
            <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} min={today} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            {errors.fromDate && <p className="text-red-500 text-xs mt-1">{errors.fromDate}</p>}
        </div>

        {/* To Date */}
        <div>
            <label className="block text-sm font-medium text-gray-700">To Date</label>
            <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} min={formData.fromDate || today} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            {errors.toDate && <p className="text-red-500 text-xs mt-1">{errors.toDate}</p>}
        </div>

        {/* From Location */}
        <div>
            <label className="block text-sm font-medium text-gray-700">From</label>
            <select name="fromLocation" value={formData.fromLocation} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                <option value="">Select Location</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
            </select>
            {errors.fromLocation && <p className="text-red-500 text-xs mt-1">{errors.fromLocation}</p>}
        </div>

        {/* Pickup Point */}
        <div>
            <label className="block text-sm font-medium text-gray-700">Pickup Point</label>
            <select name="pickupPoint" value={formData.pickupPoint} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                <option value="">Select Pickup Point</option>
                <option value="Airport">Airport</option>
                <option value="Railway Station">Railway Station</option>
                <option value="Hotel">Hotel</option>
            </select>
            {errors.pickupPoint && <p className="text-red-500 text-xs mt-1">{errors.pickupPoint}</p>}
        </div>

        {/* To Location */}
        <div>
            <label className="block text-sm font-medium text-gray-700">To</label>
            <select name="toLocation" value={formData.toLocation} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                <option value="">Select Destination</option>
                <option value="Manali">Manali</option>
                <option value="Shimla">Shimla</option>
                <option value="Goa">Goa</option>
            </select>
            {errors.toLocation && <p className="text-red-500 text-xs mt-1">{errors.toLocation}</p>}
        </div>

        {/* Drop Point */}
        <div>
            <label className="block text-sm font-medium text-gray-700">Drop Point</label>
            <select name="dropPoint" value={formData.dropPoint} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                <option value="">Select Drop Point</option>
                <option value="Hotel">Hotel</option>
                <option value="Resort">Resort</option>
                <option value="Bus Stand">Bus Stand</option>
            </select>
            {errors.dropPoint && <p className="text-red-500 text-xs mt-1">{errors.dropPoint}</p>}
        </div>
    </div>

    {/* Submit Button */}
    <div className="text-center mt-6">
        <button type="submit" className="w-32 bg-gradient-to-r from-blue-300 to-blue-400 text-white px-6 py-3 text-sm font-medium rounded-md shadow hover:bg-blue-700 transition">Book Car</button>
    </div>
</form>


                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="relative bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-3xl ">
                                {/* Close X mark */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Car details card */}
                                <div className="flex mb-6 p-4 rounded-lg border bg-gray-100 ">
                                    <img src={cars[0].image} alt={cars[0].name} className="w-48 h-32 object-cover rounded-lg mr-6" />
                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold">{cars[0].name}</h4>
                                        <p className="text-green-600">{cars[0].category}</p>
                                        <p><strong>AC:</strong> {cars[0].hasAC ? "Yes" : "No"}</p>
                                        <p><strong>Seats:</strong> {cars[0].seats}</p>
                                        <p><strong>Discount:</strong> {cars[0].discount}% OFF!</p>

                                        <p><strong>Original Price:</strong> <span className=' line-through '>{cars[0].originalPrice}</span></p>

                                        {/* <p><strong>Rating:</strong> {cars[0].rating} ({cars[0].reviews} reviews)</p> */}
                                        <p><strong>Price:</strong> ₹{cars[0].price} / day</p>
                                    </div>
                                </div>

                                {/* Booking summary */}
                                <h3 className="text-xl font-semibold mb-4 text-center">Booking Summary</h3>
                                <p><strong>Name:</strong> {formData.name}</p>
                                <p><strong>Phone Number:</strong> {formData.phone}</p>
                                <p><strong>Alternate Phone:</strong> {formData.altPhone}</p>
                                <p><strong>Email:</strong> {formData.email}</p>
                                <p><strong>From Date:</strong> {formData.fromDate}</p>
                                <p><strong>To Date:</strong> {formData.toDate}</p>
                                <p><strong>From :</strong> {formData.fromLocation}</p>
                                <p><strong>PickUp Location:</strong> {formData.pickupPoint}</p>
                                <p><strong>To :</strong> {formData.toLocation}</p>
                                <p><strong>Drop Location:</strong> {formData.dropPoint}</p>
                                <p><strong>No of Days:</strong> {calculateTotalDays()}</p>
                                <p><strong>Total Amount:</strong> ₹{calculateTotalDays() * cars[0].price}</p>

                                {/* Pay Now button */}
                                <div className="flex justify-center mt-6">
                                    <button
                                        // onClick={handlePayNow}
                                        className="w-32 bg-gradient-to-r from-blue-300 to-blue-400 text-white px-6 py-3 rounded-md shadow hover:bg-green-600 transition"
                                    >
                                        <Link to="/fullcabbookingconfirmed">Pay Now</Link>
                                    </button>
                                </div>

                            </div>
                        </div>
                    )}


                    {/* </div> */}
                </div>
            </div>


            {/* Trip Details Section */}
            {/* <div className="w-full lg:w-1/3 rounded-lg p-4">
                <TripDetailsCard />
            </div> */}
        </div>
    )
}

export default SelectedFullCabDetails
