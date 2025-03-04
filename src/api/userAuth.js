import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { KeyUri, config } from "../key";
import { toast } from "react-toastify";

const token = localStorage.getItem("tokenUser") ? JSON.parse(localStorage.getItem("tokenUser")) : null;

const initialState = {
    loading: false,
    isAuthenticate: !!token,
    user: null,
    token: token,
    hasError: false,
};

export const authenticateSlice = createSlice({
    name: "userauth",
    initialState,
    reducers: {
        getlogin: (state) => {
            state.loading = true;
            state.hasError = false;
        },
        getAuthenticate: (state, { payload }) => {
            console.log(payload)
            state.loading = false;
            state.isAuthenticate = true;
            state.user = payload.user;
            state.token = payload.token;
            localStorage.setItem("tokenUser", JSON.stringify(payload.token));
            localStorage.setItem("userID", JSON.stringify(payload.user?._id));
        },
        isAuthenticateError: (state) => {
            state.hasError = true;
            state.loading = false;
            state.isAuthenticate = false;
        },
        getUserProfile: (state, { payload }) => {
            state.loading = false;
            state.user = payload;
            state.isAuthenticate = true;
        },
        getlogout: (state) => {
            state.user = null;
            state.loading = false;
            state.isAuthenticate = false;
            state.token = null;
            localStorage.removeItem("tokenUser");
            localStorage.removeItem("userID");
        },
    },
});

export const { getUserProfile, getAuthenticate, getlogin, isAuthenticateError, getlogout } = authenticateSlice.actions;
export const authenticateSelector = (state) => state.userauth;
export default authenticateSlice.reducer;

/**
 * 🔹 Request OTP API
 */
export const getOTP = (logindata,setStep) => async (dispatch) => {
    dispatch(getlogin());
    try {
        const { data } = await axios.post(`${KeyUri.BACKEND_URI}/send-otp`, logindata, config);
        toast.success(data?.message || "OTP Sent Successfully!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        setStep(2);
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to send OTP", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        dispatch(isAuthenticateError());
    }
};

/**
 * 🔹 Verify OTP API
 */
export const verifyOTP = (logindata) => async (dispatch) => {
    dispatch(getlogin());
    try {
        const { data } = await axios.post(`${KeyUri.BACKEND_URI}/verify-otp-user`, logindata, config);

        toast.success(data?.message || "OTP Verified Successfully!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
console.log(data)
        dispatch(getAuthenticate(data));
        dispatch(getUser(data.user._id)); 
    } catch (error) {
        toast.error(error?.response?.data?.message || "Invalid OTP", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        dispatch(isAuthenticateError());
    }
};

/**
 * 🔹 Fetch User Details API
 */
export const getUser = (id) => async (dispatch) => {
    dispatch(getlogin());

    try {
        const { data } = await axios.get(`${KeyUri.BACKEND_URI}/get-user/${id}`);
        console.log(data)
   
        dispatch(getUserProfile(data));
    } catch (e) {
        dispatch(isAuthenticateError());
    }
};


export const updateUser = (id,updateData) => async (dispatch) => {
    dispatch(getlogin());

    try {
        const { data } = await axios.put(`${KeyUri.BACKEND_URI}/update-user/${id}`, updateData);
        console.log(data)
        toast.success(data?.msg , {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        dispatch(getUser(id));
    } catch (e) {
        dispatch(isAuthenticateError());
    }
};

/**
 * 🔹 Logout API
 */
export const logOut = (setStep) => async (dispatch) => {
    try {
     

        localStorage.clear();
        dispatch(getlogout());
        setStep(1)
        toast.success("Logged out successfully", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    } catch (error) {
 
        dispatch(isAuthenticateError());
    }
};
