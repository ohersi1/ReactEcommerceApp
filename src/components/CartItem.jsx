import React from "react";
const CartItem = ({ items }) => {
  return (
    <div>
      Cart Item
      {items.map((item, i) => {
        return (
          <div key={i}>
            <h2>{item.name}</h2>
            <p>£{item.price}</p>
            <p>{item.quantity}</p>
            <p>Total: £{item.price * item.quantity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
