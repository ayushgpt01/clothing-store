import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "SET_CATEGORIES",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesSuccess: (state, action) => {
      state.categoriesArray = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoriesSuccess,
  fetchCategoriesStart,
  fetchCategoriesFailed,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
