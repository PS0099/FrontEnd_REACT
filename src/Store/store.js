import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/authSlice";
import mainSlice from "../Features/mainSlice";
import weatherSlice from "../Features/weatherSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    main: mainSlice,
    weather: weatherSlice, // ✅ Correct spelling
  },
});


export default store;
