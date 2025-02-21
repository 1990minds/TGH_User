import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { KeyUri, config } from "../key";
import { toast } from "react-toastify";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const booking = localStorage.getItem("bookinginfo")
  ? localStorage.getItem("bookinginfo")
  : null;

const initialState = {
  all_booking: [],
  loading: false,
  hasError: false,
  current_dealer: null,
  bookingAuthenticate: token ? true : false,
  booking: booking,
  token: token,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    getbooking: (state) => {
      state.loading = true;
    },

    getAll_booking_success: (state, { payload }) => {
      state.loading = false;
      console.log(payload)
      state.all_booking = payload;
    },

    getCurrentSuccess: (state, { payload }) => {
      state.loading = false;
      state.current_booking = payload;
    },

    get_booking_Failure: (state) => {
      state.loading = false;
      state.hasError = true;
    },

    getAuthenticate: (state, { payload }) => {
      state.loading = false;
      state.bookingAuthenticate = true;
      state.booking = payload.booking;
      state.token = payload.accessToken;
    },

    isAuthenticateError: (state) => {
      state.hasError = true;
      state.loading = false;
      state.bookingAuthenticate = false;
    },

    getbookingProfile: (state, { payload }) => {
      state.loading = false;
      state.booking = payload;
      state.bookingAuthenticate = true;
    },
  },
});

export const {
  getbooking,
  getAll_booking_success,
  getCurrentSuccess,
  get_booking_Failure,
  getbookingProfile,
  getAuthenticate,
  isAuthenticateError,
} = bookingSlice.actions;

export const bookingSelector = (state) => state.booking;

export const fetchAllbooking = () => async (dispatch) => {
  dispatch(getbooking());
  const key = "fetchAllbooking";
  try {
    const { data } = await axios.get(
      KeyUri.BACKEND_URI + `/get-all-booking`,
      config
    );
    dispatch(getAll_booking_success(data));
  } catch (error) {
    dispatch(get_booking_Failure());
  }
};

export const createbooking = (values) => async (dispatch) => {
  dispatch(getbooking());
  const key = "create";
  try {
    const { data } = await axios.post(
      KeyUri.BACKEND_URI + `/createbooking`,
      values,
      config
    );
    toast.success(data.msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(fetchAllbooking());
  } catch ({ response }) {
    toast.error(response.data.msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(get_booking_Failure());
  }
};

export const fetchonebooking = (id) => async (dispatch) => {
  dispatch(getbooking());
  const key = "fetchOnebooking";
  try {
    const { data } = await axios.get(
      KeyUri.BACKEND_URI + `/get-booking/${id}`,
      config
    );
    dispatch(getCurrentSuccess(data));
  } catch (error) {
    dispatch(get_booking_Failure());
  }
};

export const updatebooking = (values, id) => async (dispatch) => {
  const key = "booking";
  dispatch(getbooking());

  try {
    const { data } = await axios.put(
      KeyUri.BACKEND_URI + `/update-booking/${id}`,
      values,
      config
    );

    toast.success(data.msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(fetchAllbooking());
  } catch ({ response }) {
    // Show error message using Typography
    toast.success(response.data.msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(get_booking_Failure());
  }
};

export const deletebooking = (id) => async (dispatch) => {
  dispatch(getbooking());
  const key = "create";
  try {
    const { data } = await axios.delete(
      KeyUri.BACKEND_URI + `/delete-booking/${id} `,
      config
    );
    if (data && data.msg) {
      // Show success toast if 'msg' exists in the response
      toast.success(data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(fetchAllbooking());
    } else {
      console.error("Unexpected response format:", data);
      dispatch(get_booking_Failure());
    }
  } catch (error) {
    console.error("An error occurred:", error);
    toast.error("An error occurred", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(get_booking_Failure());
  }
};

export const logOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    window.location.href = "/";
  } catch (error) {
    dispatch(isAuthenticateError());
  }
};

export const fetchbookinglogin = (logindata) => async (dispatch) => {
  dispatch(getbooking());
  try {
    const { data } = await axios.post(
      KeyUri.BACKEND_URI + "/dealerAuth",
      logindata,
      config
    );

    dispatch(getAuthenticate(data));
    localStorage.setItem("token", JSON.stringify(data.accessToken));
  } catch (error) {
    dispatch(isAuthenticateError());
  }
};

export const fetchDealerProfile = (token) => async (dispatch) => {
  const loginConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(getbooking());
  try {
    const { data } = await axios.get(
      KeyUri.BACKEND_URI + "/dealerProfile",
      loginConfig
    );
    dispatch(getbookingProfile(data));
  } catch (error) {
    dispatch(logOut());
  }
};

export default bookingSlice.reducer;
