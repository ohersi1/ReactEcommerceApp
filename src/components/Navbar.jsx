import React from 'react';
// import { Link } from 'react-router-dom';



// const NavBar = () => {
//   return (
//     <div className='navbar'>
//       <ul>
//         <li><Link to="/" >Home</Link></li>
//         <li><Link to="/products" >Products</Link></li>
//         <li><Link to="cart" >Cart</Link></li>
//         <li><Link to="/checkout" >Checkout</Link></li>
//       </ul>
//     </div>
//   )
// }

// export default NavBar

import { Link } from "react-router-dom";
import logo from "../assets/retro-vault-logo.png"; // <-- save your image into src/assets
import './Navbar.css';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="RetroVault Logo" className="navbar-logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
