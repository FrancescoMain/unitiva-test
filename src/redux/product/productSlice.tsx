import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../lib/type";

export const ProductSlice = createSlice({
  name: "product",
  initialState: [] as Product[],
  reducers: {
    addToProducts: (state, action: PayloadAction<Product[]>) => {
      action.payload.forEach((product) => {
        const index = state.findIndex((p) => p.id === product.id);
        if (index === -1) {
          state.push(product);
        }
      });
    },
    removeToProducts: (state, action: PayloadAction<Product>) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.qty--;
      }
    },
  },
});

export const { addToProducts, removeToProducts } = ProductSlice.actions;
