import React from "react";
import { createContext, useContext, useState } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    setCartItems((prev) => {
      let exists = prev.find((item) => item.name === product.name);
      if (exists) {
        return prev.map((item) => {
          return item.name === product.name
            ? { ...item, quantity: item.quantity++ }
            : item;
        });
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  const removeItem = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartProvider;
