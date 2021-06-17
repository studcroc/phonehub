import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import cartReducer from "./state/slices/cart.slice";
import homeReducer from "./state/slices/home.slice";
import productReducer from "./state/slices/product.slice";
import { AppState, CartState, HomeState, ProductState } from "./types";

const initialProductState: ProductState = {
  arrived: false,
  displayed: [],
  productsList: [],
  filteredList: [],
};
const initialHomeState: HomeState = {
  filterModalOpen: false,
};
const initialCartState: CartState = {
  items: [],
};

const initialAppState: AppState = {
  product: initialProductState,
  home: initialHomeState,
  cart: initialCartState,
};

const getPreLoadedState = () => {
  let ps: any = localStorage.getItem("state");
  if(ps){
    let state = JSON.parse(ps);
    return state;
  }else{
    return initialAppState;
  }
};

export const store = configureStore({
  reducer: {
    product: productReducer,
    home: homeReducer,
    cart: cartReducer,
  },
  preloadedState: getPreLoadedState(),
});

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
