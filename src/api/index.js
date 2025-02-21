import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from './vehicles';
import locationReducer from './locations';
import routeReducer from './route';
import bookingReducer from './bookings'


export default configureStore({
    reducer: {
        vehicle:vehicleReducer,
        location:locationReducer,
        route:routeReducer,
        booking:bookingReducer,
    },
  });