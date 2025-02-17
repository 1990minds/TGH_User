// import React from 'react'
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// import { keyUri } from "../../key";
// import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
    const [formData, setFormData] = useState({
        Input: "",
      });
      const [showAlert, setShowAlert] = useState(false);
      const navigate = useNavigate();
      const [error, setError] = useState("");
      const [flag, setFlag] = useState(false);
      const [result, setResult] = useState("");
    //   const dispatch = useDispatch();
      const phone_number = "";
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const sendOTP = async (number) => {
        console.log("Decided To send OTP");
    
        try {
          const response = await fetch('http://localhost:5000/api/influencer/otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone_no: number }),
          });
    
          const data = await response.json();
    
          if (response.status === 200) {
            toast.success('OTP sent successfully!', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 5000, 
              });
              console.log(data)
            navigate(`/signin/authopage/${number}`);
            return data;
          } else {
    
    
            throw new Error(data.err || 'Failed to send OTP');
          }
        } catch (err) {
          setError(err.message);
          toast.error(error, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000, 
          });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (isValidEmail(formData.Input)) {
          console.log("Email is valid:", formData.Input);
    
          // Add email-specific logic or API calls here
        } else if (isValidPhoneNumber(formData.Input)) {
          console.log("Phone number is valid:", formData.Input);
          localStorage.setItem("phone number",formData.Input)
    
          try {
            const phone_number = formData.Input;
            const response = await sendOTP(phone_number);
            console.log(response);
            setResult(response);
            setFlag(true);
           
          } catch (err) {
            setError(err.message);
          }
        } else {
          setError(
            "Invalid input. Please enter a valid email address or 10-digit phone number."
          );
        }
      };
    
    //   const googleAuth = () => {
    //     const authURL = `${keyUri}/auth/google/callback`;
    //     console.log("Redirecting to:", authURL);
    //     window.open("http://localhost:5000/auth/google", "_self");
    //   };
    
      const isValidEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      };
    
      const isValidPhoneNumber = (value) => {
        const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number
        return phoneRegex.test(value);
      };
  return (
<div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
  <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
    <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
      Sign In
    </h2>

    <form onSubmit={handleSubmit}>
      {/* Phone Number Field */}
      <div className="mb-6">
        <label
          htmlFor="Input"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="Input"
          value={formData.Input}
          onChange={handleChange}
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter phone number"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Send OTP
        </button>
      </div>
    </form>

    {/* Google Authentication (Optional, Uncomment if needed) */}
    <div className="mt-6">
      <button
        // onClick={googleAuth}
        className="w-full flex items-center justify-center bg-white text-gray-700 font-semibold py-3 px-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 262"
          id="google"
          className="mr-3"
        >
          <path
            fill="#4285F4"
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
          ></path>
          <path
            fill="#34A853"
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
          ></path>
          <path
            fill="#FBBC05"
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
          ></path>
          <path
            fill="#EB4335"
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
          ></path>
        </svg>
        Login with Google
      </button>
      <div className="mt-8 text-center">
      <p className="text-sm text-gray-600">
        New User ?{" "}
        <Link
          to="/signup"
          className="text-blue-500 font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
    </div>
  </div>
</div>

  )
}

export default Signin
