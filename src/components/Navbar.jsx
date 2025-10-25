import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { useCart } from "../context/CartContext";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const { cartItems } = useCart();
  const count = cartItems.reduce((n, item) => n + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="RetroVault Logo" className="navbar-logo" />
        </Link>
      </div>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={closeMenu}>
            Cart {count > 0 ? <span className="cart-count">{count}</span>: ""}
          </Link>
        </li>
        <li>
          <Link to="/checkout" onClick={closeMenu}>
            Checkout
          </Link>
        </li>
      </ul>
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavBar;
