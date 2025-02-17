import React from 'react'
import { useState } from 'react'
import Cry from '../Images/download.jpeg' 
import { useNavigate } from 'react-router-dom'
// import { Navigate, Router, useNavigate } from 'react-router-dom'
// import { BrowserRouter, Route, Routes } from "react-router-dom"

const Profile = () => {
    // const router = useRouter()
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
      name: "Krishna @ 1990Minds",
      title: "Quantum Computing Specialist",
      email: "elara.quantum@techfusion.com",
      phone: "1234567890",
      oldPassword: "",
      newPassword: "",
      avatar: Cry,
    })
    const [errors, setErrors] = useState({})
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  
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
  
    const validateForm = () => {
      let newErrors = {}
      if (!formData.name.trim()) newErrors.name = "Name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
      else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number is invalid"
      if (formData.oldPassword && !formData.newPassword) newErrors.newPassword = "New password is required"
      if (formData.newPassword && !formData.oldPassword) newErrors.oldPassword = "Old password is required"
      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (validateForm()) {
        console.log("Form submitted:", formData)
        setIsEditing(false)
      }
    }
  
  
    const handleLogout = () => {
     
      navigate('/signin');
    };
    
  return (
    <div className="min-h-[50vh]  p-4 flex items-center justify-center">
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
        <h5 className="text-base font-bold mb-1 text-center">{formData.name}</h5>
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
            className={`peer w-full px-4 py-2 border-2 rounded-lg placeholder-transparent focus:outline-none transition-colors ${
              isEditing 
                ? 'border-teal-300 focus:border-teal-500' 
                : 'border-gray-200 bg-gray-50 cursor-not-allowed'
            } ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Name"
          />
          <label 
            htmlFor="name" 
            className={`absolute left-2 -top-2.5 bg-white px-1 text-sm transition-all ${
              isEditing ? 'text-teal-500' : 'text-gray-500'
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
            className={`peer w-full px-4 py-2 border-2 rounded-lg placeholder-transparent focus:outline-none transition-colors ${
              isEditing 
                ? 'border-teal-300 focus:border-teal-500' 
                : 'border-gray-200 bg-gray-50 cursor-not-allowed'
            } ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Email"
          />
          <label 
            htmlFor="email" 
            className={`absolute left-2 -top-2.5 bg-white px-1 text-sm transition-all ${
              isEditing ? 'text-teal-500' : 'text-gray-500'
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
            className={`peer w-full px-4 py-2 border-2 rounded-lg placeholder-transparent focus:outline-none transition-colors ${
              isEditing 
                ? 'border-teal-300 focus:border-teal-500' 
                : 'border-gray-200 bg-gray-50 cursor-not-allowed'
            } ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="Phone"
          />
          <label 
            htmlFor="phone" 
            className={`absolute left-2 -top-2.5 bg-white px-1 text-sm transition-all ${
              isEditing ? 'text-teal-500' : 'text-gray-500'
            }`}
          >
            Phone
          </label>
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
        {isEditing && (
          <>
            <div className="relative">
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                className={`peer w-full px-4 py-2 border-2 rounded-lg border-teal-300 focus:border-teal-500 placeholder-transparent focus:outline-none transition-colors ${errors.oldPassword ? 'border-red-500' : ''}`}
                placeholder="Old Password"
              />
              <label 
                htmlFor="oldPassword" 
                className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-teal-500"
              >
                Old Password
              </label>
              {errors.oldPassword && <p className="mt-1 text-sm text-red-500">{errors.oldPassword}</p>}
            </div>
            <div className="relative">
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className={`peer w-full px-4 py-2 border-2 rounded-lg border-teal-300 focus:border-teal-500 placeholder-transparent focus:outline-none transition-colors ${errors.newPassword ? 'border-red-500' : ''}`}
                placeholder="New Password"
              />
              <label 
                htmlFor="newPassword" 
                className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-teal-500"
              >
                New Password
              </label>
              {errors.newPassword && <p className="mt-1 text-sm text-red-500">{errors.newPassword}</p>}
            </div>
          </>
        )}
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
</div>

  
  )
}

export default Profile
