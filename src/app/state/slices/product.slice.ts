import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosPH from "../../../axios/axiosPH";
import { ProductData } from "../../types";

interface ProductState {
  productsList: Array<ProductData>;
  displayed: Array<ProductData>;
  arrived: boolean;
}

const initialProductState: ProductState = {
  productsList: [],
  displayed: [],
  arrived: false,
};

export const fetchProductsList = createAsyncThunk(
  "products/fetchProductsList",
  async () => {
    const response = await axiosPH.get("/");
    return response.data;
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
    sortProducts: (state, action: PayloadAction<String>) => {
      if(action.payload === "Select an option"){
        state.displayed = state.productsList;
      }else if(action.payload === "Price (Low to High)"){
        let products = state.displayed;
        products.sort((a, b) => a.price > b.price? 1: -1);
        state.displayed = products;
      }else if (action.payload === "Price (High to Low)"){
        let products = state.displayed;
        products.sort((a, b) => a.price < b.price? 1: -1);
      }else {
        state.displayed = state.productsList;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        console.log(action.payload.products);
        state.arrived = true;
        state.productsList = action.payload.products;
        state.displayed = action.payload.products;
      })
      .addCase(fetchProductsList.pending, (state) => {
        state.productsList = [];
      });
  },
});

export const { updateProductsList, setBrandFilter, setPriceFilter, sortProducts } =
  productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;
