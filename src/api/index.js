import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from './vehicles';
import locationReducer from './locations';
import routeReducer from './route';
import bookingReducer from './bookings'
import userAuthReducer from './userAuth'

export default configureStore({
    reducer: {
        vehicle:vehicleReducer,
        location:locationReducer,
        route:routeReducer,
        booking:bookingReducer,
        userauth:userAuthReducer
    },
  });