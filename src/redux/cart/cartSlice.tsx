import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../lib/type";

interface CartProduct extends Product {
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
      if (productIndex !== -1) {
        state[productIndex].amount += 1;
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },
  },
});

export const { addToCart } = CartSlice.actions;