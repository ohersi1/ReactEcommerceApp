import React from "react";
import { useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import Footer from "./components/Footer";
import './index.css';

const AppContent = () => {
  const { pathname } = useLocation();
  return (
    <div className="app-container">
      {pathname !== "/checkout" && <NavBar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>

      {pathname !== "/checkout" && <Footer />}
    </div>
  );
};

export default AppContent;
