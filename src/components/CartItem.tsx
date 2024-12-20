import React from "react";
import { CartItem } from "../features/cart/cartTypes";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../features/cart/cartSlice";

interface CartItemProps {
  item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <p>
        {item.name} - ${item.price}
      </p>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) =>
          dispatch(updateItem({ ...item, quantity: +e.target.value }))
        }
        min="1"
      />
      <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
    </div>
  );
};

export default CartItemComponent;
