import React from "react";
import { useState } from "react";
import "./CartPage.css";
import CartItem from "../components/CartItem";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "PS2",
      price: 149.99,
      quantity: 1,
    },
    {
      name: "Nintendo Wii",
      price: 299.99,
      quantity: 4,
    },
    {
      name: "Nintendo 64",
      price: 99.99,
      quantity: 5,
    },
    {
      name: "Sony Ericsson W810i",
      price: 349.99,
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
