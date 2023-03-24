import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CartSlice } from "./cart/cartSlice";
import { ProductSlice } from "./product/productSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    product: ProductSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
