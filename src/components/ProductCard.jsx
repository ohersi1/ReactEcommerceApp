import React from "react";
import './ProductCard.css';
const ProductCard = ({ name, description, price, image, alt }) => {
  return (
    <div className="product-card">
      <img src={image} alt={alt} />
      <div className="product-card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="product-price">£{price}</div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
