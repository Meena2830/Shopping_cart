import { CartItem } from "../features/cart/cartTypes";

const calculateTotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export default calculateTotal;
