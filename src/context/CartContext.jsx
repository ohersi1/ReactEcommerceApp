import React from "react";
import { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    setCartItems((prev) => {
      let exists = prev.find((item) => item.name === product.name);
      if (exists) {
        return prev.map((item) => {
          return item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
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
  const decreaseItem = (name) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          return item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
        .filter((item) => item.quantity > 0);
    });
  };
  const increaseItem = (name) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        return item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    });
  };
  const clearCart = () => setCartItems([]);
  const value = {
    cartItems,
    addItem,
    removeItem,
    decreaseItem,
    increaseItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
