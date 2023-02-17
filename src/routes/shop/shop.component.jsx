import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { fetchCategoriesAsync } from "../../store/actions/categoriesActions";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategoriesAsync(dispatch);
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
