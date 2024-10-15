import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import carReducer from "./redux/products/CarSlice";
import reviewReducer from "./redux/products/ReviewSlice";
import cartReducer from "./redux/products/CartSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    reviews: reviewReducer,
    cart: cartReducer,
  },
});

export default store;
