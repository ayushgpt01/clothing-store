import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  Quantity,
  RemoveButton,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Arrow,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = item;

  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemFromCart(item);
  const clearItemHandler = () => clearItemFromCart(item);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10060;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
