import { createSlice } from "@reduxjs/toolkit";
import desserts from "../../data";

const initialState = {
  desserts,
  selectedDesserts: [],
  totalPrice: 0,
  totalAmount: 0,
  orderConfirmed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.selectedDesserts.push(payload);
      cartSlice.caseReducers.calculateTotal(state);
    },
    increaseQuantity: (state, { payload }) => {
      const dessert = state.selectedDesserts.find((d) => d.id === payload);
      if (dessert) {
        dessert.amount += 1;
      }
      cartSlice.caseReducers.calculateTotal(state);
    },
    decreaseQuantity: (state, { payload }) => {
      const dessert = state.selectedDesserts.find((d) => d.id === payload);
      if (dessert && dessert.amount > 1) {
        dessert.amount -= 1;
      } else {
        state.selectedDesserts = state.selectedDesserts.filter(
          (d) => d.id !== payload
        );
      }
      cartSlice.caseReducers.calculateTotal(state);
    },
    removeFromCart: (state, { payload }) => {
      state.selectedDesserts = state.selectedDesserts.filter(
        (d) => d.id !== payload
      );
      cartSlice.caseReducers.calculateTotal(state);
    },
    resetCart: (state) => {
      state.selectedDesserts = [];
      state.totalPrice = 0;
      state.totalAmount = 0;
      state.orderConfirmed = false;
    },
    calculateTotal: (state) => {
      state.totalAmount = 0;
      state.totalPrice = 0;

      state.selectedDesserts.forEach((d) => {
        state.totalPrice += d.amount * d.price;
        state.totalAmount += d.amount;
      });
    },
    confirmOrder: (state) => {
      state.orderConfirmed = true;
    },

    hideOrderConfirmed: (state) => {
      state.orderConfirmed = false;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  confirmOrder,
  hideOrderConfirmed,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
