import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, ProductData } from "../../types";

interface CartState {
  items: Array<CartItem>;
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductData>) => {
      let found = false;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].qty += 1;
          found = true;
          break;
        }
      }
      if (!found) {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload) {
          state.items[i].qty += 1;
          break;
        }
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload) {
          state.items[i].qty -= 1;
          break;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
