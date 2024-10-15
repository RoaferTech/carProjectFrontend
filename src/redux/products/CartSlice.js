import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalItems: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
      state.cartTotalAmount = calculateCartTotal(state.cartItems);
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload
      );
      if (existingItem) {
        existingItem.quantity++;
      }
      state.cartTotalAmount = calculateCartTotal(state.cartItems);
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }
      state.cartTotalAmount = calculateCartTotal(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartTotalAmount = calculateCartTotal(state.cartItems);
    },
    resetCart(state) {
      state.cartTotalAmount = 0;
      state.cartItems = [];
    },
  },
});

const calculateCartTotal = (cartItems) => {
  let total = 0;
  for (const item of cartItems) {
    total += item.price * item?.quantity;
  }
  return total;
};

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
