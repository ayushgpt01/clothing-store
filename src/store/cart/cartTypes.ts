import { CategoryItem } from "../categories/categoriesType";

export type CartItem = CategoryItem & {
  quantity: number;
};

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};
