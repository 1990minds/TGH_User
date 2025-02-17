// import React, { useState } from 'react'
// import SelectedFullCabDetails from './SelectedFullCabDetails'

// const FullCarBookingForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     altPhone: "",
//     email: "",
//     fromDate: "",
//     toDate: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Get today's date in YYYY-MM-DD format
//   const today = new Date().toISOString().split("T")[0];

//   const validateForm = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.phone) newErrors.phone = "Phone number is required";
//     else if (!/^\d{10}$/.test(formData.phone))
//       newErrors.phone = "Enter a valid 10-digit phone number";

//     if (!formData.altPhone) newErrors.altPhone = "Alternate phone number is required";
//     else if (!/^\d{10}$/.test(formData.altPhone))
//       newErrors.altPhone = "Enter a valid 10-digit phone number";
//     else if (formData.phone === formData.altPhone)
//       newErrors.altPhone = "Alternate phone number should be different";

//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
//       newErrors.email = "Enter a valid email address";

//     if (!formData.fromDate) newErrors.fromDate = "From date is required";
//     if (!formData.toDate) newErrors.toDate = "To date is required";
//     else if (formData.toDate < formData.fromDate)
//       newErrors.toDate = "To date should be after From date";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Clear errors when user starts typing
//     setErrors({ ...errors, [name]: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form Submitted:", formData);
//       alert("Booking Successful!");
//     }
//   };
//   return (
//     <div className="flex justify-center items-center  p-4">
//     <form
//       className="bg-white p-6 md:p-8 shadow-lg rounded-lg  w-full"
//       onSubmit={handleSubmit}
//     >
//       <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-6">
//         Booking Details
//       </h2>

//       {/* Name */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//         />
//         {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//       </div>

//       {/* Phone Number */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//         />
//         {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//       </div>

//       {/* Alternate Phone Number */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Alternate Phone Number
//         </label>
//         <input
//           type="tel"
//           name="altPhone"
//           value={formData.altPhone}
//           onChange={handleChange}
//           className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//         />
//         {errors.altPhone && (
//           <p className="text-red-500 text-xs mt-1">{errors.altPhone}</p>
//         )}
//       </div>

//       {/* Email Address */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Email Address</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//         />
//         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//       </div>

//       {/* From Date */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">From Date</label>
//         <input
//           type="date"
//           name="fromDate"
//           value={formData.fromDate}
//           onChange={handleChange}
//           min={today} // Disable past dates
//           className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//         />
//         {errors.fromDate && (
//           <p className="text-red-500 text-xs mt-1">{errors.fromDate}</p>
//         )}
//       </div>

//       {/* To Date */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">To Date</label>
//         <input
//           type="date"
//           name="toDate"
//           value={formData.toDate}
//           onChange={handleChange}
//           min={formData.fromDate || today} // To Date cannot be before From Date
//           className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//         />
//         {errors.toDate && <p className="text-red-500 text-xs mt-1">{errors.toDate}</p>}
//       </div>

//       {/* Submit Button */}
//       <div className="text-center mt-6">
//         <button
//           type="submit"
//           className="w-full max-w-lg bg-blue-600 text-white px-6 py-3 text-sm font-medium rounded-md shadow hover:bg-blue-700 transition"
//         >
//           Book Car
//         </button>
//       </div>
//     </form>
//   </div>
//   )
// }

// export default FullCarBookingForm
