import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/products.json");
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="all-products">
      <h1 className="products-heading">All Products</h1>
      <div className="products-grid">
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              alt={product.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
