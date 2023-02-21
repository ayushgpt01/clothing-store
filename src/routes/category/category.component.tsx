import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategoriesMap,
  SelectCategoriesIsLoading,
} from "../../store/categories/categoriesSelector";
import Spinner from "../../components/spinner/spinner.component";
import { CategoryTitle, CategoryContainer } from "./category.styles";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(SelectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
