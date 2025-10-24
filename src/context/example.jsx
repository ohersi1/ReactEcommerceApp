// ✅ 1. Import what we need from React
import { createContext, useContext, useState } from "react";

// ✅ 2. Create the Context object itself
// This is like creating a "container" that will hold your cart data globally.
const CartContext = createContext();

// ✅ 3. Build a Provider component
// This component will wrap around any part of the app that needs access to the cart.
export const CartProvider = ({ children }) => {
  // 🛒 The actual cart state that will live globally
  const [cartItems, setCartItems] = useState([]);

  // ✅ Function: add item to the cart
  // If the item already exists, we increase its quantity.
  const addItem = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        // Update quantity for the existing item
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to cart
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Function: remove item completely
  const removeItem = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  // ✅ Function: decrease quantity
  const decreaseItem = (name) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Function: increase quantity
  const increaseItem = (name) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ Function: clear cart
  const clearCart = () => setCartItems([]);

  // ✅ 4. Bundle all data & functions into one object
  const value = {
    cartItems,
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
    clearCart,
  };

  // ✅ 5. Return the Provider component
  // Everything inside {children} now has access to the `value` above.
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// ✅ 6. Custom hook for easy access
// So instead of writing useContext(CartContext) everywhere,
// you can just use: const { cartItems, addItem } = useCart();
export const useCart = () => useContext(CartContext);


