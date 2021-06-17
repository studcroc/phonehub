import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "../../types";

const initialState: HomeState = {
  filterModalOpen: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setFilterModalOpen: (state, action: PayloadAction<boolean>) => {
      state.filterModalOpen = action.payload;
    },
  },
});

export const { setFilterModalOpen } = homeSlice.actions;

export default homeSlice.reducer;
