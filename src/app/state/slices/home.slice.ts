import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  filterModalOpen: boolean;
}

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
