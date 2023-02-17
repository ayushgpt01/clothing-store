import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categoriesArray: [],
};

export const categoriesSlice = createSlice({
  name: "SET_CATEGORIES",
  initialState: INITIAL_STATE,
  reducers: {
    categoriesReducer: (state, action) => {
      state.categoriesArray = action.payload;
    },
  },
});

export const { categoriesReducer } = categoriesSlice.actions;
export default categoriesSlice.reducer;
