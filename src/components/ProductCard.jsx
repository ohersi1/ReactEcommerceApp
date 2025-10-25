import React from "react";
import './ProductCard.css';
import { useCart } from "../context/CartContext";
const ProductCard = ({ name, description, price, image, alt, product }) => {
  const { addItem } = useCart();
  return (
    <div className="product-card">
      <img src={image} alt={alt} />
      <div className="product-card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="product-price">£{price}</div>
        <button onClick={() => addItem(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
