import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productReducer from "./state/slices/product.slice";
import homeReducer from "./state/slices/home.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    home: homeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
