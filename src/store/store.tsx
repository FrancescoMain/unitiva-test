import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../Products/store/Product.reducer";

const rootReducer = combineReducers({
  products: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
