import { createSelector } from "reselect";
import type { CategoryMap, CategoriesState } from "./categoriesType";
import type { RootState } from "../store";

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

const selectCategoriesArray = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categoriesArray): CategoryMap =>
    categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const SelectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
