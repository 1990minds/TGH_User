import React, { useEffect } from 'react'
import { useState } from 'react'
import Cry from '../Images/download.jpeg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateSelector, getOTP, getUser, logOut, updateUser, verifyOTP } from '../api/userAuth'
// import { Navigate, Router, useNavigate } from 'react-router-dom'
// import { BrowserRouter, Route, Routes } from "react-router-dom"

const Profile = () => {
  const { isAuthenticate, user } = useSelector(authenticateSelector);

  // const router = useRouter()
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    title: "Quantum Computing Specialist",
    email: "",
    phone: "",
    oldPassword: "",
    newPassword: "",
    avatar: Cry,
  })
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const id = JSON.parse(localStorage.getItem("userID"))

  console.log(formData);


  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };


  console.log(user);

  useEffect(() => {
    if (isAuthenticate) {
      dispatch(getUser(id));
    }
  }, [id]);


  useEffect(() => {
    if (isAuthenticate && user) {
      setFormData((prevData) => ({
        ...prevData, 
        name: user?.name || prevData.name,
        email: user?.email || prevData.email,
        avatar: user?.avatar || Cry, 
        phone:user?.phone_number
      }));
    }
  }, [isAuthenticate, user]);

  const validateForm = () => {
    let newErrors = {}
    if (!formData?.name?.trim()) newErrors.name = "Name is required"
    if (!formData?.email?.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData?.phone?.trim()) newErrors.phone = "Phone number is required"
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number is invalid"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (validateForm()) {
      console.log("Form submitted:", formData)
      dispatch(updateUser(id,formData))
      setIsEditing(false)
    // }
  }


  const handleSendOTP = () => {
    if (!phone) return alert("Please enter a valid phone number.");
    dispatch(getOTP({ phone }, setStep));

  };

  const handleVerifyOTP = () => {
    if (!otp) return alert("Please enter the OTP.");
    dispatch(verifyOTP({ phone, otp }));
  };


  const handleLogout = () => {
    dispatch(logOut(setStep));
    // navigate('/signin');
  };

  return (
    <>
      {isAuthenticate ? <div className="min-h-[50vh]  p-4 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gradient-to-br from-teal-500 to-cyan-600 p-8 text-white flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 overflow-hidden group">
                <img
                  className="w-full h-full object-cover"
                  src={formData.avatar || "/placeholder.svg?height=128&width=128"}
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <label htmlFor="avatar-upload" className="cursor-pointer text-white text-sm font-semibold">
                      Change Photo
                    </label>
                    <input
                      id="avatar-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleAvatarChange}
                    />
                  </div>
                )}
              </div>
              <h5 className="text-base font-bold mb-1 text-center">{user?.name}</h5>
              {/* <p className="text-sm opacity-75 mb-4">{formData.title}</p> */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-4 py-2 bg-white text-teal-600 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors duration-300"
                >
                  {isEditing ? "Cancel" : "Edit"}
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-teal-700 text-white rounded-full text-sm font-semibold hover:bg-teal-800 transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-teal-600 to-transparent"></div>
          </div>


          <div className="md:w-2/3 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Profile</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`peer w-full px-4 py-2 border-2 rounded-lg placeholder-transparent focus:outline-none transition-colors ${isEditing
                    ? 'border-teal-300 focus:border-teal-500'
                    : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                    } ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-2 -top-2.5 bg-white px-1 text-sm transition-all ${isEditing ? 'text-teal-500' : 'text-gray-500'
                    }`}
                >
                  Name
                </label>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              {/* <div className="relative">
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            disabled={!isEditing}
            className={`peer w-full px-4 py-2 border-2 rounded-lg placeholder-transparent focus:outline-none transition-colors ${
              isEditing 
                ? 'border-teal-300 focus:border-teal-500' 
                : 'border-gray-200 bg-gray-50 cursor-not-allowed'
            }`}
            placeholder="Title"
          />
          <label 
            htmlFor="title" 
            className={`absolute left-2 -top-2.5 bg-white px-1 text-sm transition-all ${
              isEditing ? 'text-teal-500' : 'text-gray-500'
            }`}
          >
            Title
          </label>
        </div> */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`peer w-full px-4 py-2 border-2 rounded-lg placeholder-transparent focus:outline-none transition-colors ${isEditing
                    ? 'border-teal-300 focus:border-teal-500'
                    : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                    } ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-2 -top-2.5 bg-white px-1 text-sm transition-all ${isEditing ? 'text-teal-500' : 'text-gray-500'
                    }`}
                >
                  Email
                </label>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`peer w-full px-4 py-2 border-2 rounded-lg placeholder-transparent focus:outline-none transition-colors ${isEditing
                    ? 'border-teal-300 focus:border-teal-500'
                    : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                    } ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="Phone"
                />
                <label
                  htmlFor="phone"
                  className={`absolute left-2 -top-2.5 bg-white px-1 text-sm transition-all ${isEditing ? 'text-teal-500' : 'text-gray-500'
                    }`}
                >
                  Phone
                </label>
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>
        
              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>


        </div>
      </div> :

        <div className="flex items-center justify-center mt-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
            {/* Left Side - Image */}
            <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-teal-500 to-green-400 p-10">
              <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="Login Illustration" className="w-32 h-32 md:w-48 md:h-48 rounded-full" />
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 p-6 md:p-10">
              <h2 className="text-2xl font-semibold text-gray-700 text-center">Login with OTP</h2>

              {/* Step 1: Enter Phone Number */}
              {step === 1 && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full p-3 border rounded-md"
                    placeholder="Enter phone number"
                  />
                  <button
                    onClick={handleSendOTP}
                    className="mt-4 w-full bg-teal-500 text-white py-2 rounded-md"
                  >
                    Send OTP
                  </button>
                </div>
              )}

              {/* Step 2: Enter OTP */}
              {step === 2 && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-600">Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="mt-1 w-full p-3 border rounded-md"
                    placeholder="Enter OTP"
                  />
                  <button
                    onClick={handleVerifyOTP}
                    className="mt-4 w-full bg-green-500 text-white py-2 rounded-md"
                  >
                    Verify OTP
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>}
    </>
  )
}

export default Profile
