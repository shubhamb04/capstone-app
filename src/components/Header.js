import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

function Header() {
  const { cartItems } = useContext(Context);
  const cartClass =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  return (
    <header>
      <Link to="/">
        <h1>Pic Some</h1>
      </Link>
      <Link to="/cart">
        <i class={`${cartClass}  ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
