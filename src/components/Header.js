import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Pic Some</h1>
      </Link>
      <Link to="/cart">
        <i class="ri-shopping-cart-fill"></i>
      </Link>
    </header>
  );
}

export default Header;
