import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import axios from "../../axios/axiosPH";

type ProductData = {
  id: number;
  brand: string;
  model: string;
  image: string;
  description: string;
  price: number;
};

interface HomeState {
  displayedProducts: Array<ProductData>;
  filterModalOpen: boolean;
}

const initialState: HomeState = {
  displayedProducts: [],
  filterModalOpen: false,
};

export const getProductData = createAsyncThunk(
  "home/getProductData",
  async () => {
    const response = axios.get("");
    return response;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setBrandFilter: (state, action: PayloadAction<Array<string>>) => {
      // const products = useAppSelector((state)=> state.products.productsList);
      // const filteredProducts = products.filter(item => item.brand in action.payload);
      // state.displayedProducts = filteredProducts;
    },
    setPriceFilter: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      // const products = useAppSelector((state)=> state.products.productsList);
      // const filteredProducts = products.filter(item => item.price>=action.payload.min && item.price<=action.payload.max);
      // state.displayedProducts = filteredProducts;
    },
  },
});

export const { setBrandFilter, setPriceFilter } = homeSlice.actions;

export default homeSlice.reducer;
