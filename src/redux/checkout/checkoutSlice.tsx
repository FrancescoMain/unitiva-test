import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../lib/type";
import { CartProduct } from "../cart/cartSlice";

const Checkout = {
  counter: 0,
};

export const CheckoutSlice = createSlice({
  name: "checkout",
  initialState: Checkout,
  reducers: {
    addToCheckout: (state, action: PayloadAction<CartProduct[]>) => {
      action.payload.map((p) => {
        state.counter += p.amount;
      });
    },
    resetCheckout: () => Checkout,
  },
});

export const { addToCheckout, resetCheckout } = CheckoutSlice.actions;
