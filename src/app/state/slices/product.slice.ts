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
    const response = axiosPH.get("/");
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
    setFilters: (
      state,
      action: PayloadAction<{ brands: Array<string>; min: number; max: number }>
    ) => {
      console.log(action.payload);

      let products = state.productsList;
      if (action.payload.brands.length > 0) {
        products = products.filter((i) => {
          console.log(i.brand);
          return action.payload.brands.includes(i.brand);
        });
      }

      products = products.filter((i) => {
        console.log(i.price);
        return i.price <= action.payload.max && i.price >= action.payload.min;
      });
      // }
      console.log(products);
      state.displayed = products;
    },
    clearFilters: (state) => {
      state.displayed = state.productsList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        console.log(action.payload.data.products);
        state.arrived = true;
        state.productsList = action.payload.data.products;
      })
      .addCase(fetchProductsList.pending, (state) => {
        state.productsList = [];
      });
  },
});

export const { updateProductsList, setFilters, clearFilters } =
  productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;
