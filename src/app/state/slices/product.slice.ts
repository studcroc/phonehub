import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosPH from "../../../axios/axiosPH";
import { ProductData, ProductState } from "../../types";

const initialProductState: ProductState = {
  productsList: [],
  displayed: [],
  arrived: false,
  filteredList: [],
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
    setFilters: (
      state,
      action: PayloadAction<{ brands: Array<string>; min: number; max: number }>
    ) => {
      // console.log(action.payload);

      let products = state.productsList;
      if (action.payload.brands.length > 0) {
        products = products.filter((i) => {
          // console.log(i.brand);
          return action.payload.brands.includes(i.brand);
        });
      }

      products = products.filter((i) => {
        // console.log(i.price);
        return i.price <= action.payload.max && i.price >= action.payload.min;
      });
      // console.log(products);
      state.filteredList = products;
      state.displayed = products;
    },
    clearFilters: (state) => {
      state.filteredList = state.productsList;
      state.displayed = state.productsList;
    },
    sortProducts: (state, action: PayloadAction<String>) => {
      if (action.payload === "Select an option") {
        state.displayed = state.filteredList;
      } else if (action.payload === "Price (Low to High)") {
        let products = [...state.filteredList];
        products.sort((a, b) => (a.price > b.price ? 1 : -1));
        state.displayed = products;
      } else if (action.payload === "Price (High to Low)") {
        let products = [...state.filteredList];
        products.sort((a, b) => (a.price < b.price ? 1 : -1));
        state.displayed = products;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.arrived = true;
        state.productsList = action.payload.products;
        state.displayed = action.payload.products;
        state.filteredList = action.payload.products;
      })
      .addCase(fetchProductsList.pending, (state) => {
        state.productsList = [];
      });
  },
});

export const { updateProductsList, setFilters, clearFilters, sortProducts } =
  productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;
