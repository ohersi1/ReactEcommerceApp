import React from "react";
const CartItem = ({ items, stateChange }) => {
  let total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleCurrency = (num) => {
    let n = num;
    const formatted = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
    return formatted;
  };
  const decrease = (i) => {
    stateChange((prev) => {
      let newArr = prev.map((item, index) =>
        index === i ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((obj) => (obj.quantity !== 0));
      return newArr;
    });
  };
  const increase = (i) => {
    stateChange((prev) =>
      prev.map((item, index) =>
        index === i ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  return (
    <div>
      Cart Items
      <div className="cart">
        {items.map((item, i) => {
          return (
            <div key={i}>
              <h2>{item.name}</h2>
              <p>Price: {handleCurrency(item.price)}</p>
              <p>
                Quantity:{" "}
                <button onClick={() => decrease(i)} className="decrease">
                  -
                </button>{" "}
                {item.quantity}{" "}
                <button className="increase" onClick={() => increase(i)}>
                  +
                </button>
              </p>
              <p>Subtotal: {handleCurrency(item.quantity * item.price)}</p>
            </div>
          );
        })}
        <div>{handleCurrency(total)}</div>
      </div>
    </div>
  );
};

export default CartItem;
