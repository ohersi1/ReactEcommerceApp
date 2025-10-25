import React from "react";
import { useCart } from "../context/CartContext";
const CartItem = () => {
  const { cartItems, increaseItem, decreaseItem, clearCart } = useCart();
  let total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleCurrency = (num) => {
    const formatted = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
    return formatted;
  };
  return (
    <div>
      Cart Items
      <div className="cart">
        {cartItems.map((item) => {
          return (
            <div key={item.name}>
              <h2>{item.name}</h2>
              <p>Price: {handleCurrency(item.price)}</p>
              <p>
                Quantity:{" "}
                <button className="decrease" onClick={() => decreaseItem(item.name)} >
                  -
                </button>{" "}
                {item.quantity}{" "}
                <button className="increase" onClick={() => increaseItem(item.name)}>
                  +
                </button>
              </p>
              <p>Subtotal: {handleCurrency(item.quantity * item.price)}</p>
            </div>
          );
        })}
        <div>Final Amount: {handleCurrency(total)}</div>
      </div>
    </div>
  );
};

export default CartItem;
