import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../lib/type";

export interface CartProduct extends Product {
  amount: number;
}

export const CartSlice = createSlice({
  name: "cart",
  initialState: [] as CartProduct[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );

      state.push({
        ...action.payload,
        amount: 1,
        sizeSelected: action.payload.sizeSelected,
      });
    },
    removeToCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.splice(productIndex, 1);
      }
    },
  },
});

export const { addToCart, removeToCart } = CartSlice.actions;
