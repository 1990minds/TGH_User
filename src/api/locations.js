import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { KeyUri, config } from "../key";
import { toast } from 'react-toastify'




const initialState = {
   
    all_location:[],
    loading:false,
    hasError:false,
    current_location:null,
  
}


export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {

    getlocation: state => {
      state.loading = true;
    },

    getAll_location_success: (state, {payload})  =>{
      console.log("------------>",payload)
      state.loading = false
      state.all_location = payload
    },


    getCurrentSuccess: (state, {payload}) =>{
        state.loading = false
        state.current_location = payload 
    },

    get_location_Failure: (state) => {
      state.loading = false
      state.hasError = true
    },

   
    
   

  },
})


export const { getlocation ,getAll_location_success, getCurrentSuccess, get_location_Failure} = locationSlice.actions;



export const locationSelector = state => state.location;



  export const fetchAlllocation = () => async (dispatch) => {
    dispatch(getlocation());
    const key = 'fetchAlllocation';
    try {
      const { data } = await axios.get(KeyUri.BACKEND_URI + `/get-all-locations`,config); 
      console.log(data);
      dispatch(getAll_location_success(data));
    } catch (error) {
      dispatch(get_location_Failure());
    }
  };


export const createlocation = (values) => async (dispatch) => {

  

  dispatch(getlocation());
  const key = 'create'; 
  try {
  const { data } = await axios.post(KeyUri.BACKEND_URI + `/createlocation`,values,config);
  toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(fetchAlllocation());
    } catch ({ response }) {
      toast.error (response.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(get_location_Failure());
    }
  };



  export const fetchonelocation = (id) => async (dispatch) => {
    dispatch(getlocation());
    const key = 'fetchOnelocation';
    try {
      const { data } = await axios.get(KeyUri.BACKEND_URI + `/get-location/${id}`,config);
      dispatch(getCurrentSuccess(data));
    } catch (error) {
      dispatch(get_location_Failure());
    }
  };


  export const updatelocation = (values, id) => async (dispatch) => {
   
    const key = 'location';
    dispatch(getlocation());
  
    try {
      const { data } = await axios.put(KeyUri.BACKEND_URI + `/update-location/${id}`, values, config);
     
      toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
    dispatch(fetchAlllocation());
    } catch ({ response }) {
      // Show error message using Typography
      toast.success (response.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(get_location_Failure());
    }
  };


  export const deletelocation = (id) => async (dispatch) => {
   
    dispatch(getlocation());
    const key = 'create';
    try {
      const { data } = await axios.delete(KeyUri.BACKEND_URI + `/delete-location/${id} `, config);
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
        dispatch(fetchAlllocation());
      } else {
        console.error("Unexpected response format:", data);
        dispatch(get_location_Failure());
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
      dispatch(get_location_Failure());
    }
  };





export default locationSlice.reducer;
