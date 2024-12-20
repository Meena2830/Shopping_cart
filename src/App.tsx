import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
