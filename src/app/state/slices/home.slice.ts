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
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.filterModalOpen = action.payload;
    },
  },
});

export const { setModalOpen } = homeSlice.actions;

export default homeSlice.reducer;
