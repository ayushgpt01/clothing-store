import { FC } from "react";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";
import type { CategoryItem } from "../../store/categories/categoriesType";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
