import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import carReducer from "./redux/products/CarSlice";
import reviewReducer from "./redux/products/ReviewSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    reviews: reviewReducer,
  },
});

export default store;
