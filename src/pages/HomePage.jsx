import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router";
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">
        Bringing back the gadgets that defined a generation
      </h1>
      <p className="hero-subtitle">
        From PlayStation 2 to iPod Touch — find your retro favorites here.
      </p>
      <Link to="/products" className="hero-btn">
        Shop Now
      </Link>
    </div>
  );
};

export default HomePage;
