import React, { useContext, useState } from "react";
import { Context } from "../components/Context";
import PropTypes from "prop-types";

function CartItems({ item }) {
  const { removeItem } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  const trashClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={trashClass}
        onClick={() => removeItem(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></i>
      <img src={item.url} width="130px" alt="cart-img" />
      <p>$5.99</p>
    </div>
  );
}

CartItems.prototype = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItems;
