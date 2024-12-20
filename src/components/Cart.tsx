import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateItem } from "../features/cart/cartSlice";
import { RootState } from "../redux/store";
import calculateTotal from "../utils/calculateTotal";
import { CartItem } from "../features/cart/cartTypes";
import "../styles/Cart.css";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item: CartItem) => (
          <div key={item.id} className="cart-item">
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
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ${calculateTotal(cartItems)}</h3>
    </div>
  );
};

export default Cart;
