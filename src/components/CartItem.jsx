import React from "react";
const CartItem = ({ items }) => {
    let total = 0;
  return (
    <div>
      Cart Items
      {items.map((item, i) => {
        total+= item.price * item.quantity;
        return (
          <div key={i}>
            <h2>{item.name}</h2>
            <p>£{item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.quantity * item.price}</p>
          </div>
        );
      })}
      <div>£{total}</div>
    </div>
  );
};

export default CartItem;
