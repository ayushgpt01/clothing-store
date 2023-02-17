import { useDispatch, useSelector } from "react-redux";
import { CartIconContainer, ShoppingBag, ItemCount } from "./cart-icon.styles";
import { toggleCartReducer } from "../../store/slices/cartSlice";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/selectors/cartSelector";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(toggleCartReducer(!isCartOpen));
  const cartCount = useSelector(selectCartCount);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingBag />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
