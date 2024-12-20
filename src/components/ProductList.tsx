import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { CartItem } from "../features/cart/cartTypes";
import "../styles/ProductList.css";
import Product1Image from "../assets/images/Product_1.jpg";
import Product2Image from "../assets/images/Product_2.jpg";
import Product3Image from "../assets/images/Product_3.jpg";

const products: CartItem[] = [
  {
    id: 1,
    name: "T-shirt",
    image: Product1Image,
    price: 10,
    quantity: 1,
  },
  {
    id: 2,
    name: "Hoodie",
    image: Product2Image,
    price: 20,
    quantity: 1,
  },

  {
    id: 2,
    name: "Hoodie",
    image: Product2Image,
    price: 20,
    quantity: 1,
  },
  {
    id: 3,
    name: "Hoodie",
    image: Product3Image,
    price: 30,
    quantity: 1,
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: CartItem) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <p>
            {product.name} - ${product.price}
          </p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
