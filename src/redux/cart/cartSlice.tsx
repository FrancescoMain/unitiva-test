import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../lib/type";

export interface CartProduct extends Product {
  amount: number;
  index?: number;
}

export const CartSlice = createSlice({
  name: "cart",
  initialState: [] as CartProduct[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = state.find(
        (p) =>
          p.id === action.payload.id &&
          p.sizeSelected?.size === action.payload.sizeSelected?.size
      );

      if (product) {
        product.amount += 1;
      } else {
        state.push({
          ...action.payload,
          amount: 1,
        });
      }
    },
    removeToCart: (state, action: PayloadAction<Product>) => {
      const product = state.find(
        (p) =>
          p.sizeSelected?.size === action.payload.sizeSelected?.size &&
          action.payload.id === p.id
      );
      const productIndex = state.findIndex(
        (p) =>
          p.sizeSelected?.size === action.payload.sizeSelected?.size &&
          action.payload.id === p.id
      );
      if (product) {
        product.amount -= 1;
        if (product.amount === 0) {
          state.splice(productIndex, 1);
        }
      }
    },
    resetCart: () => [],
  },
});

export const { addToCart, removeToCart, resetCart } = CartSlice.actions;
