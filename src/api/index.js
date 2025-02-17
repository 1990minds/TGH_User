import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from './vehicles';
import locationReducer from './locations';
import routeReducer from './route';


export default configureStore({
    reducer: {
        vehicle:vehicleReducer,
        location:locationReducer,
        route:routeReducer,
    },
  });