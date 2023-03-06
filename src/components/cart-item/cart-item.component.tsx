import { FC, memo } from "react";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import type { CartItem as Item } from "../../store/cart/cartTypes";

type CartItemProp = {
  cartItem: Item;
};

const CartItem: FC<CartItemProp> = memo(({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
