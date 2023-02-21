import { FC } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cartActions";
import {
  Image,
  CartButton,
  ProductCardContainer,
  Footer,
} from "./product-card.styles";
import { selectCartItems } from "../../store/cart/cartSelector";
import { CategoryItem } from "../../store/categories/categoriesType";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <CartButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </CartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
