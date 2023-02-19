import { useSelector, useDispatch } from "react-redux/es/exports";
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
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cartActions";
import { selectCartItems } from "../../store/cart/cartSelector";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = item;
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, item));
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, item));
  };
  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, item));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10060;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
