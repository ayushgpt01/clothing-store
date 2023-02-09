import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Image,
  CartButton,
  ProductCardContainer,
  Footer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
