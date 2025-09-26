import React from "react";
import { useState } from "react";
import "./CartPage.css";
import CartItem from "../components/CartItem";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "PS2",
      price: 149.99,
      quantity: 2,
    },
  ]);
  return (
    <div>
      <h1>Your Cart</h1>
      <CartItem items={cartItems} />
    </div>
  );
};

export default CartPage;
