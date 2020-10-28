import React, { useContext, useState } from "react";
import { Context } from "../components/Context";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtontext] = useState("Place Order");
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
  });
  const cartDisplay = cartItems.map((item) => (
    <CartItems key={item.id} item={item} />
  ));

  function placeOrder() {
    if (cartItems.length > 0) {
      setButtontext("Placing Order...");
      setTimeout(() => {
        console.log("Order Placed");
        setButtontext("Place Order");
        emptyCart();
      }, 3000);
    }
  }

  return (
    <main className="cart-page">
      <h2>Cart</h2>
      {cartDisplay}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        <button onClick={placeOrder}>
          {cartItems.length > 0 ? buttonText : <Link to="/">Add Items</Link>}
        </button>
      </div>
    </main>
  );
}

export default Cart;
