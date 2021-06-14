import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductData } from "../../types";

interface ProductState {
  productsList: Array<ProductData>;
  displayed: Array<ProductData>;
}

const initialProductState: ProductState = {
  productsList: [],
  displayed: [],
};

export const fetchProductsList = createAsyncThunk(
  "products/fetchProductsList",
  async () => {
    const response = axios.get("");
    return response;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    updateProductsList: (state, action: PayloadAction<Array<ProductData>>) => {
      state.productsList = action.payload;
    },
    setBrandFilter: (state, action: PayloadAction<Array<string>>) => {
      const products = state.productsList;
      const filteredProducts = products.filter(
        (i) => i.brand in action.payload
      );
      state.displayed = filteredProducts;
    },
    setPriceFilter: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      const products = state.productsList;
      const filteredProducts = products.filter(
        (i) => i.price >= action.payload.min && i.price <= action.payload.max
      );
      state.displayed = filteredProducts;
    },
  },
  extraReducers: {
    [fetchProductsList.fulfilled.toString()]: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

export const { updateProductsList, setBrandFilter, setPriceFilter } =
  productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;
