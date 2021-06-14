import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import API_ENDPOINTS from "../../../adapter/api";

interface Product {
    id: number,
    brand: string,
    model: string,
    price: number,
    image: string,
    description: string,
}

interface ProductState {
    productsList: Array<Product>
}

const initialProductState: ProductState = {
    productsList: [],
};

export const fetchProductsList = createAsyncThunk('products/fetchProductsList', async () => {
    const response = await axios.get(`${API_ENDPOINTS.PRODUCTS}`);
    return response.data.products;
});

export const productSlice = createSlice({
    name: 'products',
    initialState: initialProductState,
    reducers: {
        updateProductsList: (state, action: PayloadAction<Array<Product>>) => {
            state.productsList = action.payload;
        },
    },
    extraReducers: {
        [fetchProductsList.fulfilled.toString()]: (state, action) => {
            state.productsList = action.payload;
        },
    }
});

export const { updateProductsList } = productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;