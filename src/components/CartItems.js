import React, { useContext } from "react";
import { Context } from "../components/Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItems({ item }) {
  const { removeItem } = useContext(Context);
  const [hovered, ref] = useHover();

  const trashClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={trashClass}
        onClick={() => removeItem(item.id)}
        ref={ref}
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
