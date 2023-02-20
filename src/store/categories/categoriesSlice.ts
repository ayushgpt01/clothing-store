import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, CategoriesState } from "./categoriesType";

const INITIAL_STATE: CategoriesState = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "CATEGORIES",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
      state.categoriesArray = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesFailed: (state, action: PayloadAction<Error>) => {
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
