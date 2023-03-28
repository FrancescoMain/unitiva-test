import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../lib/type";
import { SizeProductPayload, SizeObjProductPayload } from "./type";

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
        if (product.sizeSelected) {
          product.sizeSelected.qty = product.sizeSelected.qty - 1;
          const size = product.sizes.find(
            (s) => s.size === product.sizeSelected?.size
          );
          if (size) {
            size.qty--;
          }
        }
      }
    },
    selectSize: (state, action: PayloadAction<SizeProductPayload>) => {
      const productToUpdate = state.find(
        (p) => p.id === action.payload.product.id
      );
      const sizeInt = parseInt(action.payload.size);
      const sizeObj = action.payload.product.sizes.find(
        (s) => s.size === sizeInt
      );
      if (productToUpdate) {
        productToUpdate.sizeSelected = sizeObj;
      }
    },
    incrementProduct: (state, action: PayloadAction<SizeObjProductPayload>) => {
      const product = state.find((p) => p.id === action.payload.product.id);
      if (product) {
        product.qty += 1;
        const size = product?.sizes.find(
          (s) => s.size === action.payload.size.size
        );
        if (size) {
          size.qty += 1;
        }
      }
    },
    resetProduct: () => [],
  },
});

export const {
  addToProducts,
  removeToProducts,
  selectSize,
  incrementProduct,
  resetProduct,
} = ProductSlice.actions;
